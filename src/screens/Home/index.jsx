import styles from "./styles.module.css";

import { Navbar } from "../../components/Navbar";
import { Rigth } from "../../components/Home/Rigth";
import { Left } from "../../components/Home/Left";
import { Center } from "../../components/Home/Center";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div>
          <Left />
        </div>
        <div>
          <Center />
        </div>
        <div>
          <Rigth />
        </div>
      </div>
    </>
  );
};
