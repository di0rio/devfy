import style from "./Home.module.css";

import Icon from "../../assets/Icon.svg";
import casa from "../../assets/casa.svg";
import lupa from "../../assets/lupa.svg";
import livro from "../../assets/livro.svg";
import mais from "../../assets/mais.svg";

import seta1 from "../../assets/seta1.svg";
import seta2 from "../../assets/seta2.svg";

import mundo from "../../assets/mundo.svg";

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
          <a href="#">Início</a>
        </div>
        <div className={style.search}>
          <img src={lupa} alt="Ícone de uma lupa cinza." />
          <a href="#">Buscar</a>
        </div>
      </div>
      <div className={style.acount}>
        <div className={style.setas}>
          <img src={seta1} alt="seta para o lado esquerdo." />
          <img src={seta2} alt="seta para o lado direito." />
        </div>
        <div>
          <a href="#">Inscrever-se</a>
          <button className={style.entrar}>Entrar</button>
        </div>
      </div>
      <div className={style.card}>
        <div></div>
      </div>
      <div className={style.mae}>
        <div className={style.library}>
          <img src={livro} alt="ícone de livro cinza." />
          <p>Sua Biblioteca</p>
          <img className={style.maizi} src={mais} alt="botão de mais." />
          <div className={style.playlist}></div>
        </div>
        <div className={style.filhos}>
          <div className={style.playliste}>
            <h4>Crie sua primeira playlist</h4>
            <p>É fácil, vamos te ajudar.</p>
            <div>
              <button className={style.create}>Criar playlist</button>
            </div>
          </div>
        </div>
        <div className={style.filhoss}>
          <div className={style.podcast}>
            <h4>Que tal seguir um podcast novo?</h4>
            <p>Avisaremos você sobre novos episódios.</p>
            <button className={style.createP}>Explore podcasts</button>
          </div>
        </div>
        <div className={style.avos}>
          <div className={style.tio}>
            <a href="#">Cookies</a>
          </div>
          <div className={style.tia}>
            <button className={style.btnL}>
              <img src={mundo} alt="ícone de um mundo cinza." /> Português
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
