import type { Config } from "tailwindcss";

//@ts-ignore
import { tailwind } from "@byte-creators/config";

const config: Config = {
  ...tailwind,
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,tsx}",
  ],
  plugins: [],
};

export default config