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
}

export default function Data(props: Props) {

    const { img, alt, title, content, font, progrees } = props

    return (
        <div class="w-full h-full">
            <div class="flex max-w-[1320px] flex-row mx-auto px-4 w-full h-full">
                <div class="w-full lg:w-2/4 flex justify-center items-center">
                    <Image src={img} alt={alt} width={300} height={300} />
                </div>
                <div class="w-full lg:w-2/4 flex flex-col">
                    <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7">
                        {title}
                    </h2>
                    <span class="text-base-200" dangerouslySetInnerHTML={{ __html: content }}>

                    </span>
                    <ul class="flex flex-col gap-3">
                        {progrees.map((item) => (
                            <li class="flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <span>{item.title}</span>
                                    <span>{item.porcentage}%</span>
                                </div>
                                <div class="flex w-full rounded-lg h-1">
                                    <div class="flex h-1 rounded-lg" style={{ width: item.porcentage }}>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span dangerouslySetInnerHTML={{ __html: font }}>
                    </span>
                </div>
            </div>
        </div>
    )
}