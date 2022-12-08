
import styles from '../styles/scss/mesection.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'

import Image from 'next/image'
import dicon from 'images/dyuicon1.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ReactElement, useEffect } from 'react'

export default function MeSetion({linkOn = false}) {
  useEffect(() => {  

    gsap.registerPlugin(ScrollTrigger);
    if (process.browser) {
      gsap.utils.toArray(".mesection_textleftFade__iMgcW").forEach(function(target) {
        gsap.fromTo(target, {
          scrollTrigger: {
            trigger: target,
            start: "bottom bottom",
            toggleActions: "restart none none none",
            
          },
          opacity: 0,
          xPercent: -100,
        },{
          scrollTrigger: {
            trigger: target,
            start: "bottom bottom",
            toggleActions: "restart none none none",
           
          },
          opacity: 1,
          xPercent: 0,

        });
    });
    }
  })

  return (
    <>
   
    <section className={styles.me__section}>
      <Container>
        <div className={styles.t_center}>
          <Hero
                title="ME"
                subtitle=""
          />
        </div>
        <div className={styles.flex__area}>
            <div>
              <h4 className={styles.textleftFade}>
              進藤雄太朗です。<br/>
              Webエンジニアをしています。<br/>
              グラフィックデザイン勉強中。<br/>
              文章を書いたり、<br/>
              まちあるきの企画などもやります。
              </h4>
              <h5 className={styles.textleftFade}>
              Hello,World.<br/>
                Yutaro Shindo.<br/>
                I’m a Web Engineer.<br/>
                Studying Graphic Design.<br/>
                Writing,and <br/>
                Planing a town walk ,<br/>
                and so on… 
             
              </h5>
            </div>
            <div className={styles.s_block}>
            <Image
              src={dicon}
              alt=""
              layout="fixed"
              sizes="400px"
              priority
              />
            </div>
            <div className={styles.s_none}>
            <Image
              src={dicon}
              alt=""
              layout="responsive"
              sizes="400px"
              priority
              />
            </div>
        </div>
        
        {linkOn &&
        <READMORE url="/me"/>
        }
        
      </Container>
    </section>
    </>
  )
}
