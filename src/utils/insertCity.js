import City from '../app/models/City';

export default async function insertCityValidate(city) {
  // insert City on DB
  let searchedCity = await City.findOne({
    where: {
      city: city.toLowerCase(),
    },
  });
  if (!searchedCity) {
    searchedCity = await City.create({ city: city.toLowerCase() });
    return searchedCity;
  }
  return searchedCity;
}
