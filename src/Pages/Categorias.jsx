import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';
import image1 from "../images/category-1.jpg";
import image2 from "../images/category-2.jpg";
import image3 from "../images/category-3.jpg";
import image4 from "../images/category-4.jpg";
import data from "../data";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const wpp = <FontAwesomeIcon icon={faWhatsapp} />

export default function Categorias () {
    const { pathname } = useLocation();

    if(pathname.includes('/categorias/trilhas')){
    const posts = (data()).trilhas;
    return (
        <main>
            <Header/>
            <div className="categorie-container">
            <div className="image-container">
            <img src={image1} alt="categorie-1" className="image" />
            </div>
            <div className="categorie-content">
            {posts.map((item) => (  
                <div key={item.title}> 
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <h3>Opções</h3>
                    <ul>
                    {item.opcoes.map((i)=> <li>{i}</li> )}
                    </ul>
                </div>
            ))}                
            </div>
            </div>
            <Footer/>
        </main>
    )
    }
    if(pathname.includes('/rapel')){
        const rapel = (data()).rapel;
    return (
        <main>
            <Header/>
            <div className="categorie-container">
            <div className="image-container">
            <img src={image2} alt="categorie-2" className="image" />
            </div>
            <div className="categorie-content">
            {rapel.map((item) => (  
                <div key={item.title}> 
                    <h1>{item.title}</h1>
                    {item.content.map((i)=> <p>{i}</p> )}
                    <h3>Contato para Rapel: </h3>
                    <a href="https://api.whatsapp.com/send?phone=5592984374420" target="_blank" className="btn" rel="noreferrer">{wpp} Radical King</a>
                </div>
            ))}                
            </div>
            </div>
            <Footer/>
        </main>
    )
    }
    if(pathname.includes('/stand-up-paddle')){
        const standUp = (data()).standUp;
    return (
        <main>
            <Header/>
            <div className="categorie-container">
            <div className="image-container">
            <img src={image3} alt="categorie-3" className="image" />
            </div>
            <div className="categorie-content">
            {standUp.map((item) => (  
                <div key={item.title}> 
                    <h1>{item.title}</h1>
                    {item.content.map((i)=> <p>{i}</p> )}
                </div>
            ))}                
            </div>
            </div>
            <Footer/>
        </main>
    )
    }
    if(pathname.includes('/canoagem')){
        const canoagem = (data()).canoagem;
        return (
            <main>
                <Header/>
                <div className="categorie-container">
                <div className="image-container">
                <img src={image4} alt="categorie-4" className="image" />
                </div>
                <div className="categorie-content">
                {canoagem.map((item) => (  
                    <div key={item.title}> 
                        <h1>{item.title}</h1>
                        {item.content.map((i)=> <p>{i}</p> )}
                        <h3>Reserve esta experiência</h3>
                        <a href="https://api.whatsapp.com/message/UUKJYT6PTIXLI1?autoload=1&app_absent=0" target="_blank" className="btn" rel="noreferrer">{wpp} Ecoforest Adventure</a>
                    </div>
                ))}                
                </div>
                </div>
                <Footer/>
            </main>
        )
    }

}