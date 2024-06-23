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


  function setCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function Language(value: string) {
    setCookie("language", value, 7);
    globalThis.window.location.reload()
  }


  return (
    <button class="w-" onClick={() => Language(languages[0].value)}>
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
