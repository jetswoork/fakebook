import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
} from "../../../firebase/provider";
import { registerCloseModal } from "../modal/modalSlice";
import { checkingCredentials, onLogin, onLogout } from "./authSlice";
export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(onLogout({ errorMessage }));
    dispatch(onLogin({ uid, displayName, email, photoURL }));
    dispatch(registerCloseModal());
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await loginWithEmailPassword({ email, password });
    console.log(resp);
    if (!resp.ok) return dispatch(onLogout(resp));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(onLogout());
  };
};
