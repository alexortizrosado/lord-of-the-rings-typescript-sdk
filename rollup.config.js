// rollup.config.js
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "build/compiled/index.js",
    output: {
      file: "lotr-api.js",
      format: "cjs",
      sourcemap: true,
    },
    external: ["axios", "os", "url"],
    plugins: [resolve(), typescript()],
  },
  {
    input: "build/compiled/index.d.ts",
    output: {
      file: "lotr-api.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

export default config;
