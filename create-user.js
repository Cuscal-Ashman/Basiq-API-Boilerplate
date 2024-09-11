const sdk = require('@api/apiversion3');
let access; // 'let' for block scope

// Authenticate and get access token
sdk.auth('Basic NjMxMjNmMWMtZjYxMy00ZjMyLWFiYzUtYzBhZDdhYTY2YmU1OjQ3NWYwMzhkLTBlZmItNGM1ZS1iMzQ0LTAzMzYxOTkyYTRlMw==');

sdk.postToken({ scope: 'SERVER_ACCESS' }, {
  'BASIQ-version': '3.0'
})
  .then(({ data }) => {
    access = data.access_token;
    console.log('Access token:', access);

    // Authenticate using the access token
    sdk.auth(access);

    // Create a new user
    return sdk.createUser({
      email: 'gavin@hooli.com',
      mobile: '+61410888666',
      firstName: 'Gavin',
      middleName: '',
      lastName: 'Belson'
    });
  })
  .then(({ data }) => {
    console.log('User created:', data);
  })
  .catch(err => console.error('Error:', err));

