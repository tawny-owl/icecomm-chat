var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('listening on port:', port);
});
