import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  registerCloseModal,
  registerOpenModal,
  shareCloseModal,
  shareOpenModal,
  stateCloseModal,
  stateOpenModal,
} from "../redux/slices/modal/modalSlice";

export const useModal = () => {
  const { registerModalOpen, stateModalOpen, shareModalOpen } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const openRegisterModal = () => {
    dispatch(registerOpenModal());
  };

  const closeRegisterModal = () => {
    dispatch(registerCloseModal());
  };

  const openStateModal = () => {
    dispatch(stateOpenModal());
  };

  const closeStateModal = () => {
    dispatch(stateCloseModal());
  };

  const openShareModal = () => {
    dispatch(shareOpenModal());
  };

  const closeShareModal = () => {
    dispatch(shareCloseModal());
  };
  return {
    registerModalOpen,
    stateModalOpen,
    shareModalOpen,

    openRegisterModal,
    closeRegisterModal,
    openStateModal,
    closeStateModal,
    openShareModal,
    closeShareModal,
  };
};
