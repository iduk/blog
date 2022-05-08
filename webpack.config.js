const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

const ASSET_PATH = process.env.ASSET_PATH || '/'

// Basic Path
const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'static/[name][ext]', // 리소스 경로 구성
    publicPath: ASSET_PATH,
    asyncChunks: true,
    clean: true, // 생성된 파일만 보임
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  // 최적화 설정
  optimization: {
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
  },

  devtool: isDev ? 'cheap-source-map' : false,

  devServer: {
    static: './dist',
    port: 3333,
    historyApiFallback: true,

    client: {
      progress: true,
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },

      // css & scss
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              esModule: true,
              // modules: true, // 전역
              modules: {
                auto: true,
                exportGlobals: true,
                localIdentName: '[local]_[hash:base64:5]',
                // localIdentName: '[sha1:hash:hex:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  [
                    // 사용안한스타일제거
                    '@fullhuman/postcss-purgecss',
                    {
                      content: [
                        path.join(__dirname, './public/index.html'),
                        ...glob.sync(`${path.join(__dirname, 'src')}/**/*.js`, {
                          nodir: true,
                          nocomment: true,
                        }),
                      ],
                    },
                  ],
                ],
              },
            },
          },
          // scss
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sassOptions: {
                fiber: require('fibers'), // 속도향상
              },
              additionalData: `
              @import "${PATHS.src}/assets/scss/variables";
              `,
            },
          },
        ],
      },

      // assets

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/images/[name].[ext]',
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: './public/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        ASSET_PATH: JSON.stringify(ASSET_PATH),
      },
    }),

    new CleanWebpackPlugin(),
  ],
}
