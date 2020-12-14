/*
 * @Author: 王磊
 * @Date: 2020-11-23 09:35:27
 * @LastEditTime: 2020-12-14 10:47:23
 * @LastEditors: 王磊
 * @Description: webpack配置，覆盖vue脚手架内置webpack配置
 * @FilePath: \vue.config.js
 */
/* eslint-disable */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 热更新
  devServer: {
    open: true,
    hot: true,
    compress: true,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1559be',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  // outputDir: 'build',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'xxx项目';
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Workers',
          to: 'cesium/Workers',
        },
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/ThirdParty',
          to: 'cesium/ThirdParty',
        },
      ]),
      new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Assets', to: 'cesium/Assets' }]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Widgets',
          to: 'cesium/Widgets',
        },
      ]),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('./cesium'),
      }),
    ],
  },
};
