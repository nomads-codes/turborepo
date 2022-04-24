const sortImports = require("@trivago/prettier-plugin-sort-imports");
const tailwind = require("prettier-plugin-tailwindcss");

const combinedFormatter = {
  parsers: {
    typescript: {
      ...tailwind.parsers.typescript,
      preprocess: sortImports.parsers.typescript.preprocess,
    },
  },
};

module.exports = combinedFormatter;
