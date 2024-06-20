import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

type Type = "dark" | "light";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
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
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg] peer-checked:-translate-x-[200%]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg] peer-checked:-translate-x-[200%]",
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
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <nav class=" bg-primary w-full  ">
      <div class="flex gap-8 items-center justify-between py-4 container mx-auto lg:px-0 px-4">
        <a href="/">
          <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
        </a>

        <label
          class="cursor-pointer lg:hidden pt-4 relative z-40 font-base "
          for="menu-mobile"
        >
          <input class="hidden peer" type="checkbox" id="menu-mobile" />
          {lineStyles.map((style, index) => (
            <div key={index} class={`relative ${style}`}></div>
          ))}
          <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40 ">
            &nbsp;
          </div>
          <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 left-0 top-0 transition -translate-x-full w-full z-40">
            <div class="bg-primary flex flex-col float-left gap-6 min-h-full px-6 shadow-2xl w-10/12">
              <span class="text-base-100 text-2.5xl font-bold py-8 font-thicccboi">
                Catena
              </span>
              <ul class="flex flex-col gap-6">
                {navigation?.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="text-base-100 text-lg font-bold font-thicccboi"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex items-center gap-3">
                {navigation.buttons?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </label>

        <ul class="hidden items-center justify-between lg:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </ul>
      </div>
    </nav>
  );
}
