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

describe('Available payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', (done) => {
    request(url, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', () => {
  const url = 'http://localhost:7865/login';
  const options = {
    url: url,
    method: 'POST',
    json: {
      userName: 'Betty'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };

  it('should return status code 200', (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct welcome message', (done) => {
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
