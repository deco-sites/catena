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
    cards: Card[];
    id?: string;

}

function CardInline({ title, content }: CardInline) {
    return (
        <li class="flex flex-row gap-3 rounded-lg bg-base-100 p-3">
            <div class="rounded-full bg-secondary before:text-center before:content-['\e9dd'] before:top-[10%] before:text-3xl before:bottom-0 before:left-0 before:right-0 before:absolute relative before:font-unicons before:text-primary text-secondary w-11 h-11 min-w-11">
            </div>
            <div class="flex flex-col gap-2">
                <h4 class=" text-xl text-primary font-bold">{title}</h4>
                <span class="text-[17px] text-base-200" dangerouslySetInnerHTML={{ __html: content }}></span>
            </div>
        </li>
    )
}

function Card({ title, content, index }: { title: string, content: HTMLWidget, index: number }) {
    return (
        <div class={`flex flex-col gap-2 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-7.9rem)] relative ${index < 3 && "lg:after:content-[''] lg:after:w-full lg:after:absolute lg:after:h-[1px] lg:after:top-8 lg:after:left-12 lg:after:border-t lg:after:border-t-[#a4aec633]"}`}>
            <div class={`rounded-full w-16 h-16 flex justify-center items-center text-center mb-5 ${index < 3 ? "bg-secondary" : "bg-base-100"}`}>
                <span class="text-center text-2xl font-bold">0{index + 1}</span>
            </div>
            <h4 class="text-base-100 font-bold text-xl">{title}</h4>
            <span class="text-base-100 text-[15px]" dangerouslySetInnerHTML={{ __html: content }}></span>
        </div>
    )
}

export default function Operation(props: Props) {

    const { title, content, cardsInline, cards ,id } = props

    return (
        <div id={id} class="w-full bg-primary flex flex-col gap-7 md:gap-12 h-full py-8 mt-8 mb- after:border-l-[100vw] after:border-l-primary relative after:border-b-[4rem] after:-bottom-[3.995rem] after:border-transparent after:absolute after:bg-neutral after:-z-10 after:left-0 after:right-0">
            <div class=" max-w-[1320px] container md:px-14 lg:px-3 flex flex-col lg:flex-row px-3 pt-6 lg:pt-14 lg:pb-8 lg:gap-0 font-thicccboi text-base-100 gap-7 md:gap-12">
                <div class="w-full order-2 lg:order-1 lg:justify-center flex flex-col lg:w-2/4 ">
                    <h3 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7">
                        {title}
                    </h3>
                    <span dangerouslySetInnerHTML={{ __html: content }}>

                    </span>

                </div>
                <ul class="flex flex-col gap-7 order-1 lg:order-2 lg:w-2/4 lg:py-12 lg:pl-9">
                    {cardsInline.map((card) =>
                        <CardInline content={card.content} title={card.title} />
                    )}

                </ul>
            </div >
            <ul class="flex w-full order-3 flex-col gap-8 pl-4 pr-9 md:flex-wrap md:gap-6 md:flex-row max-w-[1320px] container md:px-14 lg:px-3 ">
                {cards.map((card, index) =>
                    <Card content={card.content} title={card.title} index={index} />
                )}
            </ul>

        </div >
    )
}