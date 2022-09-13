import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const SignUpPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordlValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordlValue] = useState("");

  const history = useHistory();

  //When new user signs up we receive a token from the server
  const onSignUpClicked = async () => {
    const response = await axios.post("api/signup", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/please-verify");
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        type="text"
        placeholder="someone@gmail.com"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordlValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordlValue(e.target.value)}
      />
      <hr />
      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>

      <button onClick={() => history.push("/login")}>
        Already have account? Log In
      </button>
    </div>
  );
};
