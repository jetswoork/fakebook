import styles from "./styles.module.css";
import { ModalRegister } from "../../components/ModalRegister";
import { useModal } from "../../hooks/useModal";
import { useForm } from "../../hooks/useForm";
import { startLoginWithEmailPassword } from "../../redux/slices/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { openRegisterModal } = useModal();
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(formState));
  };
  return (
    <>
      <div className={styles.login}>
        <ModalRegister />
        <div className={styles.container}>
          <div className={styles.texts}>
            <h2>fakebook</h2>
            <h3>
              Fakebook te ayuda a comunicarte y compartir con las personas que
              forman parte de tu vida.
            </h3>
          </div>
          <form onSubmit={onSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Correo electronico o numero de telefono"
              name="email"
              value={formState.email}
              onChange={onInputChange}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formState.password}
              onChange={onInputChange}
              required
            />
            <button type="submit" className={styles.sesion}>
              Iniciar Sesion
            </button>
            <p>¿Olvidaste tu contraseña?</p>
            <hr />
            <button
              onClick={() => openRegisterModal()}
              className={styles.register}
            >
              Crear cuenta nueva
            </button>
            {errorMessage ? (
              <p className={styles.Error}>{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};
