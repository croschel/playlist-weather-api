import request from 'supertest';
import app from '../../src/app';

describe('Weather and Spotify tests', () => {
  it('should be able to call weather api and Spotify and receive the tracks of playlist', async () => {
    const response = await request(app).get('/search/campinas');
    expect(response.body).toHaveProperty('Playlist');
  });
  it('should be able to call weather api and Spotify and receive an error if has something bad', async () => {
    const response = await request(app).get('/search/campinass');
    expect(response.body).toHaveProperty('error');
  });
});
