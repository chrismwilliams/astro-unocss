import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  presetAttributify,
} from "unocss";

export default defineConfig({
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800" },
  ],
  transformers: [transformerDirectives()],
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography({
      cssExtend: {
        hr: {
          "border-top-width": "1px",
          "border-color": "var(--un-prose-hr)",
          border: "",
        },
      },
    }),
    presetIcons({
      prefix: "i-",
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
