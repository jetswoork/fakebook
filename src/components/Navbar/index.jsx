import styles from "./styles.module.css";
import facebook from "../../assets/png/facebook.png";
import lupa from "../../assets/png/lupa.png";
import home from "../../assets/png/home.png";
import watchNavbar from "../../assets/png/watchNavbar.png";
import marketNavbar from "../../assets/png/marketNavbar.png";
import groupNavbar from "../../assets/png/groupNavbar.png";
import game from "../../assets/png/game.png";
import messenger from "../../assets/png/messenger.png";
import menu from "../../assets/png/menu.png";
import campana from "../../assets/png/campana.png";
import user1 from "../../assets/img/user1.jpg";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.search}>
        <img onClick={() => navigate("/")} src={facebook} alt="" />
        <div className={styles.input}>
          <img src={lupa} alt="" />
          <input type="text" name="" placeholder="Buscar en Facebook" />
        </div>
      </div>
      <div className={styles.navigate}>
        <div className={styles.container} onClick={() => navigate("/")}>
          <img src={home} alt="" />
        </div>
        <a
          href="https://jetsmovie.netlify.app/"
          target="_blank"
          className={styles.container}
        >
          <img src={watchNavbar} alt="" />
        </a>
        <div className={styles.container}>
          <img src={marketNavbar} alt="" />
        </div>
        <div className={styles.container}>
          <img src={groupNavbar} alt="" />
        </div>
        <div className={styles.container}>
          <img src={game} alt="" />
        </div>
      </div>
      <div className={styles.config}>
        <div className={styles.none}>
          <div className={styles.container}>
            <img src={menu} alt="" />
          </div>
          <div className={styles.container}>
            <img src={messenger} alt="" />
          </div>
          <div className={styles.container}>
            <img src={campana} alt="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/profile")}
          className={styles.containerProfile}
        >
          <img src={user1} alt="" />
        </div>
      </div>
    </div>
  );
};
