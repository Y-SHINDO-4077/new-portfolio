import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from '../styles/scss/swiper.module.scss'

export default function MVSwiper(){
  const params = {
    slidesPerView: 1,
    effect:"fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  }
  return (
    <>
      <Splide 
      options={ {
        autoplay:true,
        type:'fade',
        rewind:true,
        arrows:false,
        pagination:false,
        interval: 5000,
        pauseOnFocus:false,
        intersection: {
          inView: {
            autoplay: true,
          },
          outView: {
            autoplay: false,
          },
        },
      } }
      aria-label="mvfade"
      className={styles.swipeArea}
      >
        <SplideSlide>
          <div className={styles.swiper01}></div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.swiper02}></div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.swiper03}></div>
        </SplideSlide>
      </Splide>
      <div className={styles.scroll}>
       <div className={styles.kv__scroll}>
		    <div className={styles.kv__scroll__inner}>
		      <div className={styles.kv__scroll__label}>
            <span className={styles.kv__scroll__text}>SCROLL</span>
          </div>
		      <div className={styles.kv__scroll__point}></div>
	    	</div>
	    </div>
      </div>
    </>
  )
};
  


