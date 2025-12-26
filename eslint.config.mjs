import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js"],
//    ignores: ["node_modules"],
    languageOptions: { 
      sourceType: "module", 
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    ...jest.configs["flat/recommended"],
    plugins: { jest },
    rules: {
      "jest/prefer-expect-assertions": "off"
    },
  },
]);