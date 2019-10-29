/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

const exec = process.cwd()

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'

  config.devtool = 'source-maps'
  config.mode = mode.toLowerCase()

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [
        path.join(exec, 'src'),
        path.join(exec, 'stories'),
        path.join(exec, '.storybook'),
      ],

      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            // transpileOnly: true,
            configFile: path.join(exec, '.storybook', 'tsconfig.json'),
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },

    {
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    },

    {
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: { cacheDirectory: `.cache/storybook` },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    },
  )

  if (mode === 'PRODUCTION') {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            printWidth: 120,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: 'all',
            singleQuote: true,
          },
        },
      },
      enforce: 'pre',
    })
  }

  config.resolve.extensions.push('.tsx', '.ts', '.js')

  config.resolve.alias = {
    '@atoms': path.join(exec, 'src', 'components', 'atoms'),
    '@theme': path.join(exec, 'src', 'theme'),
  }

  // config.plugins.push(
  //   new webpack.DefinePlugin({
  //     'process.env.KEYNAME': JSON.stringify('VALUE'),
  //   }),
  // )

  return config
}
