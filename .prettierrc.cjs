const config = require("@jaskang/config");
module.exports = {
  ...config.prettier,
  plugins: [require("prettier-plugin-tailwindcss")],
};
