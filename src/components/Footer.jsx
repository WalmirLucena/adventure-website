import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const phone = <FontAwesomeIcon icon={faPhone} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const github = <FontAwesomeIcon icon={faGithub} />

export default function Footer () {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Links Rápidos</h3>
                    <a href="/#home">Home</a>
                    <a href="/#category">Categorias</a>
                    <a href="/#packages">Pacotes</a>
                </div>
                <div className="box">
                    <h3>Informações de Contato</h3>
                    <a href="#phone"><i className="fas fa-phone">{phone}</i>+5592992380402</a>
                    <a href="#email"><i className="fas fa-evelope">{envelope}</i>walmirlucena3@gmail.com</a>
                    <a href="https://www.linkedin.com/in/walmirlucena/" target="_blank" rel="noreferrer"><i className="fas fab-linkedin">{linkedin}</i>Walmir Lucena</a>
                    <a href="https://github.com/WalmirLucena" target="_blank" rel="noreferrer"><i className="fas fab-linkedin">{github}</i>WalmirLucena</a>
                </div>
                <div className="credit">
                    Desenvolvido por <span>Walmir Lucena</span> All Rights Reserved!!
                </div>
            </div>
        </section>
    )
}