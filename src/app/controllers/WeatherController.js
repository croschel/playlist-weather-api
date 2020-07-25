import weather from '../../services/weather';
import { checkTemperature } from '../../utils/checkTemperature';
import spotify from '../../config/spotify';

class WeatherController {
  async store(req, res) {
    const { city } = req.params;
    const response = await weather.get(
      `?q=${city}&units=metric&APPID=${process.env.WEATHER_KEY}`
    );
    const { temp } = response.data.main;

    // get music type
    const musicType = checkTemperature(temp);

    // call spotify
    const responseSpot = spotify.search(
      { type: 'playlist', query: 'pop' },
      function (err, data) {
        if (err) {
          return console.log(`Error occurred: ${err}`);
        }

        console.log(data);
      }
    );

    return res.json({ resp: responseSpot });
  }
}

export default new WeatherController();
