
import { uploadPhoto, createUser } from './utils.js';

/**
 * Calls the uploadPhoto and createUser functions asynchronously and returns an object with their responses.
 * @returns {Object} An object with the responses from uploadPhoto and createUser functions, or an empty object if one of the async functions fails.
 */
async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
