/* eslint-disable camelcase */
jest.mock('axios');
// jest.mock('../../services/weather-service');
const {
  checkTemperatureUp15ByCity
} = require('../../controllers/weather-controller');
// const {  }
const { default: axios } = require('axios');

describe('Check if temperature of cityt is more than 15', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.autoMockOff();
  });

  const request = { params: { city: 'rio-cuarto_cordoba_ar' } };

  test('should return true', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        coord: { lon: -66.3356, lat: -33.295 },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
          }
        ],
        base: 'stations',
        main: {
          temp: 16.14,
          feels_like: 9.27,
          temp_min: 10.14,
          temp_max: 10.14,
          pressure: 1026,
          humidity: 79,
          sea_level: 1026,
          grnd_level: 940
        },
        visibility: 10000,
        wind: { speed: 6.08, deg: 147, gust: 10.97 }
      }
    });

    const result = await checkTemperatureUp15ByCity(request);

    expect(result).toBe(true);
  });

  test('should fail', async () => {
    axios.get = jest.fn().mockRejectedValue({
      response: { status: 500, data: { code: 'externalApiError' } }
    });

    try {
      await checkTemperatureUp15ByCity(request);
    } catch (error) {
      expect(error.internalCode).toBe('externalApiError');
    }
  });
});
