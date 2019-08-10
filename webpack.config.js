const path = require('path');
const svelteLoaderOptions = require('./svelte.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extensions = ['.mjs', '.js', '.svelte', '.html'];
const mainFields = ['svelte', 'browser', 'module', 'main'];

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
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: svelteLoaderOptions,
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
          : 'dist/css/[name].min.css',
      }),
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: DEVELOPMENT
        ? 'dev/js/[name].js'
        : 'dist/js/[name].min.js',
      sourceMapFilename: DEVELOPMENT
        ? 'dev/js/[name].map'
        : '',
    },
    devServer: {
      historyApiFallback: {
        index: 'index.dev.html',
      },
    },
  };
};
