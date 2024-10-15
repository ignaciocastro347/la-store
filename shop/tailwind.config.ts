import defaultTheme from "tailwindcss/defaultTheme";
import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }): string => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        xs: "490px",
        ...defaultTheme.screens,
        "3xl": "2100px",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        body: ["system-ui", "sans-serif"],
        heading: ["system-ui", "sans-serif"],
      },
      fontSize: {
        "10px": "0.625rem",
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
      },
      colors: {
        light: withOpacity("--color-light") as unknown as string,
        dark: withOpacity("--color-dark")  as unknown as string,
        accent: withOpacity("--color-accent")  as unknown as string,
        "muted-black": withOpacity("--color-muted-black")  as unknown as string,
        "base-dark": withOpacity("--text-base-dark")  as unknown as string,
        "accent-hover": withOpacity("--color-accent-hover")  as unknown as string,
        "accent-200": withOpacity("--color-accent-200")  as unknown as string,
        "accent-300": withOpacity("--color-accent-300")  as unknown as string,
        "accent-400": withOpacity("--color-accent-400")  as unknown as string,
        "accent-500": withOpacity("--color-accent-500")  as unknown as string,
        "accent-600": withOpacity("--color-accent-600")  as unknown as string,
        "accent-700": withOpacity("--color-accent-700")  as unknown as string,
        "border-50": withOpacity("--color-border-50")  as unknown as string,
        "border-100": withOpacity("--color-border-100")  as unknown as string,
        "border-200": withOpacity("--color-border-200")  as unknown as string,
        "border-base": withOpacity("--color-border-base")  as unknown as string,
        "border-400": withOpacity("--color-border-400")  as unknown as string,
        "gray-50": withOpacity("--color-gray-50")  as unknown as string,
        "gray-100": withOpacity("--color-gray-100")  as unknown as string,
        "gray-200": withOpacity("--color-gray-200")  as unknown as string,
        "gray-300": withOpacity("--color-gray-300")  as unknown as string,
        "gray-400": withOpacity("--color-gray-400")  as unknown as string,
        "gray-500": withOpacity("--color-gray-500")  as unknown as string,
        "gray-600": withOpacity("--color-gray-600")  as unknown as string,
        "gray-700": withOpacity("--color-gray-700")  as unknown as string,
        "gray-800": withOpacity("--color-gray-800")  as unknown as string,
        "gray-900": withOpacity("--color-gray-900")  as unknown as string,
        "orange-50": withOpacity("--color-orange-50")  as unknown as string,
        "orange-100": withOpacity("--color-orange-100")  as unknown as string,
        "orange-200": withOpacity("--color-orange-200")  as unknown as string,
        "orange-300": withOpacity("--color-orange-300")  as unknown as string,
        "orange-400": withOpacity("--color-orange-400")  as unknown as string,
        "orange-500": withOpacity("--color-orange-500")  as unknown as string,
        "orange-600": withOpacity("--color-orange-600")  as unknown as string,
        "orange-700": withOpacity("--color-orange-700")  as unknown as string,
        "orange-800": withOpacity("--color-orange-800")  as unknown as string,
        "orange-900": withOpacity("--color-orange-900")  as unknown as string,
        social: {
          facebook: "#3b5998",
          "facebook-hover": "#35508a",
          twitter: "#1da1f2",
          instagram: "#e1306c",
          youtube: "#ff0000",
          google: "#4285f4",
          "google-hover": "#3574de",
        },
        status: {
          pending: withOpacity("--color-pending")  as unknown as string,
          processing: withOpacity("--color-processing")  as unknown as string,
          complete: withOpacity("--color-complete")  as unknown as string,
          canceled: withOpacity("--color-canceled")  as unknown as string,
          failed: withOpacity("--color-failed")  as unknown as string,
          "out-for-delivery": withOpacity("--color-out-for-delivery")  as unknown as string,
        },
      },
      textColor: {
        body: withOpacity("--text-base")  as unknown as string,
        "body-dark": withOpacity("--text-base-dark")  as unknown as string,
        muted: withOpacity("--text-muted")  as unknown as string,
        "muted-light": withOpacity("--text-muted-light")  as unknown as string,
        heading: withOpacity("--text-heading")  as unknown as string,
        "sub-heading": withOpacity("--text-sub-heading")  as unknown as string,
        bolder: withOpacity("--text-text-bolder")  as unknown as string,
      },
      minHeight: {
        580: "580px",
        140: "35rem", // 560px
        40: "10rem", // 140px
        6: "2.5rem",
      },
      height: {
        4.5: "1.125rem",
        13: "3.125rem",
        22: "5.25rem",
        double: "200%",
      },
      maxHeight: {
        "70vh": "70vh",
        "85vh": "85vh",
        140: "35rem", // 560px
      },
      maxWidth: {
        1920: "1920px",
      },
      minWidth: {
        150: "150px",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      inset: {
        22: "5.25rem",
      },
      strokeWidth: {
        2.5: "2.5",
      },
      boxShadow: {
        200: "rgba(0, 0, 0, 0.16) 0px 3px 6px",
        300: "rgba(0, 0, 0, 0.16) 0px 0px 6px",
        350: "rgba(0, 0, 0, 0.16) 0px 3px 6px",
        400: "rgba(0, 0, 0, 0.1) 0px 0px 8px 0",
        500: "rgba(0, 0, 0, 0.17) 0px 0px 12px",
        600: "rgba(0, 0, 0, 0.1) 0px 3px 8px",
        700: "rgba(0, 0, 0, 0.08) 0px 2px 16px",
        900: "rgba(0, 0, 0, 0.05) 0px 21px 36px",
        downfall: "rgba(0, 0, 0, 0.14) 0px 6px 12px",
        paymentCard: "0px 2px 6px rgba(59, 74, 92, 0.1)",
        "downfall-xs": "rgba(0, 0, 0, 0.14) 0px 1px 2px",
        "downfall-sm": "rgba(0, 0, 0, 0.14) 0px 2px 4px",
        "downfall-lg": "rgba(0, 0, 0, 0.16) 0px 8px 16px",
        cardAction:
          "0 0 0 1px #8898aa1a, 0 15px 35px #31315d1a, 0 5px 15px #00000014",
      },
      transitionProperty: {
        height: "height",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.04, 0.62, 0.23, 0.98)",
      },
    },
  },
  plugins: [typography, forms],
};

export default config;
