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
          <h1 className={styles.hero_title} ref={typewrite}><span>Y</span><span>U</span><span>T</span><span>A</span><span>R</span><span>O</span><span className={styles.s_vlock}>&nbsp;</span><br className={styles.s_none}/><span>S</span><span>H</span><span>I</span><span>N</span><span>D</span><span>O</span></h1>
         
          <h4 className={styles.subtitles} ><span>I</span><span>'</span><span>m</span><span>&nbsp;</span><span>a</span><span>&nbsp;</span><span>w</span><span>e</span><span>b</span><span>&nbsp;</span><span>E</span><span>n</span><span>g</span><span>i</span><span>n</span><span>n</span><span>e</span><span>r</span><span>,</span><br className={styles.s_none}/><span>&nbsp;</span><span>a</span><span>n</span><span>d</span><span>&nbsp;</span><span>s</span><span>o</span><span>&nbsp;</span><span>o</span><span>n</span><span>&nbsp;</span><span>...</span></h4>
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

