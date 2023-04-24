import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FirebaseAuth } from "../firebase/config";
import { onLogin, onLogout } from "../redux/slices/auth/authSlice";

export const UseCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(onLogout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(onLogin({ uid, email, displayName, photoURL }));
    });
  }, []);

  return {
    status,
  };
};
