/**
 * Simulates getting a full response from an API based on success status.
 * @param {boolean} success - Indicates whether the response is successful or not.
 * @returns {Promise} A Promise that resolves with the response object or rejects with an error.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
