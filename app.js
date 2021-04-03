var express = require('express');
//var i18n = require("i18n");
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var ejs = require('ejs');
var app = express();

var routes = require('./router');

//app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(i18n.init);
app.use('/', routes);

app.set('port', 3000);
var server = app.listen(app.get('port'), function() {
  /* console.log('Database name:'+ process.env.BD_BSWEB);
  console.log('Envirement name:'+ app.get('env')); */
  console.log('Express server listening on port ' + server.address().port);
  //debug('Express server listening on port ' + server.address().port);
});