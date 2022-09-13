import { testRoute } from "./testRoute";
import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { getGoogleOAuthUrlRoute } from "./getGoogleOAuthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";
//import { testEmailRoute } from "./testEmailRoute";

export const routes = [
  testRoute,
  signUpRoute,
  logInRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOAuthUrlRoute,
  googleOauthCallbackRoute,
  //testEmailRoute,
];
