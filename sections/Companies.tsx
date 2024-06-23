import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Icon {
    img: ImageWidget;
    alt: string;
}

export interface Props {
    title: string;
    icons: Icon[];
    id?: string;

}

export default function Companies(props: Props) {
    const { title, icons, id } = props
    return (
        <div class="flex w-full h-full py-8" id={id}>
            <div class="w-full max-w-[1320px] mx-auto px-4 text-center">
                <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7">
                    {title}
                </h2>
                <ul class="flex flex-row flex-wrap gap-2 w-full">
                    {icons.map((icon) =>
                        <li class={"w-[calc(50%-0.5rem)] flex justify-center items-center md:w-[calc(33.333%-0.5rem)] lg:w-[calc(16.666%-0.5rem)]"} >
                            < Image src={icon.img} alt={icon.alt} width={130} height={130} class={"object-cover"} />
                        </li>
                    )}
                </ul>
            </div>
        </div >
    )
}