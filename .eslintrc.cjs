module.exports = {
    extends: [require("@byte-creators/config").eslint],
    settings: {
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json"
            },
            node: {
                paths: ["../ui-kit/dist"],
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
