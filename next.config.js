/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "primary-color": "#d4380d",
      },
    },
  },
});
