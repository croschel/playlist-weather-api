import request from 'supertest';
import app from '../../src/app';

describe('Requests Controller', () => {
  it('should be able to receive all the requests made', async () => {
    const response = await request(app).get('/consult/requests');
    expect(response.status).toBe(200);
  });
});
