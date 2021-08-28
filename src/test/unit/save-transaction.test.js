const request = require('supertest');
const url = process.env.URL
describe('GET transactions', function() {
  it('should save the transactions', async () => {
        const server = request(url);
  		const response = await server.post('/dev/api/transaction').send({
                                                                                "total": 200,
                                                                                "date": "2021-06-17",
                                                                                "discount": 10,
                                                                                "unitPrice": 20,
                                                                                "quantity": 5
                                                                            });
  		expect(response.body).toEqual({"status": "Transaction inserted"});
  		expect(response.statusCode).toEqual(200);
  	});
});