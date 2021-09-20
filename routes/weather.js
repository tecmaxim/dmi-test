const { getWeatherCityUp15Schema } = require('../schemas/weather-schema');
const { getWeatherCityUp15Handler } = require('../handlers/weather-handler');

const basePath = '/weather';

const routes = async server => {
  server.get(
    `${basePath}/:city/more-than-15`,
    getWeatherCityUp15Schema,
    getWeatherCityUp15Handler
  );
};

module.exports = routes;
