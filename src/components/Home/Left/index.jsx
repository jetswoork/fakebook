import styles from "./styles.module.css";
import whatch from "../../../assets/png/watch.png";
import amigos from "../../../assets/png/amigos.png";
import grupos from "../../../assets/png/grupos.png";
import marketplace from "../../../assets/png/marketplace.png";
import vermas from "../../../assets/png/vermas.png";
import vermenos from "../../../assets/png/vermenos.png";
import estrella from "../../../assets/png/estella.png";
import messengerFb from "../../../assets/png/messengerFb.png";
import recuerdos from "../../../assets/png/recuerdos.png";
import user1 from "../../../assets/img/user1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GroupState = [
  {
    name: "MercadoBook",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9EFTC2nBcF0ggUmdOu0e27SDsz0oD6TSPA&usqp=CAU",
  },
  {
    name: "TuCarro Barquisimeto",
    image:
      "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1629469634711-mlvmstucarro-mobile.jpg",
  },
  {
    name: "Club del Corsa",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_610985-MLV52818502707_122022-W.jpg",
  },
  {
    name: "Programacion",
    image:
      "https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg",
  },
  {
    name: "Compras Barquisimeto",
    image:
      "https://b2325059.smushcdn.com/2325059/wp-content/uploads/2021/08/concepto-de-compras-digitales.jpg?lossy=1&strip=1&webp=1",
  },
];

export const Left = () => {
  const { displayName } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [more, setMore] = useState(false);
  return (
    <div className={styles.left}>
      <div className={styles.profile} onClick={() => navigate("/profile")}>
        <img src={user1} alt="" />
        <h3>{displayName}</h3>
      </div>
      <div className={styles.name}>
        <img src={amigos} alt="" />
        <h3>Amigos</h3>
      </div>
      <div className={styles.name}>
        <img src={grupos} alt="" />
        <h3>Grupos</h3>
      </div>
      <div className={styles.name}>
        <img src={marketplace} alt="" />
        <h3>Marketplace</h3>
      </div>
      <div className={styles.name}>
        <img src={whatch} alt="" />
        <h3>Watch</h3>
      </div>
      {more === false && (
        <div onClick={() => setMore(!more)} className={styles.name}>
          <img src={vermas} alt="" />
          <h3>Ver Mas</h3>
        </div>
      )}

      {more === true && (
        <div>
          <div className={styles.name}>
            <img src={estrella} alt="" />
            <h3>Favoritos</h3>
          </div>
          <div className={styles.name}>
            <img src={messengerFb} alt="" />
            <h3>Messenger</h3>
          </div>
          <div className={styles.name}>
            <img src={recuerdos} alt="" />
            <h3>Recuerdos</h3>
          </div>
        </div>
      )}
      {more === true && (
        <div onClick={() => setMore(!more)} className={styles.name}>
          <img src={vermenos} alt="" />
          <h3>Ver Menos</h3>
        </div>
      )}
      <hr />
      <span>Tus accesos directos</span>
      {GroupState.map((group, key) => (
        <div className={styles.name} key={key}>
          <img src={group.image} alt="" />
          <h3>{group.name}</h3>
        </div>
      ))}
      <hr />
      <div className={styles.footer}>
        <p>
          · · Jesus Tedesco +58 424-5496577 ..
          <a href="https://wa.me/+584245496577" target="_blank">
            whatsapp
          </a>
          ··
          <a href="https://github.com/jetswoork" target="_blank">
            github
          </a>
          ··
          <a href="mailto:jetswoork@gmail.com" target="_blank">
            gmail
          </a>
          ··
          <a
            href="https://www.linkedin.com/in/jesus-tedesco-bb9990262/"
            target="_blank"
          >
            linkedin
          </a>
          ··
          <a href="https://www.facebook.com/jesus.tedesco" target="_blank">
            facebook
          </a>
          ·
        </p>
      </div>
    </div>
  );
};
