const weatherRoutes = require('./weather');

const routes = async server => ({
  ...weatherRoutes(server)
});

module.exports = routes;
