const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production', // production para setar modo de produção. development para modo desenvolvimento. por padrão é production
  entry: './src/principal.js', // arquivo a ser interpretado
  output: {
    filename: 'principal.js', // Nome do arquivo gerado
    path: __dirname + '/public' // path é á pasta gerada, __dirname aponta para a pasta raiz. Por padrão é pasta dist
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
    }]
  }
}
