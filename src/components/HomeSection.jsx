import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import '../style.scss';
import SwiperCore, {
    Pagination,
    Navigation,
    EffectFade,
    Controller
  } from 'swiper';
  import Left from '../images/left1.png';
  import Right from '../images/right1.png';
  SwiperCore.use([Pagination, EffectFade, Navigation, Controller]);
  

export default function HomeSection () {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
    <section className="home" id="home">
        <Swiper
        slidesPerView={1}
        speed={500}
        centeredSlides
        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
       }}
        
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
          bulletClass: "custom-bullet-black",
          modifierClass: "swiper-pagination-custom"
        }}
        className="mySwiper"
      >
        <div className="home-slider">
            <div className="wrapper">
                <SwiperSlide>
                <div className="slide" data-swiper-autoplay="1000">
                    
                    <div className="box one">
                        <div className="content">
                            <span>Nunca pare de</span>
                            <h3>Explorar</h3>
                            <p>conheça a amazonia</p>
                            <Link to="/pacotes/06"><a href="hashtag" className="btn">Inicie sua Jornada</a></Link>
                        </div>

                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" data-swiper-autoplay="1000">
                        <div className="box second" >
                            <div className="content">
                                <span>Faça trilhas</span>
                                <h3>Sensacionais</h3>
                                <p>explore novas trilhas</p>
                                <Link to="/pacotes/01"><a href="hashtag" className="btn">Comece já!</a></Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                    
                <SwiperSlide>
                    <div className="slide" data-swiper-autoplay="1000">
                        <div className="box third">
                            <div className="content">
                                <span>Descubra paisagens</span>
                                <h3>Incríveis</h3>
                                <p>explore a amazonia</p>
                                <Link to="/pacotes/03"><a href="hashtag" className="btn">Descubra já!</a></Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                
                
            </div>
            
        </div>
        <div ref={navigationPrevRef} className="swiper-button-prev">{<img src={Left} alt="anterior" width="40px"/>}</div>
        <div ref={navigationNextRef} className="swiper-button-next">{<img src={Right} alt="anterior" width="40px"/>}</div>
        </Swiper>
    </section>
    )
}