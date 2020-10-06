module.exports = {
 purge: {
  content: [
   "./src/**/*.html",
   "./src/**/*.js",
   "./src/**/*.jsx",
   "./src/**/*.ts",
   "./src/**/*.tsx",
   "./public/**/*.html",
  ],
 },
 theme: {
  extend: {
   colors: {
    "1-l": "#f9cb15",
    "1-r": "#f97418",
    "2-l": "#fa923b",
    "2-r": "#dc2b79",
    "3-l": "#e94a9c",
    "3-r": "#f5405d",
    "4-l": "#dc3ff3",
    "4-r": "#9533eb",
    "5-l": "#a755f8",
    "5-r": "#6465f6",
    "6-l": "#3abcf9",
    "6-r": "#6168ec",
    "7-l": "#3bcfdd",
    "7-r": "#0cafee",
    "8-l": "#4adf81",
    "8-r": "#15b1cb",
    "9-l": "#bbef67",
    "9-r": "#11b780",
   },
  },
 },
 variants: {
  backgroundColor: ["responsive", "hover", "focus"],
 },
 future: {
  removeDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,
 },
 // experimental: {
 //  uniformColorPalette: true,
 // },
 plugins: [require("@tailwindcss/ui")],
};
