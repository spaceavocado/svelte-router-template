const path = require('path');
const webpack = require('webpack');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Project setup
const svelteOptions = require('./svelte.config.js');
const extensions = ['.mjs', '.js', '.svelte', '.html'];
const mainFields = ['svelte', 'browser', 'module', 'main'];
// Base URL is passed to JS and SCSS
// update as needed for production.
// IMPORTANT: It must be also updated in package.json
// in the script "build:html:prod" -> baseurl.
const baseURL = '';

module.exports = (env, options) => {
  const DEVELOPMENT = options.mode === 'development';
  return {
    entry: {
      app: './src/js/index.js',
      base: './src/scss/base.scss',
    },
    resolve: {
      mainFields,
      extensions,
      alias: {
        'svelte': path.resolve('node_modules', 'svelte'),
      },
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: svelteOptions(DEVELOPMENT),
          },
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader', options: {
              presets: [
                ['@babel/preset-env'],
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, options: {
                hmr: DEVELOPMENT,
              },
            },
            {
              loader: 'css-loader', options: {
                sourceMap: DEVELOPMENT,
                url: false,
              },
            },
          ],
        },
        {
          test: /base\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, options: {
                hmr: DEVELOPMENT,
              },
            },
            {
              loader: 'css-loader', options: {
                sourceMap: DEVELOPMENT,
                url: false,
              },
            },
            {
              loader: 'sass-loader', options: {
                sourceMap: DEVELOPMENT,
                data: '$__BASEURL__: "' + baseURL + '";',
              },
            },
          ],
        },
      ],
    },
    devtool: DEVELOPMENT ? 'source-map' : '',
    plugins: [
      new MiniCssExtractPlugin({
        filename: DEVELOPMENT
          ? 'dev/css/[name].css'
          : 'publish/dist/css/[name].min.css',
      }),
      new webpack.DefinePlugin({
        __BASEURL__: JSON.stringify(baseURL),
      }),
      new CopyPlugin(DEVELOPMENT ? [] : [
        {from: 'assets', to: 'publish/assets'},
      ]),
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: DEVELOPMENT
        ? 'dev/js/[name].js'
        : 'publish/dist/js/[name].min.js',
      sourceMapFilename: DEVELOPMENT
        ? 'dev/js/[name].map'
        : '',
    },
    devServer: {
      historyApiFallback: {
        index: 'index.html'
      }
    },
  };
};
