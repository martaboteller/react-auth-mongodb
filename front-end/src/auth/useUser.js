import { useState, useEffect } from "react";
import { useToken } from "./useToken";

//This is a personalized hook
//Sets/Gets a token (payload) to the user
export const useUser = () => {
  //This is another personalized hook
  const [token] = useToken();

  //JWT are JSON web tokens
  //Structure is header.payload.signature

  //Getting the payload and decoding it with atob to transform it to json string
  const getPayloadFromToken = (token) => {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(atob(encodedPayload));
  };

  //If there is a token assign it to the user
  const [user, setUser] = useState(() => {
    if (!token) {
      return null;
    }
    return getPayloadFromToken(token);
  });

  //If token changes, set user else there is no user
  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getPayloadFromToken(token));
    }
  }, [token]);
  return user;
};
