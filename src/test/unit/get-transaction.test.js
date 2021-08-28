const request = require('supertest');
const url = process.env.URL
describe('GET transactions', function() {
  it('should all the get transactions', async () => {
        const server = request(url);
  		const response = await server.get('/dev/api/transaction');
  		expect(response.body.length).toBeGreaterThanOrEqual(1);
  		expect(response.body[0]).toHaveProperty('unitPrice');
  		expect(response.statusCode).toEqual(200);
  	});
});