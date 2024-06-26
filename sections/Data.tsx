import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Animationprogress from "../islands/Animation/ProgressBar.tsx";
import Porcentage from "../islands/Animation/Porcentage.tsx";

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
  const { img, alt, title, content, font, progrees, id } = props;

  return (
    <div class="w-full h-full py-9" id={id}>
      <div class="flex max-w-[1320px] flex-col lg:flex-row mx-auto px-4 w-full h-full container md:px-14 lg:px-4 font-thicccboi">
        <div class="w-full lg:w-2/4 flex justify-center items-center md:justify-start">
          <Image
            src={img}
            alt={alt}
            width={343}
            height={274}
            class="w-full h-auto max-w-[450px] lg:max-w-full object-cover"
          />
        </div>
        <div class="w-full lg:w-2/4 flex flex-col gap-3 lg:pl-24 lg:py-20">
          <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7 text-primary-content">
            {title}
          </h2>
          <span
            class="text-base-200 text-[17px] lg:text-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </span>
          <Animationprogress id="progres">
            <ul class="flex flex-col gap-4 " id="progres">
              {progrees.map((item, index) => (
                <li class="flex flex-col gap-2">
                  <div class="flex justify-between">
                    <span>{item.title}</span>
                    <Porcentage number={item.porcentage} />
                  </div>
                  <div class="flex w-full rounded-lg h-[6px] bg-[#f1f1f1]">
                    <div
                      data-progress
                      class="flex h-[6px] w-0 rounded-lg duration-300"
                      style={{
                        animationDelay: `${index * .2}s`,
                        maxWidth: item.porcentage + "%",
                        background: item.porcentage < 30
                          ? "#e2626b"
                          : item.porcentage < 60
                          ? "#ffcc00"
                          : "#4dfa7b",
                      }}
                    >
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Animationprogress>
          <span class="text-sm" dangerouslySetInnerHTML={{ __html: font }}>
          </span>
        </div>
      </div>
    </div>
  );
}
