import Image1 from "../images/img-1.jpg";
import Image2 from "../images/img-2.jpg";
import Image3 from "../images/img-3.jpg";
import Image4 from "../images/img-4.jpg";
import Image5 from "../images/img-5.jpg";
import Image6 from "../images/img-6.jpg";

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
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
              </div>

              <div className="box">
                  <div className="image">
                      <img src={Image2} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
                  
              </div>
              <div className="box">
                  <div className="image">
                      <img src={Image3} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image4} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image5} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
            </div>
            <div className="box">
                  <div className="image">
                      <img src={Image6} alt=""/>
                  </div>
                  <div className="content">
                      <h3>Pacotes Cachoeira</h3>
                      <p>conheça a Cachoeira Tal</p>
                      <div className="price">R$180 - R$220</div>
                      <a href="hastag" className="btn">Explore Now</a>
                  </div>
            </div>
          </div>
      </section>  
    )
}