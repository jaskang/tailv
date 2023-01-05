/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["@jaskang/eslint-config/vue"],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
