import { Router } from 'express';
import WeatherController from './app/controllers/WeatherController';

const routes = new Router();

routes.get('/:city', WeatherController.store);

export default routes;
