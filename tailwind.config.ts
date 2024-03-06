import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bg: "#313339",
        "bg-secondary": "#2B2D31",
        primary: "#248046",
        "primary-focus": "#1A6334",
        secondary: "#5765F2",
        "secondary-focus": "#4752C4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
