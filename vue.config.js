var path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  },
};
