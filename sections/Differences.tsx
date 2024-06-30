import { HTMLWidget } from "apps/admin/widgets.ts";

interface Card {
  title: string;
  content: HTMLWidget;
}

export interface Props {
  title: HTMLWidget;
  subTitle: HTMLWidget;
  cards: Card[];
  id?: string;
}

export default function Diffenrence(props: Props) {
  const { title, subTitle, cards, id } = props;

  return (
    <div class="w-full h-full py-9 mt-16 md:mt-28" id={id}>
      <div class="w-full h-full flex flex-col gap-4 px-4 text-center justify-center items-center max-w-[1320px] mx-auto">
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          class={"uppercase text-[15px] font-bold text-base-200"}
        >
        </h2>
        <h3
          class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7 text-primary-content"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        >
        </h3>
        <ul class="flex flex-col gap-4 md:flex-row justify-center items-center lg:gap-10">
          {cards.map((card) => (
            <li class="flex flex-col gap-2 md:w-[calc(33.333%-1rem)]">
              <span class="text-xl font-bold">
                {card.title}
              </span>
              <span
                class="text-[17px] text-base-200 "
                dangerouslySetInnerHTML={{ __html: card.content }}
              >
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
