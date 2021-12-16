import React from 'react';
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
                            <span>Never Stop</span>
                            <h3>Exploring</h3>
                            <p>explore a amazonia</p>
                            <a href="hashtag" className="btn">Get Started</a>
                        </div>

                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" data-swiper-autoplay="1000">
                        <div className="box second" >
                            <div className="content">
                                <span>make tour</span>
                                <h3>Exploring</h3>
                                <p>explore a amazonia</p>
                                <a href="hashtag" className="btn">Get Started</a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                    
                <SwiperSlide>
                    <div className="slide" data-swiper-autoplay="1000">
                        <div className="box third">
                            <div className="content">
                                <span>Explore the</span>
                                <h3>Exploring</h3>
                                <p>explore a amazonia</p>
                                <a href="hashtag" className="btn">Get Started</a>
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