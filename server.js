var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

var staticPath = path.resolve(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(port, function() {
  console.log('listening on port:', port);
});
