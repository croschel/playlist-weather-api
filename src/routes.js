import { Router } from 'express';
import WeatherController from './app/controllers/WeatherController';
import RequestController from './app/controllers/RequestController';
import CityController from './app/controllers/CityController';

const routes = new Router();

// search city returning a playlist
routes.get('/search/:city', WeatherController.store);

// return all cities added on Db with more data
routes.get('/consult/city/:city', CityController.index);

// return all requests added on DB
routes.get('/consult/requests', RequestController.index);

export default routes;
