
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
              <p className={styles.textleftFade}>
              進藤雄太朗です。<br/>Webエンジニアをしています。<br/>
              名古屋のベンチャー広告代理店にて、<br/>大手企業のHPを多数実装してきました。<br/>
              また、京都芸術大学通信教育部にて<br/>グラフィックデザインも勉強中。
              </p>
             
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
