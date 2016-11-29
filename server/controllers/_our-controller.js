//var searches = require('./config');
var rp = require('request-promise');

exports.fetchWeather = function(req, res, next) {
  //res.status(200).json({cities: "Hello world!"})
  console.log('request', req.query.city);
  //res.send('hello');
  const API_KEY = 'af4b2e08fb66b8900db4bbcf026f81b4';
  const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast/city?q=' + req.query.city + '&APPID=' + API_KEY;
  rp.get(ROOT_URL)
    .then(function(cityData){
      res.status(200).send(cityData);
      //console.log('server: ', cityData)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
}
