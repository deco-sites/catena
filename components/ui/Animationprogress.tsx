import type { ComponentChildren } from "preact";
import { useSignal, useSignalEffect } from "@preact/signals";


export interface Props {
    children: ComponentChildren;
    id: string;
    width: number;
}

export default function ({ children, id }: Props) {

    useSignalEffect(() => {

        const root: HTMLElement | null = globalThis.document.querySelector(`#${id}`)
        const progrees: HTMLElement[] | null = root?.querySelectorAll("[data-progress]")

        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add('progreesShow')
                }
            })
        })

        progrees!.forEach(progreesbar => {
            myObserver.observe(progreesbar)
        });

    })

    return (
        <div>
            <style dangerouslySetInnerHTML={{
                __html: `@keyframes progressShow {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

.progreesShow {
  animation: progressShow 2s linear both;
}`}}></style>
            {children}
        </div>
    )

}