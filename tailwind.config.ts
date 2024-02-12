import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contenetContainer: "1280px",
    },
    extend: {
      backgroundImage: {
        
      },
      screens: {
        xs: "320px",
        sm : "375px",
        sml: "500px",
        md: "667px",
        mdl: "780px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      colors: {
        blue: "#0071dc",
        lighBlue: "#e6f1fc",
        yellow: "#ffc220",
        hoverBg: "#004f9a",
        lightText: "#46474a",
      },
      boxShadow: {
        bannerShadow: "0px 1px 2px 1px #00000026",
      },
    },
  },
  plugins: [],
};
export default config;
