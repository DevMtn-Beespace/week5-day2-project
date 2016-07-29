module.exports = { // similar to dependency injection in Angular

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'applciation/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmtn-beespace.github.io"
    });
    next(); //Without next() or a res.send() our request will simply sit on our server and eventually time out.
  }
}
