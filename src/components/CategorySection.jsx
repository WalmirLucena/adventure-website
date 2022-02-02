import category1 from "../images/category-1.jpg";
import category2 from "../images/category-2.jpg";
import category3 from "../images/category-3.jpg";
import category4 from "../images/category-4.jpg";
import { Link } from "react-router-dom";

export default function CategorySection () {
    return (
        <section className="category" id="category">
            <h1 className="heading">Aventure-se!</h1>
            <div className="box-container">
                <div className="box">
                    <img src={category1} alt=""/>
                    <h3>Trilhas</h3>
                    <p>vamos pular?</p>
                    <Link to="/categorias/trilhas"><a href="/categorias/trilhas" className="btn">Leia mais</a></Link>
                </div>

                <div className="box">
                    <img src={category2} alt=""/>
                    <h3>Rapel</h3>
                    <p>vamos pular?</p>
                    <Link to="/categorias/rapel"><a href="/categorias/rapel" className="btn">Leia mais</a></Link>
                </div>

                <div className="box">
                    <img src={category3} alt=""/>
                    <h3>Stand Up Paddle</h3>
                    <p>vamos pular?</p>
                    <Link to="/categorias/stand-up-paddle"><a href="/categorias/stand-up-paddle" className="btn">Leia mais</a></Link>
                </div>

                <div className="box">
                    <img src={category4} alt=""/>
                    <h3>Canoagem</h3>
                    <p>vamos pular?</p>
                    <Link to="/categorias/canoagem"><a href="/categorias/canoagem" className="btn">Leia mais</a></Link>
                </div>

            </div>
        </section>
    )
}