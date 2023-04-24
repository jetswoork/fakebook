import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { onLogin, onLogout, clearErrorMessage, checkingCredentials } =
  authSlice.actions;
