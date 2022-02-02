import Image1 from "../images/passeio-1.png";
import Image2 from "../images/passeio-2.png";
import Image3 from "../images/passeio-3.png";
import Image4 from "../images/passeio-4.png";
import Image5 from "../images/passeio-5.png";
import Image6 from "../images/passeio-6.png";
import { Link } from "react-router-dom";

export default function PackagesSection (){
    return (
      <section className="packages" id="packages">
          <h1 className="heading">Pacotes Populares</h1>
          <div className="box-container">
              
              <div className="box">
                  <div className="image">
                      <img src={Image1} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacote Lagoa Azul, Gruta da Judeia, Caverna  do Maroaga</h3>
                      <p>Que tal conhecer essas 3 maravilhas da nossa Amazônia em um único dia?</p>
                      <div className="price">R$120 - R$230</div>
                      <Link to="/pacotes/01"><a href="/pacotes/01" className="btn">Reserve já!</a></Link>
                  </div>
              </div>

              <div className="box">
                  <div className="image">
                      <img src={Image2} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira da Asframa</h3>
                      <p>Conheça essa cachoeira linda, de fácil acesso e ótima para banho!</p>
                      <div className="price">R$70</div>
                      <Link to="/pacotes/02"><a href="pacotes/02" className="btn">Reserve já!</a></Link>
                  </div>
                  
              </div>
              <div className="box">
                  <div className="image">
                      <img src={Image3} alt=""/>
                  </div>
                  <div className="content">
                  <h3>Pacotes paredão das Lajes, fervedouro, Igarapé de águas vermelhas e corredeira do Urubui</h3>
                      <p>Que tal conhecer essas 5 maravilhas da nossa Amazônia em um único dia? Então Partiu Figueiredo☀️☀️</p>
                      <div className="price">R$120 - R$210</div>
                      <Link to="/pacotes/03"><a href="/pacotes/03" className="btn">Reserve já!</a></Link>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image4} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Excursão Aqua Mark e Lago do Robertinho</h3>
                      <p>Venha desfrutar de um dia agradável em um dos mais lindos cenários naturais da savana roraimense!</p>
                      <div className="price">R$470 - R$490</div>
                      <Link to="/pacotes/04"><a href="/pacotes/04" className="btn">Reserve já!</a></Link>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image5} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacote Safari Amazônico</h3>
                      <p>Vamos conhecer um poucos mais da nossa terra nesse passeio incrivel em meio a floresta amazônica?</p>
                      <div className="price">R$100</div>
                      <Link to="/pacotes/05"><a href="/pacotes/05" className="btn">Reserve já!</a></Link>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image6} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Excursão Serra do Tepequem</h3>
                      <p>Explore esse lugar com uma paisagem diferenciada, cheio de aventura, cachoeiras e trilhas!!!</p>
                      <div className="price">R$450 - R$600</div>
                      <Link to="/pacotes/06"><a href="hastag" className="btn">Reserve já!</a></Link>
                  </div>
            </div>
          </div>
      </section>  
    )
}