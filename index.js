var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
// cors takes care of this
// var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();


// MIDDLEWARE
app.use(cors()); // npm
app.use(session({ // this creates req.session
  secret: 'mIc7a3lL35k3s7r1n9', // make a random string
  resave: false,
  saveUninitialized: false // by default was true? in npmjs.org but deprecated
})); // npm
app.use(express.static('public')); // make a public folder for public assets
app.use(bodyParser.json()); // this must be invoked.
// cors will take care of this...
// app.use(middleware.addHeaders); // no need to invoke it. Hmm.

app.use(function(req, res, next){
  console.log(req.body + ' Body');
  console.log(req.params + ' URL Params');
  console.log(req.query + ' Query Params');
  console.log(req.session, ' Session');
  next();
})

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.put('/name/:id', mainCtrl.updateName);
app.put('/location/:id', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.setHobbies);
app.post('/occupations', mainCtrl.setOccupations);

var port = 3000
app.listen(port, function(){
  console.log('listening on Port: ', port);
})
