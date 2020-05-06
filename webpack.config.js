const nodeSassMagicImporter = require(`node-sass-magic-importer`)
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
const { join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { HotModuleReplacementPlugin } = require('webpack')

const env = process.env.NODE_ENV
const minify = env === 'production'
const sourceMap = env === 'development'

const config = {
  mode: env,
  entry: join(__dirname, 'src', 'main.js'),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
  output: {
    path: join(__dirname, 'build'),
    filename: 'main.bundled.js'
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [join(__dirname, 'src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: nodeSassMagicImporter(),
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
              sourceMap
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      inject: true,
      favicon: join(__dirname, 'public', 'favicon.ico'),
      template: join(__dirname, 'public', 'index.html'),
      minify: minify ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      } : false,
    })
  ]
}

if (minify) {
  config.optimization.minimizer = [
    new OptimizeCSSAssetsPlugin(),
    // Enabled by default in production mode if
    // the `minimizer` option isn't overridden.
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ];
}

if (env !== `development`) {
  config.plugins.push(new MiniCssExtractPlugin())

  const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`))
  // Replace the `vue-style-loader` with
  // the MiniCssExtractPlugin loader.
  sassLoader.use[0] = MiniCssExtractPlugin.loader
}

module.exports = config