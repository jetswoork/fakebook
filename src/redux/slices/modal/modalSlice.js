import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    registerModalOpen: false,
    stateModalOpen: false,
    shareModalOpen: false,
  },
  reducers: {
    registerOpenModal: (state) => {
      state.registerModalOpen = true;
    },
    registerCloseModal: (state) => {
      state.registerModalOpen = false;
    },
    stateOpenModal: (state) => {
      state.stateModalOpen = true;
    },
    stateCloseModal: (state) => {
      state.stateModalOpen = false;
    },
    shareOpenModal: (state) => {
      state.shareModalOpen = true;
    },
    shareCloseModal: (state) => {
      state.shareModalOpen = false;
    },
  },
});

export const {
  registerOpenModal,
  registerCloseModal,
  stateOpenModal,
  stateCloseModal,
  shareOpenModal,
  shareCloseModal,
} = modalSlice.actions;
