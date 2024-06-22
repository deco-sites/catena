import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Icon {
    img: ImageWidget;
    alt: string;
}

export interface Props {
    title: string;
    icons: Icon[]
}

export default function Companies(props: Props) {
    const { title, icons } = props
    return (
        <div class="flex w-full h-full">
            <div class="w-full max-w-[1320px] mx-auto px-4">
                <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7">
                    {title}
                </h2>
                <ul class="flex flex-row flex-wrap gap-2">
                    {icons.map((icon) =>
                        <li class={"w-2/4"}>
                            <Image src={icon.img} alt={icon.alt} width={100} height={100} class={"object-cover"} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}