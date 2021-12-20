import category1 from "../images/category-1.jpg";
import category2 from "../images/category-2.jpg";
import category3 from "../images/category-3.jpg";
import category4 from "../images/category-4.jpg";

export default function CategorySection () {
    return (
        <section className="category" id="category">
            <h1 className="heading">Aventure-se!</h1>
            <div className="box-container">
                <div className="box">
                    <img src={category1} alt=""/>
                    <h3>Trilhas</h3>
                    <p>vamos pular?</p>
                    <a href="hashtag" className="btn">Leia mais</a>
                </div>

                <div className="box">
                    <img src={category2} alt=""/>
                    <h3>Rapel</h3>
                    <p>vamos pular?</p>
                    <a href="hashtag" className="btn">Leia mais</a>
                </div>

                <div className="box">
                    <img src={category3} alt=""/>
                    <h3>Stand Up Paddle</h3>
                    <p>vamos pular?</p>
                    <a href="hashtag" className="btn">Leia mais</a>
                </div>

                <div className="box">
                    <img src={category4} alt=""/>
                    <h3>Canoagem</h3>
                    <p>vamos pular?</p>
                    <a href="hashtag" className="btn">Leia mais</a>
                </div>

            </div>
        </section>
    )
}