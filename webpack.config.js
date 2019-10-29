/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const exec = process.cwd()

module.exports = {
  devtool: 'source-map',
  mode: 'development',

  // entry: path.join(exec, 'src', 'index.tsx'),
  entry: {
    appBundle: path.join(exec, 'src', 'index.tsx'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          onlyCompileBundledFiles: true,
        },
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader?name=[path][name].[ext]?[hash]',
        include: [path.join(exec, 'static-assets')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [
          /* Add here paths to folder/modules with CSS to be parsed */
        ],
      },
    ],
  },

  output: {
    path: path.join(exec, './dist'),
    filename: `scripts/[name].js`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],

    alias: {
      '@atoms': path.join(exec, 'src', 'components', 'atoms'),
      '@theme': path.join(exec, 'src', 'theme'),
    },

    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: path.join(exec, 'tsconfig.json'),
      }),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      title: `WorkWave React starter`,
      filename: 'index.html',
      template: path.join(exec, 'src', 'index.tpl.html'),
      hash: true,
      cache: true,
      appMountId: 'root',
      alwaysWriteToDisk: true,
      chunksSortMode: 'auto',

      inject: true,
    }),

    new ForkTsCheckerWebpackPlugin({
      memoryLimit: 3072,
      useTypescriptIncrementalApi: true,
      measureCompilationTime: true,
    }),
  ],

  devServer: {
    publicPath: '/',

    compress: true,
    hot: false,
    host: '0.0.0.0',
    port: 3001,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    disableHostCheck: true,

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },

  optimization: {
    runtimeChunk: false,
  },

  performance: {
    hints: false,
  },
}
