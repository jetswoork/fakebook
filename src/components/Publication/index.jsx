import styles from "./styles.module.css";
import mundo from "../../assets/png/public.png";
import puntos from "../../assets/png/puntos.png";
import likeee from "../../assets/png/like.png";
import likee from "../../assets/png/likee.png";
import likeBlue from "../../assets/png/likeBlue.png";
import encanta from "../../assets/png/encanta.png";
import comentarioo from "../../assets/png/comentario.png";
import compartir from "../../assets/png/compartir.png";
import send from "../../assets/png/send.png";
import user1 from "../../assets/img/user1.jpg";
import { Fragment, useState } from "react";
import { Comments } from "../Home/Comments";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { FirebaseApp } from "../../firebase/config";
import { useModal } from "../../hooks/useModal";
import { ModalShare } from "../ModalShare";

const initialState = {
  comment: "",
};

export const Publication = ({ data, email, setPublicaciones }) => {
  const { name, time, description, image, perfil, id } = data;
  const { openShareModal } = useModal();

  const [openComment, setOpenComment] = useState(false);
  const [like, setLike] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState(initialState);
  const [buttonActive, setButtonActive] = useState(false);
  const firestore = getFirestore(FirebaseApp);

  const handleChange = (event) => {
    setComentario({ ...comentario, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComentarios([...comentarios, comentario]);
    setComentario(initialState);
  };

  return (
    <Fragment>
      <ModalShare />
      {!image && !description ? null : (
        <div className={styles.publication}>
          <div className={styles.containerPerfil}>
            <div className={styles.flex}>
              <img src={perfil} alt="" />
              <div className={styles.containerInfo}>
                <h3>{name}</h3>
                <div className={styles.containerPublic}>
                  {time ? <p>{time}</p> : <p>1 min</p>} ·{" "}
                  <img src={mundo} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.containerDelete}>
              <div className={styles.containerButton}>
                <img src={puntos} alt="" />
              </div>
              <div className={styles.containerButton}></div>
            </div>
          </div>
          <div className={styles.containerDescripcion}>
            <p>{description}</p>
          </div>
          <div className={styles.containerImgDescripcion}>
            <img src={image} alt="" />
          </div>
          <div className={styles.containeropenComment}>
            <div className={styles.containerSpace}>
              <div className={styles.containerIcons}>
                <div className={styles.containerImg1}>
                  <img src={likeee} alt="" />
                </div>
                <div className={styles.containerImg2}>
                  <img src={encanta} alt="" />
                </div>
                <p>1 mil</p>
              </div>
              <div>
                <p>36 veces compartidos</p>
              </div>
            </div>
            <hr />
            <div className={styles.containerRow}>
              <div onClick={() => setLike(!like)}>
                {like === true ? (
                  <div className={styles.containerLike}>
                    <img src={likeBlue} alt="" /> <p>Me gusta</p>
                  </div>
                ) : (
                  <div className={styles.containerLike}>
                    <img src={likee} alt="" /> <p>Me gusta</p>
                  </div>
                )}
              </div>

              <div
                onClick={() => setOpenComment(!openComment)}
                className={styles.containerComen}
              >
                <img src={comentarioo} alt="" /> <p>Comentar</p>
              </div>
              <div
                className={styles.containerLike}
                onClick={() => openShareModal()}
              >
                <img src={compartir} alt="" /> <p>Compartir</p>
              </div>
            </div>
            <hr />
            <Comments comentarios={comentarios} />
            {openComment === true && (
              <div className={styles.containerCommentTexs}>
                <img src={user1} alt="" />
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className={styles.inputContainer}
                >
                  <input
                    onChange={handleChange}
                    type="text"
                    name="comment"
                    value={comentario.comment}
                    placeholder="Escribe un comentario..."
                  />
                  <button className={styles.containerSend} type="submit">
                    <img src={send} alt="" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};
