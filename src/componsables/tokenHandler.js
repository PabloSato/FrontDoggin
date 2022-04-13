let token = null;

const fetchNewToken = async () => {
  const data = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: 'auth@auth.com',
      password: 'secreta',
    }),
  });
  token = await data.json();
  return token.token;
};

const getToken = async () => {
  return token ? token : await fetchNewToken();
};

const resetToken = () => {
  token = null;
};

module.exports = { getToken, resetToken };
