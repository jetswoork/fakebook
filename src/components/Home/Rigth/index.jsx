import styles from "./styles.module.css";
import cambiar from "../../../assets/png/cambiar.png";
import claxon from "../../../assets/png/claxon.png";
import puntos from "../../../assets/png/puntos.png";
import regalo from "../../../assets/png/regalo.png";
import lupa from "../../../assets/png/lupa.png";
import video from "../../../assets/png/video.png";
import jahedys from "../../../assets/contacts/jahedys.jpg";
import katiana from "../../../assets/contacts/katiana.jpg";
import jonatha from "../../../assets/contacts/jonatha.jpg";
import gladys from "../../../assets/contacts/gladys.jpg";
import leangie from "../../../assets/contacts/leangie.jpg";
import mileidy from "../../../assets/contacts/mileidy.jpg";
import yilberth from "../../../assets/contacts/yilberth.jpg";
import brayan from "../../../assets/contacts/brayan.jpg";
import yosmer from "../../../assets/contacts/yosmer.jpg";
import iris from "../../../assets/contacts/iris.jpg";
import leny from "../../../assets/contacts/leny.jpg";
import nicolas from "../../../assets/contacts/nicolas.jpg";
import jose from "../../../assets/contacts/jose.jpg";
import gabriel from "../../../assets/contacts/gabriel.jpg";
import rosamiguel from "../../../assets/contacts/rosamiguel.jpg";
import enmanuel from "../../../assets/contacts/enmanuel.jpg";
import angie from "../../../assets/contacts/angie.jpg";
import jonathan from "../../../assets/contacts/jonathan.jpg";
import wil from "../../../assets/contacts/wil.jpg";
import alejandro from "../../../assets/contacts/alejandro.jpg";
import santiago from "../../../assets/contacts/santiago.jpg";
import hector from "../../../assets/contacts/hector.jpg";

const contactsState = [
  {
    id: 1,
    image: jahedys,
    name: "Jahedys Mendoza",
  },
  {
    id: 2,
    image: santiago,
    name: "Santiago Tedesco",
  },
  {
    id: 3,
    image: hector,
    name: "Hector Simancas",
  },
  {
    id: 4,
    image: yosmer,
    name: "Yosmer Rojas",
  },
  {
    id: 5,
    image: jonatha,
    name: "Jonatha Tedesco",
  },
  {
    id: 6,
    image: mileidy,
    name: "Mileidy Gutierrez",
  },
  {
    id: 7,
    image: katiana,
    name: "katiana Tedesco",
  },
  {
    id: 8,
    image: leangie,
    name: "Leangie Gonzales",
  },
  {
    id: 9,
    image: yilberth,
    name: "Yilberth Yilbao",
  },
  {
    id: 10,
    image: nicolas,
    name: "Nicolas Tedesco",
  },
  {
    id: 11,
    image: leny,
    name: "Leny Reinoso",
  },
  {
    id: 12,
    image: iris,
    name: "Iris Pereira",
  },
  {
    id: 13,
    image: gladys,
    name: "Gladys Silva",
  },
  {
    id: 14,
    image: enmanuel,
    name: "Enmanuel Bello",
  },
  {
    id: 15,
    image: rosamiguel,
    name: "Miguel Ledezma",
  },
  {
    id: 16,
    image: angie,
    name: "Angie Tedesco",
  },
  {
    id: 17,
    image: rosamiguel,
    name: "Rosa Tedesco",
  },
  { id: 18, image: wil, name: "Wilanyely Linares" },
  {
    id: 19,
    image: brayan,
    name: "Brayan Falcon",
  },
  {
    id: 20,
    image: jonathan,
    name: "Jonathan Tedesco",
  },
  {
    id: 21,
    image: gabriel,
    name: "Gabriel Carstairs",
  },
  {
    id: 22,
    image: jose,
    name: "Jose Manuel Gomez",
  },
  {
    id: 23,
    image: alejandro,
    name: "Alejandro Linares",
  },
];

export const Rigth = () => {
  return (
    <div className={styles.rigth}>
      <div className={styles.info}>
        <span>Tus paginas y perfiles</span>
        <div className={styles.containerImg}>
          <img src={puntos} alt="" />
        </div>
      </div>
      <a
        href="https://portfoliotedesco.netlify.app/"
        target="_blank"
        className={styles.page}
      >
        <img
          src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
          alt=""
        />
        <h3>Portfolio</h3>
      </a>
      <div className={styles.promo}>
        <img src={cambiar} alt="" />
        <p>Cambiar a la pagina</p>
      </div>
      <div className={styles.promo}>
        <img src={claxon} alt="" />
        <p>Crear promocion</p>
      </div>
      <hr />
      <div className={styles.info}>
        <span>Cumpleaños</span>
      </div>
      <div className={styles.page}>
        <img src={regalo} alt="" />
        <p>
          Hoy es el cumpleaños de <b>Santiago Tedesco y 11 personas mas.</b>{" "}
        </p>
      </div>
      <hr />
      <div className={styles.info}>
        <span>Contactos</span>
        <div className={styles.info2}>
          <div className={styles.containerImg}>
            <img src={lupa} alt="" />
          </div>
          <div className={styles.containerImg}>
            <img src={video} alt="" />
          </div>
          <div className={styles.containerImg}>
            <img src={puntos} alt="" />
          </div>
        </div>
      </div>
      {contactsState.map((contacts, key) => (
        <div className={styles.page} key={key}>
          <img src={contacts.image} alt="" />
          <div className={styles.abso}></div>
          <h3>{contacts.name}</h3>
        </div>
      ))}
      <hr />
    </div>
  );
};
