import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  subTitle?: string;
  slides?: Testimonial[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  subTitle: "Lorem ipsom",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full min-h-[292px] bg-base-100"
    >
      <div class="flex flex-col justify-center gap-5 p-8 border border-base-200 text-base-content rounded-2xl h-full max-w-[600px]">
        <p class=" relative blockquote before:font-unicons before:content-['\201d'] text-[15px] leading-[28px]">{content?.description}</p>
        <div class="flex items-center gap-5">
          <Image
            class="object-cover w-[70px] h-[70px] rounded-full"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={70}
            height={70}
          />
          <div class="flex flex-col">
            <p class="font-bold text-[19px] text-primary-content">{content?.name}</p>
            <p class="text-[17px]">{content?.position}</p>
          </div>
        </div>
      </div>
    </div >
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:bg-white group-disabled:border-2 group-disabled:border-base-200 bg-base-200"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval, subTitle } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full h-full bg-neutral">

      <div
        id={id}
        class="min-h-min flex flex-col w-full container lg:mx-auto lg:max-w-[1320px] px-4 md:px-14 lg:px-4 py-12 lg:py-28 justify-center items-center font-thicccboi"
      >
        <h2 class="text-2xl mb-5 font-bold lg:text-[28px] md:mb-7 text-primary-content ">
          {title}
        </h2>
        <p class="mb-8 text-[19px] text-center text-base-content">{subTitle}</p>
        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-6"
          rootId={id}
          interval={interval && interval * 1e3}
          infinite
        >
          {slides?.map((slide, index) => (
            <Slider.Item
              index={index}
              class="snap-center flex-none max-w-[600px] w-full md:w-[calc(50%-0.8rem)] md:snap-start lg:md:w-[calc(33.333%-1rem)]"
            >
              <SliderItem
                slide={slide}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        <div class="flex justify-between pt-8 lg:px-16">
          {props.dots && <Dots slides={slides} interval={interval} />}{" "}
          {props.arrows && <Buttons />}
        </div>
      </div>
    </div>

  );
}

export default Carousel;
