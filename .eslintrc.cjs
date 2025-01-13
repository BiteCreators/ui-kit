module.exports = {
  extends: [require("@byte-creators/config").eslint],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["../ui-kit/dist"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
