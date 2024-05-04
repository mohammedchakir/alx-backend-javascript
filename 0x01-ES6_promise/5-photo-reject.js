/**
 * Uploads a photo with the given filename.
 * @param {string} filename - The name of the file to be uploaded.
 * @returns {Promise} A Promise that rejects with an Error containing the message if the file cannot be processed.
 */
export default function uploadPhoto (filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
