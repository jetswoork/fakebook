import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { modalSlice } from "./slices/modal/modalSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});
