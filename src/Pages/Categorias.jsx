import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';
import image1 from "../images/category-1.jpg";
import image2 from "../images/category-2.jpg";
import image3 from "../images/category-3.jpg";
import image4 from "../images/category-4.jpg";
import data from "../data";

export default function Categorias () {
    const posts = (data()).trilhas;
    console.log(posts);
    const { pathname } = useLocation();
    if(pathname.includes('/categorias/trilhas')){
    return (
        <main>
            <Header/>
            <div className="categorie-container">
            <img src={image1} alt="categorie-1" className="image" />
            <div className="categorie-content">
            {posts.map((item) => (  
                <div key={item.title}> 
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
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
        return (
            <main>
            <Header/>
            <div className="categorie-container">
            <img src={image2} alt="categorie-2" className="image" />
            <div className="categorie-content">
            <h1>trilha</h1>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/stand-up-paddle')){
        return (
            <main>
            <Header/>
            <div className="categorie-container">
            <img src={image3} alt="categorie-3" className="image" />
            <div className="categorie-content">
            <h1>trilha</h1>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/canoagem')){
        return (
            <main>
            <Header/>
            <div className="categorie-container">
            <img src={image4} alt="categorie-4" className="image" />
            <div className="categorie-content">
            <h1>trilha</h1>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }

}