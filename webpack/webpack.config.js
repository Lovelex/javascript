const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyjsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // mode: 'production', // production para setar modo de produção. development para modo desenvolvimento. por padrão é production
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js', // arquivo a ser interpretado
  output: {
    filename: 'principal.js', // Nome do arquivo gerado
    path: __dirname + '/public' // path é á pasta gerada, __dirname aponta para a pasta raiz. Por padrão é pasta dist
  },
  devServer: {
    contentBase: './public',
    port: 9000
  },
  optimization: {
    minimizer: [
      new uglifyjsPlugin({ // minifica o arquivo js
        cache: true,
        parallel: true // otimiza o processo de minificação 
      }),
      new OptimizeCSSAssetsPlugin({}) // minifica o arquivo css
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/, // expressão regular que detecta um arquivo que termina com .css
      use: [
        MiniCssExtractPlugin.loader, // extrai o arquivo css para uma pasta especifica. esse plugin conflita com 'style-loader'
        // 'style-loader', // Adiciona CSS na DOM com tag style
        'css-loader', // interpreta @import, url(), etc
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'] // carrega arquivos de imagem
    }]
  }
}
