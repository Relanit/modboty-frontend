module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    plugins: ["prettier"],
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-console": "warn",
        "no-debugger": "error",
        "prettier/prettier": "error",
        "vue/multi-word-component-names": "off",
        "vue/require-default-prop": "off",
        quotes: [1, "double"],
    },
    globals: {
        defineEmits: "readonly",
        defineProps: "readonly",
        NodeJS: "readonly",
    },
};
