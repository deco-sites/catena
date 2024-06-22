import { HTMLWidget } from "apps/admin/widgets.ts";


interface Card {
    title: string;
    content: HTMLWidget;
}

export interface Props {
    title: HTMLWidget;
    subTitle: HTMLWidget;
    cards: Card[];

}

export default function Diffenrence(props: Props) {

    const { title, subTitle, cards } = props

    return (
        <div class="w-full h-full py-9">
            <div class="w-full h-full flex flex-col gap-4 px-4">
                <h2 dangerouslySetInnerHTML={{ __html: title }} class={"uppercase text-[17px]"}>

                </h2>
                <h3  class="text-2xl mb-5" dangerouslySetInnerHTML={{ __html: subTitle }}>

                </h3>
                <ul>
                    {cards.map((card) => (
                        <li class="flex flex-col gap-2">
                            <span class="text-xl">
                                {card.title}
                            </span>
                            <span class="text-[17px]" dangerouslySetInnerHTML={{ __html: card.content }}>

                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}