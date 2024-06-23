import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface ProgressBar {
    title: string;
    porcentage: number;
}

export interface Props {
    img: ImageWidget;
    alt: string;
    title: string;
    content: HTMLWidget;
    progrees: ProgressBar[];
    font: HTMLWidget;
    id?: string;

}

export default function Data(props: Props) {

    const { img, alt, title, content, font, progrees, id } = props

    return (
        <div class="w-full h-full py-9" id={id}>
            <div class="flex max-w-[1320px] flex-col lg:flex-row mx-auto px-4 w-full h-full container md:px-14 lg:px-4 font-thicccboi">
                <div class="w-full lg:w-2/4 flex justify-center items-center md:justify-start">
                    <Image src={img} alt={alt} width={300} height={300} class="w-full max-w-[450px] lg:max-w-full" />
                </div>
                <div class="w-full lg:w-2/4 flex flex-col gap-3 lg:pl-24 lg:py-20">
                    <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7 text-primary-content">
                        {title}
                    </h2>
                    <span class="text-base-200 text-[17px] lg:text-lg" dangerouslySetInnerHTML={{ __html: content }}>

                    </span>
                    <ul class="flex flex-col gap-4">
                        {progrees.map((item) => (
                            <li class="flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <span>{item.title}</span>
                                    <span>{item.porcentage}%</span>
                                </div>
                                <div class="flex w-full rounded-lg h-[6px] bg-[#f1f1f1]">
                                    <div class="flex h-[6px] rounded-lg" style={{ width: item.porcentage + "%", background: item.porcentage < 30 ? "#e2626b" : item.porcentage < 60 ? "#ffcc00" : "#4dfa7b" }}>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span class="text-sm" dangerouslySetInnerHTML={{ __html: font }}>
                    </span>
                </div>
            </div>
        </div>
    )
}