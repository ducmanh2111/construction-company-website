import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString === "") return false;

    const userToken = JSON.parse(tokenString);
    return userToken?.data
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.data);
  };

  return {
    setToken: saveToken,
    token
  }
}
