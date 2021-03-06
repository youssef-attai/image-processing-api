import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('test endpoints', () => {
    it('expect GET / to respond with status 200', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    });
    it('expect GET /api to respond with status 200', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    });
    it('expect GET /api/image?filename=fjord&width=200&height=200 to respond with status 200', async (done) => {
        const response = await request.get('/api/image?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
        done();
    });
});
