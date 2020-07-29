import City from '../models/City';
import Request from '../models/Request';

class CityController {
  async index(req, res) {
    const { city } = req.params;
    const cityFound = await City.findOne({
      where: {
        city,
      },
    });
    const requests = await Request.findAll({
      where: {
        city_id: cityFound.id,
      },
      attributes: ['id', 'temperature', 'song_type', 'created_at'],
    });

    return res.json({
      City: city,
      RequestCounter: requests.length,
      requests,
    });
  }
}

export default new CityController();
