import weather from '../../services/weather';
import { checkTemperature } from '../../utils/checkTemperature';
import spotify from '../../config/spotify';
import City from '../models/City';
import Request from '../models/Request';

class WeatherController {
  async store(req, res) {
    // get Params from request
    const { city } = req.params;
    console.log(city.toLowerCase());
    // insert City on DB
    let searchedCity = await City.findOne({
      where: {
        city: city.toLowerCase(),
      },
    });
    if (!searchedCity) {
      searchedCity = await City.create({ city: city.toLowerCase() });
    }
    try {
      // call for Open Weather Api
      const response = await weather.get(
        `?q=${city}&units=metric&APPID=${process.env.WEATHER_KEY}`
      );

      // get Temperature from previously call
      const { temp } = response.data.main;

      // get music type
      const musicType = checkTemperature(temp);

      // call the right playlist from spotify
      const responseSpot = await spotify.search({
        type: 'playlist',
        query: musicType,
      });

      // disrupt href from object
      const { href } = responseSpot.playlists.items[0].tracks;

      // get array items from previously call
      const { items } = await spotify.request(href);

      // get tracklist from previously call
      const trackList = items.map(item => item.track.name);

      // Insert Request on DB
      await Request.create({
        temperature: temp,
        song_type: musicType,
        city_id: searchedCity.id,
      });

      return res.json({
        City: city,
        Temperature: `${temp}ºC`,
        Suggestion: musicType,
        Playlist: trackList,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "We didn't find this city please try again" });
    }
  }

  async index(req, res) {
    const cities = await Request.findAll({
      include: [
        {
          model: City,
        },
      ],
    });

    return res.json(cities);
  }
}

export default new WeatherController();
