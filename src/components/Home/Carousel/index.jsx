import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import perfilJahedys from "../../../assets/img/perfilJahedys.jpg";
import estadoJahedys from "../../../assets/img/estadoJahedys.jpg";
import estadoPapa from "../../../assets/img/estadoPapa.jpg";
import perfilHector from "../../../assets/img/perfilHector.jpg";
import estadoHector from "../../../assets/img/estadoHector.jpg";
import estadoSantiago from "../../../assets/img/estadoSantiago.jpg";
import perfilMama from "../../../assets/img/perfilMama.jpg";
import estadoMama from "../../../assets/img/estadoMama.jpg";
import perfilRosa from "../../../assets/img/perfilRosa.jpg";
import estadoRosa from "../../../assets/img/estadoRosa.jpg";
import jonatha from "../../../assets/contacts/jonatha.jpg";
import santiago from "../../../assets/contacts/santiago.jpg";
import nicolas from "../../../assets/contacts/nicolas.jpg";
import estadoNicolas from "../../../assets/img/estadoNicolas.jpg";

const state = [
  {
    perfil: perfilHector,
    estado: estadoHector,
    nombre: "Hector Simancas",
  },
  {
    perfil: perfilJahedys,
    estado: estadoJahedys,
    nombre: "Jahedys Mendoza",
  },
  {
    perfil: santiago,
    estado: estadoSantiago,
    nombre: "Santiago Tedesco",
  },
  {
    perfil: perfilRosa,
    estado: estadoRosa,
    nombre: "Rosa Tedesco",
  },
  {
    perfil: jonatha,
    estado: estadoPapa,
    nombre: "Jonatha Tedesco",
  },
  {
    perfil: perfilMama,
    estado: estadoMama,
    nombre: "Katiana Tedesco",
  },

  {
    perfil: nicolas,
    estado: estadoNicolas,
    nombre: "Nicolas Tedesco",
  },
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 480,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      centerMode={false}
      className={styles.carousel}
      containerClass=""
      dotListClass=""
      focusOnSelect={false}
      infinite
      itemClass={styles.items}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      sliderClass={styles.slider}
      slidesToSlide={1}
      swipeable
    >
      {state.map((data, key) => (
        <div key={key} className={styles.estados}>
          <img src={data.estado} alt="" />
          <div className={styles.nombre}>
            <p>{data.nombre}</p>
          </div>
          <div className={styles.perfil}>
            <img src={data.perfil} alt="" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
