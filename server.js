var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

var adminRouter = express.Router();

adminRouter.get('/', function(req, res){
  res.send('admin dashboard');
});

adminRouter.get('/users', function(req, res){
  res.send('all users');
});

adminRouter.get('/posts', function(req, res){
  res.send('all posts');
});

app.use('/admin', adminRouter);

app.listen(port, function() {
  console.log('listening on port:', port);
});
