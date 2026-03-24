import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg:      "#05050f",
          card:    "#0a0a1e",
          panel:   "#0f0f2a",
          cyan:    "#00e5ff",
          magenta: "#ff0090",
          green:   "#39ff14",
          yellow:  "#ffe600",
          text:    "#c8d0f0",
          muted:   "#505878",
          border:  "#1a1d48",
        },
      },
      fontFamily: {
        cyber: ["'Orbitron'", "monospace"],
        mono:  ["'Share Tech Mono'", "monospace"],
      },
      boxShadow: {
        "neon-cyan":    "0 0 8px #00e5ff, 0 0 20px #00e5ff44",
        "neon-magenta": "0 0 8px #ff0090, 0 0 20px #ff009044",
        "neon-green":   "0 0 8px #39ff14, 0 0 20px #39ff1444",
        "neon-yellow":  "0 0 8px #ffe600, 0 0 20px #ffe60044",
        "neon-card":    "0 0 0 1px #00e5ff44, inset 0 0 30px #00e5ff08",
        "neon-card-hover": "0 0 0 1px #00e5ffaa, 0 0 40px #00e5ff18, inset 0 0 40px #00e5ff0a",
        "glass":        "inset 0 1px 0 rgba(255,255,255,.05), 0 8px 32px rgba(0,0,0,.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "spin-border":  "spin-border 6s linear infinite",
        "logo-glitch":  "logo-glitch 7s steps(1) infinite",
        "neon-flicker": "neon-flicker 9s ease-in-out infinite",
        "shimmer":      "shimmer-slide 3.5s ease-in-out infinite",
        "card-enter":   "card-enter .45s ease-out both",
        "scan-h":       "scan-h 1.5s linear infinite",
        "counter-in":   "counter-in .3s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
