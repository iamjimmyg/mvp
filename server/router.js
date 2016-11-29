const express = require('express');
const _ourController = require('./controllers/_our-controller');


module.exports = function(app) {
  const apiRoutes = express.Router();
  //const ticketRoutes = express.Router();
  //app.use('/', express.static('client'));
  app.use('/', express.static('../client'));
  //apiRoutes.use('/tickets', ticketRoutes);
  app.use('/api', apiRoutes);


  apiRoutes.get('/fetchWeather/', _ourController.fetchWeather);

}
