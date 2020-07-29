import Request from '../app/models/Request';

export default async function insertRequest(temp, musicType, searchedCity) {
  await Request.create({
    temperature: temp,
    song_type: musicType,
    city_id: searchedCity.id,
  });
}
