import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy label
 */
export interface Language {
  label: string;
  value: string;
  icon: ImageWidget;
}

export interface Props {
  languages: Language[];
}

export default function ButtonLanguage({ languages }: Props) {
  return (
    <button class="w-">
      <Image
        src={languages[0].icon}
        alt={languages[0].label}
        width={30}
        height={30}
        loading="eager"
        fetchPriority="low"
        class=""
      />
    </button>
  );
}
