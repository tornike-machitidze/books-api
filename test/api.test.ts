/* eslint-disable no-undef */
import request from 'supertest';
import createApp from '../src/app';

const app = createApp();

describe('GET /api', () => {
  it('should return 200 OK', () => {
    return request(app).get('/api').expect(200);
  });
});
