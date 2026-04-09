/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#90e4be",
        "inverse-on-surface": "#f0f0f3",
        "inverse-primary": "#84d7b2",
        "tertiary-fixed-dim": "#ffb4ac",
        "surface-container-low": "#f3f3f6",
        "primary-container": "#00684a",
        "on-secondary-fixed": "#022015",
        "on-secondary-fixed-variant": "#2f4d3f",
        "on-secondary-container": "#4b695a",
        "surface-dim": "#dadadc",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "tertiary-container": "#8f443e",
        "secondary": "#476556",
        "surface-variant": "#e2e2e5",
        "on-tertiary": "#ffffff",
        "primary-fixed-dim": "#84d7b2",
        "primary-fixed": "#9ff4cd",
        "surface-container-high": "#e8e8ea",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#76312c",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#005139",
        "surface-container-highest": "#e2e2e5",
        "on-primary-fixed": "#002115",
        "outline": "#6f7a73",
        "on-background": "#1a1c1e",
        "background": "#f9f9fc",
        "surface-tint": "#096c4d",
        "outline-variant": "#bec9c1",
        "on-surface-variant": "#3f4943",
        "inverse-surface": "#2f3133",
        "surface-container": "#eeeef0",
        "tertiary": "#722d29",
        "surface-bright": "#f9f9fc",
        "primary": "#004e36",
        "surface": "#f9f9fc",
        "secondary-fixed": "#c9ead8",
        "tertiary-fixed": "#ffdad6",
        "secondary-fixed-dim": "#adcebc",
        "on-surface": "#1a1c1e",
        "secondary-container": "#c6e7d5",
        "on-tertiary-container": "#ffc5be",
        "on-tertiary-fixed": "#3d0606",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        "tonal-shift-bottom": "0 4px 20px -10px rgba(0, 78, 54, 0.05)"
      }
    },
  },
  plugins: [],
}
