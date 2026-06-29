/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#131315",
        "tertiary-fixed": "#e3e1ec",
        "tertiary-container": "#dcdbe5",
        "on-primary-container": "#027100",
        "on-secondary": "#2f3131",
        "secondary-fixed": "#e2e2e2",
        "error-container": "#93000a",
        "on-tertiary-container": "#5f6068",
        "surface": "#131315",
        "surface-container-low": "#1c1b1d",
        "inverse-primary": "#026e00",
        "inverse-surface": "#e5e1e4",
        "on-secondary-fixed-variant": "#454747",
        "secondary": "#c6c6c7",
        "surface-variant": "#353437",
        "on-surface-variant": "#b9ccaf",
        "on-error": "#690005",
        "surface-tint": "#02e600",
        "error": "#ffb4ab",
        "tertiary": "#faf7ff",
        "surface-container-lowest": "#0e0e10",
        "primary-fixed-dim": "#02e600",
        "secondary-container": "#454747",
        "primary": "#eaffde",
        "inverse-on-surface": "#313032",
        "primary-container": "#00ff00",
        "on-tertiary-fixed": "#1a1b22",
        "background": "#131315",
        "surface-container-high": "#2a2a2c",
        "tertiary-fixed-dim": "#c6c5cf",
        "on-surface": "#e5e1e4",
        "outline": "#84967c",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#77ff61",
        "outline-variant": "#3b4b35",
        "on-secondary-fixed": "#1a1c1c",
        "surface-container": "#201f22",
        "on-secondary-container": "#b4b5b5",
        "surface-container-highest": "#353437",
        "secondary-fixed-dim": "#c6c6c7",
        "on-tertiary": "#2f3038",
        "on-tertiary-fixed-variant": "#46464e",
        "surface-bright": "#39393b",
        "on-primary-fixed-variant": "#015300",
        "on-primary-fixed": "#002200",
        "on-primary": "#013a00",
        "on-background": "#e5e1e4"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "section-gap": "120px",
        "margin-mobile": "20px",
        "gutter": "32px",
        "stack-gap": "24px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Geist"],
        "label-caps": ["Geist"],
        "body-lg": ["Inter"],
        "mono-spec": ["Geist"],
        "headline-md": ["Geist"],
        "display-xl": ["Geist"],
        "headline-lg": ["Geist"],
        "body-md": ["Inter"]
      },
      fontSize: {
        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-caps": ["14px", { lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "mono-spec": ["13px", { lineHeight: "18px", fontWeight: "500" }],
        "headline-md": ["30px", { lineHeight: "36px", fontWeight: "600" }],
        "display-xl": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
