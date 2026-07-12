import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: "#FF5A2E",
          50: "#FFF1EC",
          100: "#FFE0D4",
          200: "#FFC1A9",
          300: "#FF9C77",
          400: "#FF7A4E",
          500: "#FF5A2E",
          600: "#ED3F0F",
          700: "#C42F09",
          800: "#8F2409",
          900: "#5C1806",
        },
        ink: {
          DEFAULT: "#434A5C",
          50: "#F4F5F7",
          100: "#E5E7EB",
          400: "#8A90A0",
          600: "#565D70",
          700: "#434A5C",
          800: "#2E3340",
          900: "#1B1E27",
          950: "#0E0F14",
        },
        // Semantic tokens driven by CSS variables (theme aware)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        subtle: "hsl(var(--subtle))",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "11xl": ["13rem", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF7A4E 0%, #FF5A2E 45%, #ED3F0F 100%)",
        "brand-radial": "radial-gradient(circle at 50% 0%, rgba(255,90,46,0.22), transparent 60%)",
        "mesh": "radial-gradient(at 20% 20%, rgba(255,90,46,0.14) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,122,78,0.10) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(67,74,92,0.08) 0px, transparent 50%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(6deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        shimmer: "shimmer 2.2s infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
