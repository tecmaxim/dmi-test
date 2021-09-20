const axios = require('axios');
const { externalApiError } = require('../errors/errors');
const { logger } = require('../logger');
const { cityNotFoundError } = require('../errors/errors');
const { weatherApi } = require('config');
const { NOT_FOUND } = require('../utils/constants');
const { DEGREES_15 } = require('../utils/constants');

// Literals
const LOCATION = '{LOCATION}';
const APPID = '{APPID}';

const apiCall = location => {
  const finalResource = weatherApi.resource
    .replace(LOCATION, location.replace(/-/g, ' ').replace(/_/g, ','))
    .replace(APPID, weatherApi.appId);
  logger.info(`${weatherApi.apiHost}${finalResource}`);

  return axios
    .get(`${weatherApi.apiHost}${finalResource}`)
    .then(({ data }) => data);
};

exports.checkIfTempIsUp15ByCity = location => {
  logger.info(`Getting weather by ${location}`);
  return apiCall(location)
    .then(({ main }) => main.temp > DEGREES_15)
    .catch(error => {
      if (error.response && error.response.status === NOT_FOUND) {
        throw cityNotFoundError(`Could not found the city: ${location}`);
      }
      throw externalApiError(`Could not get wather ${JSON.stringify(error)}`);
    });
};
