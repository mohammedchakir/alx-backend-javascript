/**
 * Simulates getting a response from an API.
 * @returns {Promise} A Promise that resolves after a short delay.
 */
function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    // Simulating API response after a short delay (e.g., 1 second)
    setTimeout(() => {
      resolve('API response data');
    }, 1000);
  });
}

export default getResponseFromAPI;
