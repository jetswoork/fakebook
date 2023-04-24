import styles from "./styles.module.css";
import Modal from "react-modal";
import user1 from "../../assets/img/user1.jpg";
import felizg from "../../assets/png/felizg.png";
import eliminar from "../../assets/img/eliminar.png";
import usuarios from "../../assets/png/usuarios.png";
import agregarPubli from "../../assets/img/agregarPubli.jpg";
import { useModal } from "../../hooks/useModal";
import { useSelector, useDispatch } from "react-redux";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseApp } from "../../firebase/config";
import { useRef, useState } from "react";

const customStyles = {
  content: {
    height: "auto",
  },
};

Modal.setAppElement("#root");

export const ModalState = ({ setPublicaciones, publicaciones }) => {
  const firestore = getFirestore(FirebaseApp);
  const storage = getStorage(FirebaseApp);
  const { stateModalOpen, closeStateModal } = useModal();
  const { displayName, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [urlImg, setUrlImg] = useState();
  const fileInputRef = useRef();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const descripcion = event.target.formDescripcion.value;
    const nvaPublicacion = [
      ...publicaciones,
      {
        id: +new Date(),
        name: displayName,
        perfil: user1,
        description: descripcion,
        image: urlImg,
        // image: "https://picsum.photos/720",
      },
    ];

    const docuRef = doc(firestore, `usuarios/${email}`);
    updateDoc(docuRef, { publicaciones: [...nvaPublicacion] });
    setPublicaciones(nvaPublicacion);
    event.target.formDescripcion.value = "";
  };

  const fileHandler = async (event) => {
    if (event.target.files === 0) return;
    const archivoLocal = event.target.files[0];
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);
    const urlDescarga = await getDownloadURL(archivoRef);
    setUrlImg(urlDescarga);
  };

  return (
    <Modal
      isOpen={stateModalOpen}
      onRequestClose={closeStateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <div className={styles.containerRegister}>
        <div className={styles.row}>
          <h3>Crear Publicacion</h3>
          <div onClick={closeStateModal} className={styles.containerX}>
            <img src={eliminar} alt="" />
          </div>
        </div>

        <hr />
        <div className={styles.containerUser}>
          <img src={user1} alt="" />
          <div className={styles.containerName}>
            <h3>{displayName}</h3>
            <div className={styles.containerFriends}>
              <img src={usuarios} alt="" />
              <p>Amigos</p>
            </div>
          </div>
        </div>
        <form className={styles.form} onSubmit={handlesubmit}>
          <div className={styles.containerInput}>
            <input
              type="text"
              className={styles.input}
              placeholder={`¿Que estas pensando, ${displayName}?`}
              id="formDescripcion"
            />
            <img src={felizg} alt="" />
          </div>
          <div
            onClick={() => fileInputRef.current.click()}
            className={styles.pre}
          >
            <div className={styles.preContainer}>
              <div className={styles.containerImg}>
                <img src={agregarPubli} alt="" />
              </div>
              <h3>Agregar fotos/videos</h3>
            </div>
            <input
              className={styles.none}
              type="file"
              name="files"
              id=""
              onChange={fileHandler}
              ref={fileInputRef}
            />
          </div>
          <div className={styles.containerButton}>
            <button onClick={() => closeStateModal()} type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
