import City from '../models/City';
import Request from '../models/Request';

class RequestController {
  async index(req, res) {
    const requests = await Request.findAll({
      order: ['id'],
      include: [
        {
          model: City,
        },
      ],
    });

    return res.json(requests);
  }
}

export default new RequestController();
