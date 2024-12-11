const { execSync } = require("child_process");

function generateDeclarations() {
  execSync("npx tsc --emitDeclarationOnly", { stdio: "inherit" });
}

require("esbuild")
  .build({
    entryPoints: ["src/index.ts", "./src/assets/icons/components/index.ts"], // entry point of your code
    bundle: true, // bundle all dependencies
    platform: "node", // specify platform (node for backend, browser for frontend)
    target: "esnext", // for modern JavaScript (can be adjusted if needed)
    outdir: "dist",
    minify: true, // optional, you can set this to false if you don’t want minification
    sourcemap: false, // optional, to generate sourcemaps
    external: [], // specify external dependencies if needed
    loader: {
      ".ts": "ts", // Load TypeScript files
      ".tsx": "tsx", // Load TSX files
    },
  })
  .catch(() => process.exit(1));

generateDeclarations();