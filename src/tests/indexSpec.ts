import supertest from 'supertest';
import app from '../server/index';

const request = supertest(app);

describe('Server is running', () => {
  it('Should return 200 status', (done) => {
    request.get('/').expect(200);
    done();
  });
  it('should resize image', async () => {
    const res = await request.get('/api/image/?name=fjord.jpg&width=200&height=300');
    expect(res.status).toBe(200);
  });
});
