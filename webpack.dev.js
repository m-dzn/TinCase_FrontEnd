const common = require("./webpack.common");
const { merge } = require("webpack-merge");
// import common from "./webpack.common.js";
// import { merge } from "webpack-merge";

const config = {
  mode: "development",
  output: {
    ...common.output,
    chunkFilename: "dist/[name].chunk.js",
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    host: "localhost",
    port: 3000,
    compress: true,
    open: true,
    hot: true, // 앱 실행 중 변경된 부분만 reload해주는 Hot Replacement를 활성화시킵니다
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
};

// export default merge(common, config);
module.exports = merge(common, config);
