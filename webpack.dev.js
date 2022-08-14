const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 因为后续要配sass和less也需要使用到这套规则，所以这里抽离出来
const getCssLoaders = (isModules) => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: isModules
        ? {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        : false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
              },
            },
          ],
        ],
      },
    },
  },
]

module.exports = {
  mode: 'development',
  target: 'web',
  entry: path.resolve(__dirname, './src/main.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash:8].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              ...getCssLoaders(true),
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            use: [
              ...getCssLoaders(false),
              {
                loader: 'sass-loader',
              },
            ],
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    port: '3000',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],
}
