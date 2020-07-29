import weather from '../services/weather';

export default async function weatherApiCity(city) {
  // call for Open Weather Api
  const response = await weather.get(
    `?q=${city}&units=metric&APPID=${process.env.WEATHER_KEY}`
  );
  // just getting the temp
  return response.data.main.temp;
}
