var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

var adminRouter = express.Router();

//admin route middleware
adminRouter.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

//admin route parameters
adminRouter.param('name', function(req, res, next, name){
  console.log('doing some validation on this name: ' + name);
  req.name = name;
  next();
});

//admin routes
adminRouter.get('/', function(req, res){
  res.send('admin dashboard');
});

adminRouter.get('/users', function(req, res){
  res.send('all users');
});

adminRouter.get('/users/:name', function(req, res){
  res.send('this routes to the specific user: ' + req.name);
});

adminRouter.get('/posts', function(req, res){
  res.send('all posts');
});

app.use('/admin', adminRouter);

app.listen(port, function() {
  console.log('listening on port:', port);
});
