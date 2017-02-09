var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
   new webpack.BannerPlugin('版权所有，违法必究')
 ],
 devServer:{
   port:8888
 }
}
