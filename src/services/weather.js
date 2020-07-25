import axios from 'axios';

const weather = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather',
});

export default weather;
