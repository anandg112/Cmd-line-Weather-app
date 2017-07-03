const request = require('request');

var getWeather = (lat, lng, callback) => {

request({
    url: `https://api.darksky.net/forecast/6a8bd411bc99e3e3b231279cf4597bd0/${lat},${lng}`,
    json: true,
  }, (err, resp, body) => {
      if(!err && resp.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback('Unable to fetch weather');
      }
    });
};

module.exports = {
  getWeather
}
