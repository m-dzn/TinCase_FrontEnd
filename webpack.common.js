const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

// import webpack from "webpack";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import path from "path";
// const __dirname = path.resolve();

const src = path.resolve(__dirname, "src");

const isProduction = process.env.NODE_ENV === "PRODUCTION";
const common = {
  entry: "./src/index",

  target: "web",

  resolve: {
    modules: [src, "node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      lib: path.resolve(__dirname, "./src/lib"),
      modules: path.resolve(__dirname, "./src/modules"),
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
      styles: path.resolve(__dirname, "./src/styles"),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                // 불러올 파일명 (문자열('[contenthash].[ext]') 또는 함수)
                if (isProduction) {
                  return "[contenthash].[ext]";
                }

                return "[path][name].[ext]";
              },
              publicPath: "assets/", // 파일을 불러오는 기본 경로
              outputPath: "assets/", // 번들링한 파일의 저장 경로
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // 템플릿이 될 html 파일의 경로 지정
      template: "./src/index.html",
      minify: isProduction
        ? {
            collapseWhitespcae: true,
            useShortDoctype: true,
            removeScriptTypeAttributes: true,
          }
        : false,
    }),
    new CleanWebpackPlugin(), // build될 때마다 쌓이는 bundle.[hash].js 파일을 정리해주는 플러그인
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction, // 모듈 전역으로 제공되는 상수 값에 접근하기 위한 이름
    }),
  ],
};

// export default common;
module.exports = common;
