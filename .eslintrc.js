module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"],
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "import",
        "i18next"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "warn",
        "prefer-const": "error",
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "comma-dangle": ["error", "always-multiline"],
        "semi": ["warn", "always"],
        // "import/order": ["error", {
        //     "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        //     "newlines-between": "always-and-inside-groups"
        // }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        "@typescript-eslint/no-namespace": "off",
        "i18next/no-literal-string": 2
    }
};
