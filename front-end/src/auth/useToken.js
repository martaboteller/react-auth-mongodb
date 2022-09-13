import { useState } from "react";

//This is a personalized hook
//Allows to get/set a user token
export const useToken = () => {
  //Gets the state of the token from the local storage
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  //Sets the new token to the local storage
  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };
  return [token, setToken];
};
