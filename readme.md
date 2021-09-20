# DMI Test Challenge

Usage: Check if the temperature of a city is up to 15º. If it is, the endpoint will return ```true```.
On the oposite way, will return ```false```

### Endpoints:
http://localhost:{PORT}/api/v1/weather/{CITY}/more-than-15
* CITY variable: put the city in format: ```city_province_country```
* Separating citiy name, ```province o state``` and ```country(ISO3166 alpha code)``` with underscore (_)
* If the city has blank spaces in the middle, you must replace it by dash (-). 
   + E.g: ```san-luis_san-luis_ar``` |  ```cabo-frio_rio-de-janeiro_br``` |
   + Use ISO 3166 to use country alpha code  https://en.wikipedia.org/wiki/ISO_3166-1

## Installing dependencies

```
npm install
```
## Setting env variables

Before you start, make sure you create a  `.env` file locally (there's an example in the repo `.env.example` that you can start from).
