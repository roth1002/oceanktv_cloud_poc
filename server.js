var koa = require('koa');
var serve = require('koa-static');
var app = koa();
var port = process.env.PORT || 3000;

app.use(serve('demo'));

app.listen(port);