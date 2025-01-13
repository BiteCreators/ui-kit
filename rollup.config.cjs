import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from '@rollup/plugin-replace';
import image from "@rollup/plugin-image";
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
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      typescript({ tsconfig: "./tsconfig.json" }),
      replace({
        preventAssignment: true,
        "use client": "",
      }),
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
