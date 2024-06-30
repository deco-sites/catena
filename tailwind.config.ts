import daisyui from "daisyui";
import { transform } from "deco/deps.ts";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        "unicons": ["Unicons"],
        "thicccboi": ["THICCCBOI"],
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        slideDown: "slideDown, 3s ",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideDown: {
          "to": { opacity: "0", transform: "translateY(-30px)" },
          "from": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontSize: {
        "2.5xl": ["1.9rem", {
          lineHeight: "2rem",
        }],
      },
    },
  },
};
