import styles from "./styles.module.css";
import Modal from "react-modal";
import eliminar from "../../assets/img/eliminar.png";
import { useForm } from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../redux/slices/auth/thunks";
import { useMemo } from "react";

const customStyles = {
  content: {
    display: "flex",
    // width: "30%",
    // left: "0%",
    // right: "0%",
    // bottom: "0%",
    // margin: "0 auto",
    // transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ModalRegister = () => {
  const { registerModalOpen, closeRegisterModal } = useModal();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
    displayName: "",
    // photoURL: "",
    // first_name: "Jesus",
    // last_name: "Tedesco",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <Modal
      isOpen={registerModalOpen}
      onRequestClose={closeRegisterModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <div className={styles.containerRegister}>
        <div className={styles.row}>
          <h3>Registrarte</h3>{" "}
          <div onClick={closeRegisterModal} className={styles.containerX}>
            <img src={eliminar} alt="" />
          </div>
        </div>
        <p>Es rapido y facil.</p>
        <hr />
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.containerInput2}>
            <input
              type="text"
              className={styles.input2}
              placeholder="Nombre y apellido"
              name="displayName"
              value={formState.displayName}
              onChange={onInputChange}
              required
            />
            {/* <input
              type="text"
              className={styles.input2}
              placeholder="Apellido"
              name="last_name"
              value={formState.last_name}
              onChange={onInputChange}
              required
            /> */}
          </div>
          <div className={styles.containerInput}>
            <input
              type="email"
              className={styles.input}
              placeholder="correo electronico"
              name="email"
              value={formState.email}
              onChange={onInputChange}
              required
            />
          </div>
          <div className={styles.containerInput}>
            <input
              type="password"
              className={styles.input}
              placeholder="Contraseña"
              name="password"
              value={formState.password}
              onChange={onInputChange}
              required
            />
          </div>
          <p>Fecha de naciminento</p>
          <div className={styles.containerInput2}>
            <input
              type={"number"}
              className={styles.input2}
              placeholder="1"
              name="day"
            />
            <input
              type={"month"}
              className={styles.input2}
              placeholder="enero"
              name="month"
            />
          </div>

          <div className={styles.cookies}>
            <p>
              Es posible que las personas que usan nuestro servicio hayan subido
              tu información de contacto a Fakebook.
              <b>Obtén más información</b>.
              <br />
            </p>
            <br />
            <p>
              Al hacer clic en "Registrarte", aceptas nuestras
              <b>Condiciones</b> , <b> la Política de privacidad</b> y la
              <b> Política de cookies</b>. Es posible que te enviemos
              notificaciones por SMS, que puedes desactivar cuando quieras.
            </p>
          </div>

          <div className={styles.containerButton}>
            <button type="submit">Registrarte</button>
          </div>
        </form>
        {errorMessage ? <p className={styles.Error}>{errorMessage}</p> : null}
      </div>
    </Modal>
  );
};
