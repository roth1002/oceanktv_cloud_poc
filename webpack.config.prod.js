var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './demo/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'demo')
      }, {
        test: /\.sass$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|svg|gif|otf|ttf|woff|eot)$/,
        loaders: ['file'],
        exclude: /node_modules/
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }
};

