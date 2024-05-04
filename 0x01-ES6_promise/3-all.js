import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles profile signup by uploading a photo and creating a user.
 * Logs the profile details to the console if successful, otherwise logs an error message.
 */
function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
