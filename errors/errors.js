const { generalError } = require('.');
const { STATUS_CODES, INTERNAL_CODES } = require('./constants');

exports.externalApiError = message =>
  generalError({
    internalCode: INTERNAL_CODES.EXTERNAL_API_ERROR,
    statusCode: STATUS_CODES.EXTERNAL_API_ERROR,
    message
  });

exports.cityNotFoundError = message =>
  generalError({
    internalCode: INTERNAL_CODES.CITY_NOT_FOUND_ERROR,
    statusCode: STATUS_CODES.NOT_FOUND_ERROR,
    message
  });
