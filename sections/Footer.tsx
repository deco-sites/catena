import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";


interface CompanyIcons {
  img: ImageWidget
  alt: string
}

export interface Social {
  network: ImageWidget;
  href: string;
  alt: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  copyright?: string;
  companyIcons: CompanyIcons[];
  social: string;
  icons: Social[];
  location: string;
  email: string;
  emailHref: string;
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  companyIcons,
  social,
  icons,
  location,
  email,
  emailHref
}: Props) {
  return (
    <div class="w-full h-full bg-primary text-base-100 font-thicccboi py-14 lg:py-20">
      <div class="w-full container max-w-[1320px] px-4 md:px-14 lg:px-4 mx-auto flex flex-col gap-8 md:flex-row md:justify-between font-thicccboi">
        <div class="w-full lg:w-2/4 flex flex-col gap-3 text-neutral md:w-2/4 max-w-[360px]">
          <Image src={logo.src || ""} alt={logo.alt} width={100} height={35} class="md:w-full md:max-w-[190px]"/>
          <span class="text-[15px] ">{copyright}</span>
          <ul class="flex flex-row flex-wrap w-full">
            {companyIcons.map((icon) => <li><Image src={icon.img} alt={icon.alt} width={120} height={120} /></li>)

            }
          </ul>
        </div>
        <div class="w-full lg:w-2/4 flex flex-col gap-3 text-neutral md:w-2/4 max-w-[360px]">
          <p class="font-bold text-xl text-base-100">
            {social}
          </p>
          <ul class="w-full flex flex-row gap-2 mb-5">
            {icons.map((icon) =>
              <li>
                <a href={icon.href} class="hover:-translate-x-1 duration-100">
                  <Image src={icon.network} alt={icon.alt} width={20} height={20} />
                </a>
              </li>)
            }
          </ul>
          <span class="text-[17px] mb-3 ">
            {location}
          </span>
          <a href={emailHref} class="text-[17px] hover:text-secondary duration-100">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
