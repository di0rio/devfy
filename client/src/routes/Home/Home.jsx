import style from "./Home.module.css";

import Icon from "../../assets/Icon.svg";
import casa from "../../assets/casa.svg";
import lupa from "../../assets/lupa.svg"

const Home = () => {
  return (
    <div className={style.pai}>
      <div className={style.home}>
        <img
          className={style.spot}
          src={Icon}
          alt="Logo spotify preto e branco."
        />
        <div className={style.desc}>
          <img src={casa} alt="Ícone de uma casa branca." />
          <a href="#">Home</a>
        </div>
        <div className={style.search}>
          <img src={lupa} alt="Ícone de uma lupa cinza." />
          <a href="#">Search</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
