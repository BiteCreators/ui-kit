const { execSync } = require("child_process");

function generateDeclarations() {
  execSync("npx tsc --emitDeclarationOnly", { stdio: "inherit" });
}

require("esbuild")
  .build({
    entryPoints: ["src/index.ts", "./src/assets/icons/components/index.ts"], // entry point of your code
    bundle: true, // bundle all dependencies
    platform: "browser", // specify platform (node for backend, browser for frontend)
    target: "es2015", // for modern JavaScript (can be adjusted if needed)
    outdir: "dist",
    jsx: "automatic",
    format: "esm",
    minify: true, // optional, you can set this to false if you don’t want minification
    sourcemap: false, // optional, to generate sourcemaps
    external: [
      "fs",
      "path",
      "react-swipeable",
      "@byte-creators/utils",
      "aria-hidden",
      "react-remove-scroll",
      "zlib",
      "stream",
      "react-google-recaptcha",
      "react",
      "react-dom",
      "next",
      "next/link",
      "react/jsx-runtime",
    ], // specify external dependencies if needed
    loader: {
      ".ts": "ts", // Load TypeScript files
      ".tsx": "tsx", // Load TSX files
    },
  })
  .catch(() => process.exit(1));

generateDeclarations();
