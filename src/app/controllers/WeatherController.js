import weatherApiCity from '../../utils/weatherApi';
import { checkTemperature } from '../../utils/checkTemperature';
import insertCity from '../../utils/insertCity';
import spotifyApiPlaylist from '../../utils/spotifyApi';
import { getTracksFromRef } from '../../utils/spotifyRequests';
import insertRequest from '../../utils/insertRequest';

class WeatherController {
  async store(req, res) {
    // get Params from request
    const { city } = req.params;
    try {
      // call for Open Weather Api
      const temp = await weatherApiCity(city);

      // insert City on DB
      const searchedCity = await insertCity(city);

      // get music type according to temperature from city
      const musicType = checkTemperature(temp);

      // call the right playlist from spotify
      const playlistRef = await spotifyApiPlaylist(musicType);

      // get array items from previously call
      const tracks = await getTracksFromRef(playlistRef);

      // get tracklist from previously call
      const trackList = tracks.map(item => item.track.name);

      // Insert Request on DB
      await insertRequest(temp, musicType, searchedCity);

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
}

export default new WeatherController();
