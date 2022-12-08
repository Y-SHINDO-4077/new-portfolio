
import styles from '../styles/scss/policy_section.module.scss'
import Container from './container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ReactElement, useEffect } from 'react'




export default function PolicySetion({title,en__content,ja__content}) {
  useEffect(() => {  

    gsap.registerPlugin(ScrollTrigger);
    if (process.browser) {
      gsap.utils.toArray(".policy_section_t__left__TBrhy,.policy_section_en__content__HtHiD,.policy_section_ja__content__6YMz7").forEach(function(target) {
        gsap.fromTo(target, {
          scrollTrigger: {
            trigger: target,
            start: "top top",
            toggleActions: "restart none none none",
          },
          opacity: 0,
          yPercent: 50,
        },{
          scrollTrigger: {
            trigger: target,
            start: "bottom bottom",
            toggleActions: "restart none none none",
          },
          opacity: 1,
          yPercent: 0,

        });
    });
    }
  })

  return (
    <>
    <section>
      <Container>
          <h2 className={styles.t__left}>{title}</h2>
          <div className={styles.en__content}>
            <h4>{en__content}</h4>
          </div>
          <div className={styles.ja__content}>
            <h5>{ja__content}</h5>
          </div>
      </Container>
    </section>
    </>
  )
}
