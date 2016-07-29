var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

// MIDDLEWARE
app.use(bodyParser.json()); // this must be invoked.
app.use(middleware.addHeaders); // no need to invoke it. Hmm.

app.use(function(req, res, next){
  console.log(req.body + ' Body');
  console.log(req.params + ' URL Params');
  console.log(req.query + ' Query Params');
  next();
})

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);


var port = 3000
app.listen(port, function(){
  console.log('listening on Port: ', port);
})
