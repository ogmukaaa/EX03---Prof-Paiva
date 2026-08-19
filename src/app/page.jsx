import Image from "next/image";
import styles from "./page.module.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  return(
    <>
    <section className="hero-container">
      <div className="hero-conteudo"> 

      <div className="hero-txt">
            <h1>Unlock Your Business Potential With Facebook & Instagram Advertising</h1>
            <p className="subtitulo">Facebook Premier Level Partner Agency</p>
            <a href="#" className="botaoHero">WORK WITH US</a>
          </div>

          <div className="box-imagem">
            <img src="/imagens/tier11graficos.png" alt="Ilustração do celular e dos gráficos" className="hero-img" />
          </div>

        </div>
        <div className="icones-container">
          
          <div className="icone-itens">
            <img src="/imagens/tierFacebook.png" className="icone-img" />
            <p>Facebook Premier<br />Level Agency Partner</p>
          </div>

          <div className="icone-itens">
            <img src="/imagens/tierGoogle.png" className="icone-img" />
            <p>Google Endorsed<br />Marketing Partner</p>
          </div>

          <div className="icone-itens">
            <img src="/imagens/tierForbes.png" className="icone-img" />
            <p>Forbes Agency<br />Council Member</p>
          </div>

          <div className="icone-itens">
            <img src="/imagens/tierInc500.png" className="icone-img" />
            <p>Inc. 5000<br />Fastest Growing Company</p>
          </div>

          <div className="icone-itens-status">
            <h2>$100M</h2>
            <p>In Annual<br />Digital Ad Spend</p>
          </div>

          <div className="icone-itens-status">
            <h2>15+</h2>
            <p>Years of Facebook<br />Advertising Experience</p>
          </div>

        </div>
      </section>
    </>
  )
}
