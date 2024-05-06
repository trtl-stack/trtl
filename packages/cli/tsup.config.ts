import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts", "src/commands/**/*.tsx"],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: "esm",
});
