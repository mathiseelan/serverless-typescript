const request = require('supertest');
const url = process.env.URL
describe('GET single transactions', function() {
  it('should get single transaction', async () => {
        const server = request(url);
  		const response = await server.get('/dev/api/transaction/1');
  		expect(response.body).toHaveProperty('unitPrice');
  		expect(response.statusCode).toEqual(200);
  	});
});