import type { ComponentChildren } from "preact";
import { useSignal, useSignalEffect } from "@preact/signals";


export interface Props {
    children: ComponentChildren
}

export default function AnimationOperations({ children }: Props) {

    useSignalEffect(() => {


        const fadeLeft: HTMLElement[] | null = document.querySelectorAll("#slide-left")
        const fadeRight: HTMLElement[] | null = document.querySelectorAll("#slide-right")

        const observerLeft = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add('slideCustomLeft')
                }
            })
        })
        const observerRight = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add('slideCustomRight')
                }
            })
        })

        fadeLeft!.forEach((item) => {
            observerLeft.observe(item)
        })
        fadeRight!.forEach((item) => {
            observerRight.observe(item)
        })

    })

    return (
        <div>

            <style dangerouslySetInnerHTML={{
                __html: `
                            @keyframes  slideInLeft{
                            0% {
                                opacity: 0;
                                transform: translateX(-30px);
                            }

                            100% {
                                opacity: 1;
                                transform: translateX(0);
                            }
            }
                            @keyframes  slideInRight{
                            0% {
                                opacity: 0;
                                transform: translateX(30px);
                            }

                            100% {
                                opacity: 1;
                                transform: translateX(0);
                            }
            }
                            
                            .slideCustomLeft {
                                animation: slideInLeft 700ms linear both;
                            }
                            .slideCustomRight {
                                animation: slideInRight 700ms linear both;
                            }
                            
        `}} ></style>
            {children}

        </div>
    )
}