var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
})

app.use('/assets', express.static('assets'));

var server  = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
