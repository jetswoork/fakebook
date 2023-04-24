import styles from "./styles.module.css";
import libro from "../../../assets/png/libro.png";
import subir from "../../../assets/contacts/subir.jpg";
import reels from "../../../assets/png/reels.png";
import video from "../../../assets/png/video.png";
import videoR from "../../../assets/png/videoR.png";
import galeria from "../../../assets/png/galeria2.png";
import feliz from "../../../assets/png/feliz.png";
import user1 from "../../../assets/img/user1.jpg";
import jahedys from "../../../assets/img/perfilJahedys.jpg";
import yo from "../../../assets/img/yo.jpg";
import nicolas from "../../../assets/contacts/nicolas.jpg";
import eliminar from "../../../assets/img/eliminar.png";
import irving from "../../../assets/img/irving.jpg";
import Slider from "../Carousel";
import { useModal } from "../../../hooks/useModal";
import { ModalState } from "../../ModalState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp } from "../../../firebase/config";
import { Publication } from "../../Publication";

const initialState = [
  {
    id: 1,
    name: "Stephen Curry",
    perfil:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
    time: "2 h",
    description:
      "Stephen Curry salva de nuevo a los Warriors del abismo: remontada, 39 puntos y victoria sobre los Pelicans",
    image:
      "https://laopinion.com/wp-content/uploads/sites/3/2023/01/Stephen-Curry-de-los-Golden-State-Warriors..jpg?quality=80&strip=all&w=960",
  },
  {
    id: 2,
    name: "Programando",
    perfil:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
    time: "1 h",
    description:
      "React es una biblioteca Javascript para crear interfaces de usuario",
    image:
      "https://xiaomiuniverse.com/wp-content/uploads/2017/12/aprender-react.jpeg",
  },
  {
    id: 3,
    name: "Memiando",
    perfil:
      "https://www.si.com/.image/t_share/MTk1MTE2NTQzODg0MTQyMzA2/meme3.jpg",
    time: "55 m",
    description: "",
    image: "https://i.blogs.es/0ec27f/memess/1366_2000.jpg",
  },
  {
    id: 4,
    name: "Movie Company",
    perfil:
      "https://cdn1.vectorstock.com/i/1000x1000/96/20/initial-film-logo-design-q-vector-27309620.jpg",
    time: "40 m",
    description: "Mario estrena el 5 Abril, no te lo pierdas!",
    image:
      "https://i0.wp.com/eltiempolatino.com/wp-content/uploads/2023/03/Super-Mario-Movie.png?fit=1200%2C675&ssl=1",
  },
  {
    id: 5,
    name: "Nba 2k23",
    perfil:
      "https://assets.2k.com/1a6ngf98576c/2RNTmC7iLr6YVlxBSmE4M3/11177cffa2bdbedb226b089c4108726a/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-CROSSGEN_EDITION-425x535.jpg",
    time: "37 m",
    description: "The best crossover in the NBA",
    image: irving,
  },
  {
    id: 6,
    name: "Jesus Tedesco",
    perfil: yo,
    time: "30 m",
    description: "En honor a tu recuerdo",
    image: nicolas,
  },
  {
    id: 7,
    name: "Jahedys Mendoza",
    perfil: jahedys,
    time: "5 m",
    description:
      "Nacemos en familia, crecemos en familia, nos emocionamos en familia y nos reímos en familia... Pero también en familia nos enfadamos, nos frustramos, lloramos... Y es que la familia es toda una escuela, la gran escuela, en la que los niños van desarrollando su personalidad y forjando su identidad.",
    image: subir,
  },
];

export const Center = () => {
  const dispatch = useDispatch();
  const firestore = getFirestore(FirebaseApp);
  const { email, displayName } = useSelector((state) => state.auth);
  const { openStateModal, openShareModal } = useModal();
  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      const publicacionesEncontradas = await crearDocumento(email);
      setPublicaciones(publicacionesEncontradas);
    };
    fetchTareas();
  }, []);

  const crearDocumento = async (idDocumento) => {
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);
    if (consulta.exists()) {
      const infoDocu = consulta.data();
      return infoDocu.publicaciones;
    } else {
      await setDoc(docuRef, { publicaciones: [...initialState] }); // crear documento si no existe
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.publicaciones;
    }
  };

  const eliminarDocumento = async (id) => {
    const nvoPublicaciones = publicaciones.filter(
      (objetoTarea) => objetoTarea.id !== id
    );
    const docuRef = doc(firestore, `usuarios/${email}`);
    updateDoc(docuRef, { publicaciones: [...nvoPublicaciones] });
    setPublicaciones(nvoPublicaciones);
  };

  return (
    <div className={styles.center}>
      <ModalState
        setPublicaciones={setPublicaciones}
        publicaciones={publicaciones}
      />

      <div className={styles.containerHistory}>
        <div className={styles.main}>
          <div className={styles.history}>
            <img src={libro} alt="" />;<h3>Historias</h3>
          </div>
          <a
            href="https://jetsmovie.netlify.app/"
            target="_blank"
            className={styles.reels}
          >
            <img src={reels} alt="" />
            <h3>Reels</h3>
          </a>
          <div className={styles.reels}>
            <img src={video} alt="" />
            <h3>Salas</h3>
          </div>
        </div>
        <hr />
        <div className={styles.cards}>
          <Slider />
        </div>
      </div>
      <div className={styles.state}>
        <div className={styles.containerImage}>
          <img src={user1} alt="" />

          <div className={styles.containerInput}>
            <input
              onClick={() => {
                openStateModal();
              }}
              type="text"
              name=""
              id=""
              placeholder={`¿Que estas pensando, ${displayName}?`}
            />
          </div>
        </div>
        <hr />
        <div className={styles.containerActivity}>
          <div className={styles.containerItem}>
            <img src={videoR} alt="" />
            <h3>Video en vivo</h3>
          </div>
          <div
            onClick={() => openStateModal()}
            className={styles.containerItem}
          >
            <img src={galeria} alt="" />
            <h3>Foto/Video</h3>
          </div>
          <div className={styles.containerItem}>
            <img src={feliz} alt="" />
            <h3>Sentimiento/actividad</h3>
          </div>
        </div>
      </div>
      <div className={styles.containerPublication}>
        {publicaciones
          ?.map((info, key) => (
            <div className={styles.rela}>
              <Publication
                key={key}
                data={info}
                setPublicaciones={setPublicaciones}
                email={email}
              />
              {publicaciones?.length < 0 ? null : (
                <div
                  className={styles.abso}
                  onClick={() => eliminarDocumento(info.id)}
                >
                  <img src={eliminar} alt="" />
                </div>
              )}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
