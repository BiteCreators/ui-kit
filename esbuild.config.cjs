const { execSync } = require("child_process");

function generateDeclarations() {
    execSync("npx tsc --emitDeclarationOnly", { stdio: "inherit" });
}

const esbuild = require("esbuild");

const sharedConfig = {
    entryPoints: ["src/index.ts", "./src/assets/icons/components/index.ts"],
    bundle: true,
    platform: "browser",
    target: "es2015",
    minify: true,
    sourcemap: false,
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
        "react/jsx-runtime",
    ],
    loader: {
        ".ts": "ts",
        ".tsx": "tsx",
    },
};

Promise.all([
    // Build for ESM
    esbuild.build({
        ...sharedConfig,
        outdir: "dist/esm",
        format: "esm",
    }),
    // Build for CJS
    esbuild.build({
        ...sharedConfig,
        outdir: "dist/cjs",
        format: "cjs",
    }),
])
    .then(() => {
        generateDeclarations();
        console.log("Build completed!");
    })
    .catch(() => process.exit(1));
