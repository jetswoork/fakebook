import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import portada from "../../assets/img/portada.jpg";
import amigo1 from "../../assets/img/amigo1.jpg";
import user1 from "../../assets/img/user1.jpg";
import amigo2 from "../../assets/img/amigo2.jpg";
import amigo3 from "../../assets/img/amigo3.jpg";
import camara from "../../assets/png/camara.png";
import add from "../../assets/png/add.png";
import cerrar from "../../assets/png/cerrar.png";
import { startLogout } from "../../redux/slices/auth/thunks";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(startLogout());
    navigate("/login");
  };

  return (
    <div className={styles.profile}>
      <div className={styles.front}>
        <img src={portada} alt="" />
        <div className={styles.edit}>
          <img src={camara} alt="" />
          <h3>Editar foto de portada</h3>
        </div>
        <div className={styles.perfil}>
          <img src={user1} alt="" />
          <div className={styles.addPerfil}>
            <img src={camara} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.textsProfile}>
        <h1>{displayName}</h1>
        <p>4,4 mil amigos</p>
        <div className={styles.containerFriends}>
          <div className={styles.row}>
            <div className={styles.containerImages1}>
              <img src={amigo1} alt="" />
            </div>
            <div className={styles.containerImages2}>
              <img src={amigo2} alt="" />
            </div>
            <div className={styles.containerImages3}>
              <img src={amigo3} alt="" />
            </div>
          </div>
          <div className={styles.containerButtons}>
            <a
              href="https://portfoliotedesco.netlify.app/"
              target="_blank"
              className={styles.agg}
            >
              <img src={add} alt="" /> <p>Ver imagen de portada</p>
            </a>
            <div onClick={handleLogout} className={styles.lapiz}>
              <img src={cerrar} alt="" /> <p>Cerrar sesión</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
