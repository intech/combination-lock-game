module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-var": ["error"],
        "no-unused-vars": ["error"],
        "no-mixed-spaces-and-tabs": ["error"],
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-types": ["warn", { types: { "{}": false } }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/react-in-jsx-scope": 0,
        "no-console": ["warn", { allow: ["warn", "error", "time", "timeEnd", "info"] }],
        "object-curly-spacing": [1, "always"],
        "no-empty-pattern": 0,
        "react/prop-types": 0,
        "@typescript-eslint/no-inferrable-types": 0
    }
};
