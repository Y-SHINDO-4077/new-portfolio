
import styles from 'styles/scss/timeline.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'
//const { useLayoutEffect, useRef } = React;
import { ReactElement, useEffect } from 'react'

//import { TweenMax } from "gsap/all";
// import {Draggable} from "gsap/dist/Draggable";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power3 } from "gsap";
//import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import {SplitText} from "gsap/utils/SplitText3";

import Image from 'next/image'
import dicon from 'images/dyuicon.svg'

// const pagesWrapperRef = useRef(null);
// const pagesRef = useRef(null);
// const didEffect = React.useRef(false);

// useEffect(() => {
//   if (didEffect.current) return 
//   didEffect.current = true;
//   const pagesElement = pagesRef?.current;
//   if(!pagesElement) return
//   const pagesWrapperElement = pagesWrapperRef?.current;
//   if(!pagesWrapperElement) return
//   setupGsap(pagesElement, pagesWrapperElement)
// }, [])

export default function Timeline(title) {
  
  useEffect(() => {
    // document.addEventListener("click", (ev) => {
    //   gsap.to(".timeline_text__UTCcv", {
    //     x: ev.clientX,
    //     y: ev.clientY,
    //     stagger: -0.02,
    //   });
    // });
    // const components = document.querySelectorAll('#horizontal-scroll-section')
    // const container = document.querySelector('#horizontal-scroll-section')

    // const splitParent = new SplitText('#timeline__text',{
    //   type:"lines",
    //   lineClass:"lineChildren",
    // })

    // gsap.to(splitParent.lines,{
    //   duration:1,
    //   y:0,
    //   opacity:1,
    //   stagger:0.1,
    //   ease:"power2",
    //   //markers: true // マーカー表示
    // });


    
      const listWrapperEl = document.querySelector('.side_scroll_list_wrapper');
      const listEl = document.querySelector('.side_scroll_list');
      
      gsap.to(listEl, {
        x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline_timeline__section__xSLiR',
          start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
          //end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
 
        // const triggerSection = document.querySelector(".js-scroll-trigger");
        // const listContainer = document.querySelector(".js-list-container");
        // const listElement = document.querySelector(".js-list-element");
        // const scrollValue = listElement.clientWidth - listContainer.clientWidth;
      
        // gsap.to(listElement, {
        //   x: -scrollValue,
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: triggerSection,
        //     start: "top top",
        //     end:`+=${scrollValue}`,
        //     scrub: true,
        //     pin: true,
        //     anticipatePin: 1,
        //     invalidateOnRefresh: true
        //   }
        //  })
      
  })
      
 
  
 
  // const setAnimation = () => {
  //   gsap.to('#pages', {
  //     // アニメーション内容
  //     scrollTrigger: {
  //       trigger: '#horizontal-scroll-section',
  //       start: 'top top',  //開始時のトリガー条件
  //       end: 'bottom 40%',  //終了時のトリガー条件
  //       onEnter: () => {}, //スクロールイン時
  //       onEnterBack: () => {}, //スクロールバック時
  //       scrub: true,
  //       pin: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //       markers: true // マーカー表示
  //     }
  //   })
  // }
  //setAnimation();
  
  
  // const todos = [
  //   [1, 1994,"Born" ,"誕生"],
  //   [2, 2018,"Graduated from Doshisha University,Cultural history." , "同志社大学文学部文化史学科日本史専攻卒業"],
  //   [3,2018,"Work as a Developer at a systems Company. ","業務システム会社でプログラマーとして働く"],
  //   [4,2020,"Work as a Front-end enginner at a website production. ","Web制作会社でフロントエンジニアとして働く"],
  //   [5,2022,"Entered Kyoto Univ. of the Arts, Graphic design.","京都芸術大学通信教育部デザイン学科グラフィックデザインコースに入学"]
  // ];
  

  return (
    <>
  
    <div className={styles.t_left}>
         <h2 className={styles.t__left} id="timeline__text">TIMELINE</h2>
        </div>
    <section className={styles.timeline__section}>
      
        <div className={styles.side_scroll_list_wrapper} id="area">
          
          <div className={styles.side_scroll_list} id="wrap">
            <div className={styles.side_scroll_item}>
              <span className={styles.sr_only}>1</span>
              <h4>1994</h4>
              <h3>Born</h3>
              <p>誕生</p>
            </div>  
            <div className={styles.side_scroll_item}>
              <span className={styles.sr_only}>1</span>
              <h4>2018</h4>
              <h3>Graduated from Doshisha University,Cultural history.</h3>
              <p>同志社大学文学部文化史学科日本史専攻卒業</p>
            </div>
            <div className={styles.side_scroll_item}>
              <span className={styles.sr_only}>3</span>
              <h4>2018</h4>
              <h3>Work as a Developer at a systems Company. </h3>
              <p>業務システム会社でプログラマーとして働く</p>
            </div> 
            <div className={styles.side_scroll_item}>
              <span className={styles.sr_only}>4</span>
              <h4>2020</h4>
              <h3>Work as a Front-end enginner at a website production. </h3>
              <p>Web制作会社でフロントエンジニアとして働く</p>
            </div>
            <div className={styles.side_scroll_item}>
              <span className={styles.sr_only}>5</span>
              <h4>2022</h4>
              <h3>Entered Kyoto Univ. of the Arts, Graphic design. </h3>
              <p>京都芸術大学通信教育部デザイン学科グラフィックデザインコースに入学</p>
            </div> 
                   
           

{/* <div class="biography__wrapper">
            <div class="biography__container js-list-container">
              <ol class="biography__list js-list-element js-observe-target">
                <li class="biography__item">
                  <time datetime="1999-02" class="biography__date">1999.02</time>
                  <p class="biography__title">デザインが好きだった幼少期</p>
                  <span class="biography__dot"></span>
                  <p class="biography__description">東京都に生まれる。幼少期からパソコンとファッションが大好きで、趣味はグラフィックソフトで待ち受け画像を作ること。</p>
                </li>
                <li class="biography__item">
                  <time datetime="2017-04" class="biography__date">2017.04</time>
                  <p class="biography__title">好きな学問を突き詰めた大学時代</p>
                  <span class="biography__dot"></span>
                  <p class="biography__description">中央大学 総合政策学部に入学。主に韓国語と韓国のファッション文化について学ぶ。大学2年次に、韓国語能力試験で6級を取得。</p>
                </li>
                <li class="biography__item">
                  <time datetime="2021-04" class="biography__date">2021.04</time>
                  <p class="biography__title">アパレル企業に本部職として就職</p>
                  <span class="biography__dot"></span>
                  <p class="biography__description">好きな洋服に関わる仕事がしたいと思い、アパレル企業に本部職として就職。マーケティングを学びながら、販売促進に従事。
                  </p>
                </li>
                <li class="biography__item">
                  <time datetime="2021-12" class="biography__date">2021.12</time>
                  <p class="biography__title">Webデザインに興味を持つ</p>
                  <span class="biography__dot"></span>
                  <p class="biography__description">好きな「もの」ではなく好きな「こと」を仕事にしたいと思い始めていた頃、Webデザインを知り、興味を持つ。</p>
                </li>
                <li class="biography__item">
                  <time datetime="2022-02" class="biography__date">2022.02</time>
                  <p class="biography__title">本格的にデザインの勉強を始める</p>
                  <span class="biography__dot"></span>
                  <p class="biography__description">Webデザイナーを目指すことを決意。デジタルハリウッドSTUDIO by LIGへ入学し、本格的にWebデザインの勉強を始める。</p>
                </li>
              </ol>
            </div>
          </div> */}
              {/* <div className={styles.items}>
               <span>横スクロール1</span>
               </div>
              <div className={styles.items}>
                <span>横スクロール2</span>
              </div>
              <div className={styles.items}>
                <span>横スクロール3</span>
              </div>
              <div className={styles.items}>
                 <span>横スクロール4</span>
              </div> */}

            {/* </div> */}
          </div>
        </div>
        
      
        
      
    </section>

   
    </>
  )
}
