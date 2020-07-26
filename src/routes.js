import { Router } from 'express';
import WeatherController from './app/controllers/WeatherController';

const routes = new Router();

routes.get('/:city', WeatherController.store);
routes.get('/consult/statistics', WeatherController.index);

export default routes;
