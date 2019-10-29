/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./webpack.config.js')
const exec = process.cwd()

config.mode = 'production'
config.devtool = 'source-map'

const tsRule = config.module.rules.find(rule => rule.loader === 'ts-loader')
if (tsRule && tsRule.options) {
  tsRule.options.configFile = path.join(exec, 'tsconfig.build-umd.json')
}

config.module.rules.push({
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
  include: [
    /* Add here paths to folder/modules with CSS to be parsed */
  ],
})

config.output.filename = `scripts/[name].min.js`

config.optimization = Object.assign({}, config.optimization, {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      // exclude: /@uirouter.+/,
      sourceMap: true,
      parallel: true,
      cache: false,
      terserOptions: {
        mangle: false,
      },
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],

  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
})

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: `style/appBundle.min.css`,
  }),

  new CopyWebpackPlugin([
    {
      from: path.join(exec, 'static-assets', 'favicons/*'),
      toType: 'dir',
    },
  ]),
)

module.exports = config
