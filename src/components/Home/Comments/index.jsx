import { Fragment } from "react";
import styles from "./styles.module.css";
import user1 from "../../../assets/img/user1.jpg";
import { useSelector } from "react-redux";

export const Comments = ({ comentarios }) => {
  const { displayName } = useSelector((state) => state.auth);
  return (
    <Fragment>
      {comentarios.map((comentario, key) => (
        <div key={key} className={styles.containerComents}>
          <img src={user1} alt="" />
          <div className={styles.containerTexts}>
            <p>
              <b>{displayName}</b>
            </p>
            <p> {comentario.comment}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
