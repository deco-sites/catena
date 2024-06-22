import { HTMLWidget } from "apps/admin/widgets.ts";

interface CardInline {
    title: string;
    content: HTMLWidget;
}

interface Card {
    title: string;
    content: HTMLWidget;
}

export interface Props {
    title: string;
    content: HTMLWidget;
    cardsInline: CardInline[];
    cards: Card[]
}

function CardInline({ title, content }: CardInline) {
    return (
        <li class="flex flex-row gap-3 rounded-lg">
            <div class="rounded-full bg-secondary w-11 h-11">

            </div>
            <div class="flex flex-col gap-2">
                <h4>{title}</h4>
                <span dangerouslySetInnerHTML={{ __html: content }}></span>
            </div>
        </li>
    )
}

function Card({ title, content, index }: { title: string, content: HTMLWidget, index: number }) {
    return (
        <div class="flex flex-col gap-2">
            <div class="rounded-full bg-secondary w-11 h-11">
                {index}
            </div>
            <h4>{title}</h4>
            <span dangerouslySetInnerHTML={{ __html: content }}></span>
        </div>
    )
}

export default function Operation(props: Props) {

    const { title, content, cardsInline, cards } = props

    return (
        <div class="w-full bg-primary h-full mt-24 mb-9 after:border-l-[100vw] after:border-l-primary relative after:border-b-[4rem] after:-bottom-[3.995rem] after:border-transparent after:absolute after:bg-transparent after:-z-10 after:left-0 after:right-0">
            <div class=" max-w-[1320px] container flex flex-col lg:flex-row px-3 pt-6 lg:pt-14 lg:pb-8 font-thicccboi ">
                <div class="w-full">
                    <h3 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7">
                        {title}
                    </h3>
                    <span dangerouslySetInnerHTML={{ __html: content }}>

                    </span>

                </div>
                <ul class="flex flex-col gap-2">
                    {cardsInline.map((card) =>
                        <CardInline content={card.content} title={card.title} />
                    )}

                </ul>
            </div >
            <ul class="flex w-full">
                {cards.map((card, index) =>
                    <Card content={card.content} title={card.title} index={index} />
                )}
            </ul>

        </div >
    )
}