/**
 * Signs up a user with the provided first name and last name.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise} A Promise that resolves with an object containing the user's first name and last name.
 */
function signUpUser (firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName
  });
}

export default signUpUser;
