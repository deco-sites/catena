import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";


interface Card {
    name: string;
    office: string;
    img: ImageWidget;
    content: HTMLWidget
}

export interface Props {
    title: string;
    subTitle: HTMLWidget
    cards: Card[];
}

export default function Depositions(props: Props) {

    const { title, subTitle, cards } = props

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <span>{subTitle}</span>
            </div>
            <div>

            </div>
        </div>
    )
}