import { useHistory } from "react-router-dom";

export const PasswordResetFail = () => {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Ups ooh..</h1>
      <p>Something went wrong while trying to reset your password.</p>

      <button onClick={() => history.push("/login")}>Go to login page</button>
    </div>
  );
};
