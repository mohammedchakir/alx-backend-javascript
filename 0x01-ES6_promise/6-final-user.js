import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

/**
 * Handles profile signup by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The filename of the photo to upload.
 * @returns {Array} An array containing objects with the status and value or error returned by the Promises.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then(results => {
    return results.map(result => {
      if (result.status === "fulfilled") {
        return {
          status: "fulfilled",
          value: result.value
        };
      } else {
        return {
          status: "rejected",
          value: result.reason
        };
      }
    });
  });
}