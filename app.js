const fastify = require('fastify');
require('dotenv').config();
const {
  swagger: { exposeRoute, routePrefix }
} = require('config');
const { errorHandler } = require('./errors');

const build = async () => {
  const app = fastify({
    logger: {
      prettyPrint: true
    }
  });

  app.setErrorHandler(errorHandler);

  app.register(require('fastify-swagger'), {
    routePrefix,
    exposeRoute
  });

  app.register(require('./routes'), { prefix: '/api/v1' });

  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'GET'
  };

  await app.register(require('middie'));
  app.use(require('cors')(corsOptions));

  return app;
};

module.exports = build;
