var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use('/static', express.static(__dirname + '/demo'));

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'demo/landing.html'));
});

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'demo/landing.html'));
});

app.get('/songlist.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'demo/songlist.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});