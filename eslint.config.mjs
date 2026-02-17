import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

let ignoreOldElements = ["**/_old-content-elements/**", "**/styles/**"];

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ignoreOldElements,
    plugins: { js, jsdoc },
    extends: [
      "js/recommended",
      jsdoc.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.js"],
    ignores: ignoreOldElements,
    languageOptions: { sourceType: "module" },
  },
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
]);
