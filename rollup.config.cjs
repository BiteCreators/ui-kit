import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: ["src/index.ts", "./src/assets/icons/components/index.ts"],
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss(),
    ],
    external: [
      "react",
      "react-dom",
      "react-hook-form",
      "react-day-picker",
      "@radix-ui/react-*",
      "clsx",
      "framer-motion",
      "tailwind-merge",
      "zod",
      "next",
      /^next\//,
    ],
  },
];
