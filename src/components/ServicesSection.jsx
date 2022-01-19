import Serv1 from "../images/serv-1.png";
import Serv2 from "../images/serv-2.png";
import Serv3 from "../images/serv-6.png";

export default function ServicesSection(){
    return(
        <section className="services">
            <h1 className="heading">O que nós oferecemos</h1>
            <div className="box-container">
                <div className="box">
                    <img src={Serv1} alt="service 1" />
                    <h3>Guia para o aventureiro!</h3>
                    <p>guia de viagens</p>
                    <a href="hashtag" className="btn">Leia mais</a>
                </div>

                <div className="box">
                    <img src={Serv2} alt="service 2" />
                    <h3>Trilhas na Amazonia</h3>
                    <p>guia de viagens</p>
                    <a href="hashtag" className="btn"> Leia mais</a>
                </div>

                <div className="box">
                    <img src={Serv3} alt="service 3" />
                    <h3>Várias Aventuras</h3>
                    <p>guia de viagens</p>
                    <a href="hashtag" className="btn"> Leia mais</a>
                </div>
                
            </div>
        </section>
    )
}