// api.test.js
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 when :id is a number', (done) => {
    request(baseUrl + '12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request(baseUrl + 'hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the correct result for valid cart id', (done) => {
    request(baseUrl + '42', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 42');
      done();
    });
  });
});
