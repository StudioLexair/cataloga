import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1410",
          soft: "#4A4038",
          mute: "#6B5F54",
        },
        paper: "#FBF7F1",
        cream: "#F4EDE4",
        sand: "#E8DCCB",
        line: "#E7DCCA",
        terra: {
          DEFAULT: "#C75D3B",
          dark: "#A8482B",
          light: "#E9B7A4",
          wash: "#F6E7DE",
        },
        olive: {
          DEFAULT: "#4F5D46",
          light: "#7C8B6F",
        },
        brass: {
          DEFAULT: "#B08D55",
          light: "#D4B583",
        },
        forest: {
          DEFAULT: "#1F3A2E",
          light: "#2E5241",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        displayItal: [
          "var(--font-display-ital)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,20,16,0.04), 0 10px 28px -10px rgba(26,20,16,0.10)",
        lift: "0 2px 6px rgba(26,20,16,0.06), 0 28px 56px -16px rgba(26,20,16,0.18)",
        btn: "0 1px 0 rgba(255,255,255,0.22) inset, 0 10px 24px -10px rgba(167,72,43,0.55)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 8s ease-in-out infinite",
        floatSlow: "float 11s ease-in-out infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
