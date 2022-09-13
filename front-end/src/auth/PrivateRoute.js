import { Route, Redirect } from "react-router-dom";
import { useUser } from "./useUser";

//We are importing PrivateRoute to Routes.js
//If there is no user redirect to login
export const PrivateRoute = (props) => {
  const user = useUser();

  if (!user) return <Redirect to="/login" />;

  return <Route {...props} />;
};
