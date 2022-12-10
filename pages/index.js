import Meta from 'components/meta'

import Container from 'components/container'
import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'


import { ReactElement, useEffect ,useRef,useLayoutEffect} from 'react'

import styles from '../styles/scss/Home.module.scss'
import Hero from 'components/hero'
import MVSwiper from 'components/swiper'
import CANVAS from 'components/canvas'
import MeSetion from 'components/me_section'
import DNUSetion from 'components/dnu_section'
import READMORE from 'components/readmore'
import Image from 'next/image'
import topwork from 'images/topwork.webp'


export default function Home({ posts }) {
  const typewrite = useRef(null);
  useEffect(() => {   
      

      let ctx = gsap.context(() => {
        // normal selector text, automatically scoped to appRef 
        gsap.from('typewrite.current span ', {
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: 'power1.inOut',
            paused: true
          })
      }, typewrite);
  
      return () => ctx.revert();
   });

  

  return (
    <>
    <Meta />
    <Container large>
      <section className={styles.fvArea}>
        <div className={styles.topTitle}>
          <h1 className={styles.hero_title} ref={typewrite}><span>E</span><span>n</span><span>g</span><span>i</span><span>n</span><span>e</span><span>e</span><span>i</span><span>n</span><span>g</span><wbr/><br className={styles.s_none}/><span>×</span><wbr/><br className={styles.s_none}/><span>D</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span><br className={styles.s_none}/><span>×</span><wbr/><br className={styles.s_none}/><span>T</span><span>o</span><span>w</span><span>n</span></h1>
         
          <h4 className={styles.subtitles} ><span>ー</span><span>ま</span><span>ち</span><span>に</span><span>ひ</span><span>も</span><span>づ</span><span>く</span><span>も</span><span>の</span><span>を</span><br className={styles.s_none}/><span>デ</span><span>ザ</span><span>イ</span><span>ン</span><span>し</span><span>て</span><span>、</span><br className={styles.m_none}/><span>魅</span><span>力</span><span>を</span><span>伝</span><span>え</span><span>る</span><span>ー</span></h4>
        </div>
        <div>
        　<MVSwiper />
        </div>
        <div className={styles.canvasPoition}>
          <CANVAS />
        </div>
      </section>
    </Container>

    <MeSetion linkOn/>

    <section className={styles.padding}>
      <Container>
          <Hero
            title="WORKS"
            subtitle=""
          />
          <Image
              src={topwork}
              alt=""
              layout="responsive"
              priority
              />
          <READMORE url="/work" />
      </Container>
    </section>
    <DNUSetion linkOn/>
  </>
  )
}

