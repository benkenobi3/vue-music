var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');

app = express();

app.use(history())
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 8080;

app.listen(port);
console.log('server started '+ port);
