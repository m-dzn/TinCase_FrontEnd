const { merge } = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common");
const cssnano = require("cssnano");

// import { merge } from "webpack-merge";
// import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
// import TerserWebpackPlugin from "terser-webpack-plugin";
// import common from "./webpack.common.js";
// import cssnano from "cssnano";

const config = {
  mode: "production",
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, // 최적화시킬 CSS 파일을 RegExp로 지정
      cssProcessor: cssnano, // 사용할 CSS 프로세서 지정
      cssProcessorPluginOptions: {
        // CSS 프로세서 옵션 설정
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },

  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "venders",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [new TerserWebpackPlugin()], // JS 압축 시 사용할 Compressor 설정
  },
};

// export default merge(common, config);
module.exports = merge(common, config);
