import { useSignal, useSignalEffect } from "@preact/signals";
import type { ComponentChildren } from "preact";

export interface Props {
    id: string;
    children: ComponentChildren
}

export default function AnimationFade({ id, children }: Props) {

    console.log("children", id)


    useSignalEffect(() => {
        const root: HTMLElement | null = globalThis.document.querySelector(`#teste`)
        const fadeTop: Array<HTMLElement> | null = root?.querySelectorAll("[data-fadeTop]")
        fadeTop!.forEach((item) => {
            item.id = "data-fadeTop"
            item.classList.add("fadeTop")
        })
    })

    return (
        <div class="w-full h-full">
            <style dangerouslySetInnerHTML={{
                __html: `
                            @keyframes  fadeTop{
                            0% {
                                opacity: 0;
                                transform: translateY(-30px);
                            }

                            100% {
                                opacity: 1;
                                transform: translateY(0);
                            }
            }
                            .fadeTop {

    animation: linear fadeTop both;
    animation-duration:400ms;
                            }
                            
        `}} ></style>
            {children}
        </div>
    )
}