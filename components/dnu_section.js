
import styles from '../styles/scss/dnusection.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'
import Image from 'next/image'
import dmask from 'images/dnu_photo.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ReactElement, useEffect } from 'react'

export default function DNUSetion({linkOn = false }) {
  useEffect(() => {  

    gsap.registerPlugin(ScrollTrigger);
    if (process.browser) {
      gsap.utils.toArray(".dnusection_textleftFade__Oa6_2").forEach(function(target) {
        gsap.fromTo(target, {
          scrollTrigger: {
            trigger: target,
            start: "top top",
            toggleActions: "restart none none none",
            //markers: true,
          },
          opacity: 0,
          xPercent: -100,
        },{
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "restart none none none",
            //markers: true,
          },
          opacity: 1,
          xPercent: 0,

        });
    });
    }
  })
  return (
    <>
    <section className={styles.dnu__section}>
      <Container>
        <div className={styles.t_center}>
          <Hero
                title="OTHER"
                subtitle=""
          />
        </div>
        <div className={styles.dnu__flex__area}>
            <div className={styles.flex__left}>
              <h4 className={styles.textleftFade}>
              2017年の大学在籍時より、<br/>
              大ナゴヤ大学に関わり続けています。<br/>
              私の活動を紹介します。
              </h4>
              <h5 className={styles.textleftFade}>
I have been involved with the Dai-Nagoya University since 2017 when I was enrolled at the university.
I would like to introduce my activities.
              </h5>
            </div>
            <div className={styles.dnu_image}>
              <figure className={styles.dnu_image_size}>
              <Image
                src={dmask}
                alt=""
                layout="responsive"
                sizes="(min-width: 1200px) 643px, 50vw"
                priority
                />
              </figure>
            </div>
        </div>
        {
          linkOn &&
          <READMORE url="/other"/>
        }
      </Container>
    </section>
    </>
  )
}
