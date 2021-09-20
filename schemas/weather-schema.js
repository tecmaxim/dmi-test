const successResponseSchema = properties => ({
  200: {
    type: 'object',
    properties
  }
});

exports.getWeatherCityUp15Schema = {
  schema: {
    params: { city: { type: 'string' } },
    weather: {
      ...successResponseSchema({
        temperature: { type: 'boolean' }
      })
    }
  }
};
