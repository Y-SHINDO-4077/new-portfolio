
import styles from '../styles/scss/readmore.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ReactElement, useEffect } from 'react'


export default function READMORE({url,none = false}) {
  useEffect(() => {  

    gsap.registerPlugin(ScrollTrigger);
    if (process.browser) {
      gsap.utils.toArray(".readmore_readmore__Ri1pm").forEach(function(target) {
        gsap.fromTo(target, {
          scrollTrigger: {
            trigger: target,
            start: "top top",
            toggleActions: "restart none none none",
            // markers: true,
          },
          opacity: 0,
          xPercent: 10,
        },{
          scrollTrigger: {
            trigger: target,
            start: "bottom bottom",
            // toggleActions: "restart none none none",
            // markers: true,
          },
          opacity: 1,
          xPercent: 0,

        });
    });
    }
  })

  return (
    <div className={styles.readmore}>
      <a href={url}>
        <span>READ MORE</span>
      </a>
    </div>
  )
}
