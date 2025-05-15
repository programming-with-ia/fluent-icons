import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./.dot-tsx/index.tsx", "./.dot-tsx/icons/*"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: true,
  skipNodeModulesBundle: true,
  target: "esnext",
  treeshake: true,
  bundle: false,
});
