/**
 * Handles a response from an API Promise.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Object|Error} An object with status and body attributes if the Promise resolves, or an empty Error object if it rejects.
 */
function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
