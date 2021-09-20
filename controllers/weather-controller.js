const { checkIfTempIsUp15ByCity } = require('../services/weather-service');
const { cityNotFoundError, externalApiError } = require('../errors/errors');

exports.checkTemperatureUp15ByCity = request =>
  checkIfTempIsUp15ByCity(request.params.city)
    .then(weatherResponse => {
      if (weatherResponse === null) {
        throw cityNotFoundError('Could not found city weather');
      }
      return weatherResponse;
    })
    .catch(error => {
      throw externalApiError(`Failed ${JSON.stringify(error)}`);
    });
