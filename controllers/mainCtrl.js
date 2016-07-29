var users = require('../models/users');

module.exports = {
  getName: function(req, res, next){
    for (var i = 0; i <users.length; i++) {
      res.json(users[i].name);
    }
  },
  getLocation: function(req, res, next) {
    for (var i = 0; i <users.length; i++) {
      res.json(users[i].location);
    }
  },
  getOccupations: function(req, res, next){
    for (var i = 0; i <users.length; i++) {
      if (req.query.sort === 'asc') {
        var response = users[i].occupations.sort();
        res.json(response);
      } else if (req.query.sort === 'desc') {
        var response = users[i].occupations.reverse()
        res.json(response);
      } else {
        res.json(users[i].occupations);
      }
    }
  },
  getOccupationsLatest: function(req, res, next){
    for (var i = 0; i <users.length; i++) {
      res.json(users[i].occupations[users[i].occupations.length-1]);
    }
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
  }
}
