console.log('keys loaded');

// Great for consealing username and PW or other API keys.  Make sure the .env file is added to the ".gitignore" so the UN and PW are not exposed
// Requires that a ".env" file be located in the "root" folder (same level as server.js) with a "UN" and "PW" variable set

exports.dbCreds = {
  id: process.env.UN,
  secret: process.env.PW
};
