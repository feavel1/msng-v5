import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";

export default defineConfig({
  plugins: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    sveltekit(),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
