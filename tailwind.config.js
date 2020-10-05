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
 theme: {},
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
