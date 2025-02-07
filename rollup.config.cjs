import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { preserveDirectives } from "rollup-plugin-preserve-directives";

const packageJson = require("./package.json");

export default [
  {
    external: [
      "react",
      "react-dom",
      "react-hook-form",
      "react-day-picker",
      "clsx",
      "framer-motion",
      "tailwind-merge",
      "zod",
      "next",
      /^next\//,
    ],
    input: ["src/index.ts", "./src/assets/icons/components/index.ts", "./src/components/index.ts"],
    onwarn(warning, warn) {
      if (
        (warning.message && warning.message.includes("use client")) ||
        warning.code === "MIXED_EXPORTS"
      ) {
        return;
      }
      warn(warning);
    },
    output: [
      {
        dir: "dist",
        exports: "named",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss(),
      preserveDirectives(),
    ],
    preserveEntrySignatures: "strict",
  },
];
