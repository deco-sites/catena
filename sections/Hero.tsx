import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ButtonSimple from "site/components/ui/Buttton/ButtonSimple.tsx";

export interface Props {
  title: string;
  titleUnderline: string;
  subTitle: HTMLWidget;
  list: string[];
  CTA: {
    label: string;
    href: string;
  };
  image: ImageWidget;
  alt?: string;
  preload?: boolean;
}

export default function Hero(
  props: Props,
) {
  const {
    title,
    titleUnderline,
    subTitle,
    list,
    CTA,
    image,
    alt,
    preload = false,
  } = props;

  return (
    <div class="w-full bg-primary h-full mt-24 mb-9 after:border-l-[100vw] after:border-l-primary relative after:border-b-[4rem] after:-bottom-[3.995rem] after:border-transparent after:absolute after:bg-transparent after:-z-10 after:left-0 after:right-0">
      <div class="lg:container flex flex-col lg:flex-row px-3 pt-6 ">
        <div class="flex flex-col text-base-100 font-thicccboi gap-5">
          <h2 class="font-bold text-xl">
            {title}
            <span class=" after-bg-custom relative ">{titleUnderline}</span>
          </h2>
          <span
            class="text-base mb-7 font-medium"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          >
          </span>
          <ul class="flex flex-col gap-2 mb-6 font-medium">
            {list.map((item) => (
              <li class="text-[17px] before:content-['\e9dd'] before:mr-2 before:font-unicons">
                {item}
              </li>
            ))}
          </ul>
          <ButtonSimple
            label={CTA.label}
            href={CTA.href}
            class=" bg-secondary text-primary w-max"
          />
        </div>
        <Image
          src={image}
          alt={alt}
          width={345}
          height={380}
          preload={preload}
          fetchPriority={preload ? "high" : "low"}
          loading={preload ? "eager" : "lazy"}
          class=" -mb-32 mt-8"
        />
      </div>
    </div>
  );
}
