import request from 'supertest';
import app from '../../src/app';

describe('City Controller', () => {
  it('should be able to receive info for a specific city called with params', async () => {
    await request(app).get('/search/valinhos');
    const response = await request(app).get('/consult/city/valinhos');
    expect(response.status).toBe(200);
  });
  it('should be able to return an error if city was not founded', async () => {
    const response = await request(app).get('/consult/city/campinasss');
    expect(response.status).toBe(400);
  });
});
