const {
  checkTemperatureUp15ByCity
} = require('../controllers/weather-controller');

exports.getWeatherCityUp15Handler = (request, reply) =>
  checkTemperatureUp15ByCity(request).then(response => reply.send(response));
