const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    home: './src/js/home.js',
    auth: './src/js/auth.js',
    404: './src/js/404.js',
    channel: './src/js/channel.js',

  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: path.join('images', '[name][ext]'),
  },
  devtool: 'source-map',
  devServer: {
    headers: {
      'X-Content-Type-Options': 'nosniff'
    }
  },
  module: {
    rules: [
      {
        // test: /\.s[ac]ss$/i,
        test: /\.(scss|sass)$/,
        use: [
          // Creates `style` nodes from JS strings // для продакшена - отдельные CSS‑файлы
          MiniCssExtractPlugin.loader,
          // 'style-loader', // для разработки - стили в <style>
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          // { 
          //   loader: "sass-loader",
          //   options: {
          //     sassOptions: {
          //       includePaths: ['./node_modules/bootstrap'] // путь к Bootstrap
          //     }
          //   }
          // }
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      linkType: 'text/css',
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'] // подключает только index.js
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/home.html'),
      filename: 'home.html',
      chunks: ['home'] // подключает только home.js
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/auth.html'),
      filename: 'auth.html',
      chunks: ['auth'] // подключает только auth.js
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/404.html'),
      filename: '404.html',
      chunks: ['404'] // подключает только 404.js
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src/channel.html'),
      filename: 'channel.html',
      chunks: ['channel'] // подключает только channel.js
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/maps'), // папка с .map-файлами (если есть)
          to: path.resolve(__dirname, 'dist/maps')
        },
        {
          from: '**/*.map', // копируем все .map-файлы из проекта
          context: 'src'
        }
      ]
    })
  ],
};