
import styles from '../styles/scss/timeline.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'
import { ReactElement, useEffect ,useRef} from 'react'


import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);


import Image from 'next/image'
import dicon from 'images/dyuicon.svg'



export default function Timeline(title) {
  

      

  return (
    <>
  
    <div className={styles.t_left}>
         <h2 className={styles.t__left} >TIMELINE</h2>
    </div>

    <section className={styles.side_scroll}>
      <div className={styles.side_scroll_container}>
      
        <div className={styles.side_scroll_list_wrapper}>
          <ul className={styles.side_scroll_list}>
            <li className={styles.side_scroll_item}>
              
                <h4>1994</h4>
                <h3>誕生</h3>
                {/* <p>Born</p> */}
              
            </li>
            <li className={styles.side_scroll_item}>
               
                <h4>2018</h4>
                <h3>同志社大学文学部文化史学科日本史専攻卒業</h3>
                {/* <p>Graduated from Doshisha University,Cultural history.</p> */}
              
            </li>
            <li className={styles.side_scroll_item}>
             
                <h4>2018</h4>
                <h3>業務システム会社でプログラマーとして働く</h3>
                {/* <p>Work as a Developer at a systems Company.</p> */}
            </li>
            <li className={styles.side_scroll_item}>
                <h4>2020</h4>
                <h3>Web制作会社でフロントエンジニアとして働く</h3>
                {/* <p>Work as a Front-end enginner at a website production. </p> */}
            </li>
            <li className={styles.side_scroll_item}>
              <h4>2022</h4>
              <h3>京都芸術大学通信教育部デザイン学科<br/>グラフィックデザインコースに入学</h3>
              {/* <p>Entered Kyoto Univ. of the Arts, Graphic design. </p> */}
            </li>
          </ul>
        </div>
      </div>
    </section>

   
    </>
  )
}
