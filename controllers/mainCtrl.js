var users = require('../models/users');

module.exports = {
  getName: function(req, res, next){
    var response = [];
    for (var i = 0; i <users.length; i++) {
      response.push(users[i].name);
    }
    res.json(response);
  },
  getLocation: function(req, res, next) {
    var response = [];
    for (var i = 0; i <users.length; i++) {
      response.push(users[i].location);
    }
    res.json(response);
  },
  getOccupations: function(req, res, next){
    for (var i = 0; i <users.length; i++) {
      if (req.query.sort === 'asc') {
        var response = users[i].occupations.sort();
        console.log(response, "Sort");
        return res.json(response);
      } else if (req.query.sort === 'desc') {
        var response = users[i].occupations.sort().reverse();
        console.log(response, "Reverse");
        return res.json(response);
      } else {
        var response = users[i].occupations[0];
        console.log(response);
        res.json(users[i].occupations);
      }
    }
  },
  getOccupationsLatest: function(req, res, next){
    var response = [];
    for (var i = 0; i <users.length; i++) {
      response.push(users[i].occupations[users[i].occupations.length-1]);
    }
          res.json(response);
  },
  getHobbies: function(req, res, next) {
    for (var i = 0; i <users.length; i++) {
      res.json(users[i].hobbies);
    }
  },
  getHobbiesType: function(req, res, next){
    var type = req.params.type;
    console.log(type);
    response = [];
    for (var i = 0; i < users.length; i++) {
      for (var j = 0; j < users[i].hobbies.length; j++) {
        if (users[i].hobbies[j].type === type) {
          response.push(users[i].hobbies[j]);
        }
      }
    }
    if (response.length) {
      res.json(response);
    } else {
      res.json({'bad': 'param'}) // this stinks!
    }
  },
  updateName: function(req, res, next) {
    var index = parseInt(req.params.id);
    for (var i = 0; i<users.length; i++) {
      users[i]["name"] = req.body;
      console.log(users[i]["name"]);
    }
    res.json(req.body);
  },
  updateLocation: function(req, res, next) {
    var index = parseInt(req.params.id);
    location[index] = req.body;
    res.json(location[index]);
  },
  setHobbies: function(req, res, next) {
    var index = parseInt(req.params.id);
    for (var i = 0; i <users.length; i++) {
      users[i].hobbies.push(req.body);
    }
    res.json(users);
  },
  setOccupations: function(req, res, next) {
    var index = parseInt(req.params.id);
    for (var i = 0; i <users.length; i++) {
      users[i].occupations.push(req.body);
    }
    res.json(users);
  },
}
