import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();

// export const singInWithGoogle = async () => {
//   try {
//     const result = await singInWithPopup(FirebaseAuth, googleProvider);
//     const { displayName, email, photoURL, uid } = result.user;
//     return {
//       ok: true,
//       displayName,
//       email,
//       photoURL,
//       uid,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       ok: false,
//     };
//   }
// };

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    console.log(resp);

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: "Ya existe un usuario con este correo" };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
