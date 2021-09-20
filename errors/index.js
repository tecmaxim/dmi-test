const { logger } = require('../logger');
const { DEFAULT_STATUS_CODE } = require('../utils/constants');
const {
  STATUS_CODES: { REQUEST_VALIDATION_ERROR },
  INTERNAL_CODES: {
    REQUEST_VALIDATION_ERROR: REQUEST_VALIDATION_ERROR_INTERNAL
  }
} = require('./constants');

exports.errorHandler = (error, request, reply) => {
  logger.error(error.validation);
  if (error.internalCode) {
    return reply.status(error.statusCode).send({
      error: { internalCode: error.internalCode, message: error.message }
    });
  } else if (error.validation) {
    return reply.status(REQUEST_VALIDATION_ERROR).send({
      error: {
        internalCode: REQUEST_VALIDATION_ERROR_INTERNAL,
        message: error.message
      }
    });
  }
  return reply.status(DEFAULT_STATUS_CODE).send('Internal Server Error');
};

exports.generalError = ({ internalCode, statusCode, message }) => ({
  internalCode,
  statusCode,
  message
});
