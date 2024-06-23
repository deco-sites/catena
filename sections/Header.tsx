import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import ButtonArrowAnimation, {
  Props as Button,
} from "site/components/ui/Buttton/ButtonArrowAnimation.tsx";
import ButtonLanguage, {
  Language,
} from "site/components/ui/Buttton/ButtonLanguage.tsx";
import AnimationScroll from "../islands/header/AnimationHeader.tsx";

type Type = "dark" | "light";
export interface Nav {
  logo?: {
    src?: ImageWidget;
    srcDark?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    languages: Language[];
    button: Button;
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-base-100 transition-all duration-500 ease-out
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg] peer-checked:-translate-x-[250%]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg] peer-checked:-translate-x-[250%]",
];

export default function Haader({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    languages: [
      { label: "brasil", value: "pt", icon: "Change me" },
    ],
    button: {
      label: "Quero Me cadastrar",
      href: "#cadastro",
    },
  },
}: Nav) {
  return (
    <AnimationScroll>
      <nav class=" w-full mx-auto max-w-[1320px] px-4 md:px-14 lg:px-4">
        <div class="flex gap-8 items-center justify-between py-4 xl:container mx-auto xl:px-0 px-4 min-h-24">
          <a href="/">
            <Image
              data-img
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
              loading={"lazy"}
              class="object-cover h-full w-auto max-w-48"
            />
            <Image
              data-img-dark
              src={logo.srcDark || ""}
              width={100}
              height={28}
              alt={logo.alt}
              loading={"lazy"}
              class="object-cover h-full w-auto max-w-48 hidden"
            />
          </a>

          <label
            class="cursor-pointer lg:hidden pt-4 relative z-40 font-base "
            for="menu-mobile"
          >
            <input class="hidden peer" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} data-lines class={`relative ${style}`}></div>
            ))}
            <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40 ">
              &nbsp;
            </div>
            <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 left-0 top-0 transition -translate-x-full w-full z-40">
              <div class="bg-primary flex flex-col float-left gap-6 min-h-full px-6 shadow-2xl w-10/12">
                <span class=" text-2.5xl font-bold py-8 font-thicccboi">
                  Catena
                </span>
                <ul class="flex flex-col gap-6">
                  {navigation?.links.map((link) => (
                    <li>
                      <a
                        href={link.url}
                        aria-label={link.label}
                        class=" text-lg font-bold font-thicccboi"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ButtonLanguage languages={navigation.languages} />
              </div>
            </div>
          </label>

          <ul class="hidden items-center lg:flex w-full justify-end">
            <ul class="flex">
              {navigation.links.map((link) => (
                <li>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    data-links
                    class=" hover:opacity-80 no-underline p-4 font-bold font-thicccboi text-lg "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div class="flex gap-5">
              <ButtonLanguage languages={navigation.languages} />
              <ButtonArrowAnimation
                label={navigation.button.label}
                href={navigation.button.href}
              />
            </div>
          </ul>
        </div>
      </nav>
    </AnimationScroll>
  );
}
