import type { ComponentChildren } from "preact";
import { useSignal, useSignalEffect } from "@preact/signals";

export default function AnimationScroll({ children }: {
  children: ComponentChildren;
}) {
  const active = useSignal<"top" | "hidden" | "show">("top");
  const lastScrollTop = useSignal(0);
  const delta = 5;

  useSignalEffect(() => {
    const handleScroll = () => {
      const nowScrollTop = globalThis.scrollY ||
        document.documentElement.scrollTop;

      const img: HTMLElement | null = globalThis.document.querySelector(
        "[data-img]",
      );
      const imgDark: HTMLElement | null = globalThis.document.querySelector(
        "[data-img-dark]",
      );
      const menu: HTMLElement | null = globalThis.document.querySelector(
        "[data-menu]",
      );
      const menuDark: HTMLElement | null = globalThis.document.querySelector(
        "[data-menu-dark]",
      );

      if (Math.abs(lastScrollTop.value - nowScrollTop) >= delta) {
        if (nowScrollTop < 50) {
          active.value = "top";
          img!.style.display = "flex";
          imgDark!.style.display = "none";
          menu!.style.display = "flex";
          menuDark!.style.display = "none";
          menuDark!.style.zIndex = "-999";
          menu!.style.zIndex = "999";
        } else if (nowScrollTop > 50 && nowScrollTop < 430) {
          active.value = "hidden";
        } else {
          active.value = "show";
          img!.style.display = "none";
          imgDark!.style.display = "flex";
          menu!.style.display = "none";
          menuDark!.style.display = "flex";
          menuDark!.style.zIndex = "999";
          menu!.style.zIndex = "-999";
        }
        lastScrollTop.value = nowScrollTop;
      }
    };

    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  });

  const arrow = {
    "top": `
        input:checked ~ .relative {
            background:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))
        }

        input ~ .relative {
            background:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))
        }
      
    }`,

    "show": `
        input:checked ~ .relative {
            background:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))
        }

        input ~ .relative {
            background:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))
        }
          `,
  };

  return (
    <div
      class={`fixed left-0 w-full z-50 duration-300 shadow-sm peer-checked:bg-base-100 ${
        active.value == "top"
          ? "top-0 text-base-100 bg-primary "
          : active.value == "hidden"
          ? "-top-[100%] bg-primary"
          : "top-0 duration-100 text-base-100 lg:text-primary bg-base-100 "
      } `}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: active.value === "top" ? arrow["top"] : arrow["show"],
        }}
      >
      </style>
      {children}
    </div>
  );
}
