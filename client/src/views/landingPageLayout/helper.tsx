import { login, signUp } from "../../redux/preLoginStates/api";
import store from "../../redux/store";
import { LOGIN, SIGNUP } from "../../services/endpoint";

export const loginSignUp = (isLoggedIn: boolean, enqueueSnackbar: any) => {
  const { email, password, firstName, lastName } = store.getState().preLogin;
  isLoggedIn
    ? store
        .dispatch(
          login({
            endpoint: LOGIN,
            body: {
              email: email,
              password: password,
            },
          })
        )
        .then(
          (response: {
            payload: {
              error: any;
              message: any;
            };
          }) => {
            if (response?.payload?.message || response?.payload) {
              enqueueSnackbar(
                response?.payload?.message ?? response?.payload
              );
            }
          }
        )
    : store
        .dispatch(
          signUp({
            endpoint: SIGNUP,
            body: {
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
            },
          })
        )
        .then(
          (response: {
            payload: {
              error: any;
              message: any;
            };
          }) => {debugger
            if (response?.payload?.message || response?.payload) {
              enqueueSnackbar(
                response?.payload?.message ?? response?.payload
              );
            }
          }
        );
};
