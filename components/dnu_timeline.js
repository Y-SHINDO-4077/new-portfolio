
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



export default function DNUTimeline(title) {
  
      

  return (
    <>
  
    <div className={styles.t_left}>
         <h2 className={styles.t__left} >DNU TIMELINE</h2>
    </div>

    <section className={styles.side_scroll}>
      <div className={styles.side_scroll_container}>
      
        <div className={styles.side_scroll_list_wrapper}>
          <ul className={styles.side_scroll_list}>
            <li className={styles.side_scroll_item}>
              <div>
                <h4>2017</h4>
                <h3>インターンシップ生となる</h3>
              </div>
                <p>大学進学で県外に出たのをきっかけに、「名古屋には何がある？」を知りたい、<br/>そういう想いが強かった私は、インターンシップ生となりました。<br/>
                  <a href="https://dai-nagoya.univnet.jp/subjects/detail/418" target="_blank" className={styles.hover}>鶴舞公園の建造物に関する授業</a>を課題として実施しました。反響がありました。
                </p>
              
            </li>
            <li className={styles.side_scroll_item}>
               <div>
                <h4>2018</h4>
                <h3>総務メンバーとなる</h3>
               </div>
                <p>社会人になった後も、総務メンバーとして活動に参加。ボランティアスタッフ説明会を実施しました。</p>
              
            </li>
            <li className={styles.side_scroll_item}>
                <div>
                    <h4>2019</h4>
                    <h3>授業コーディネーターとして企画する</h3>
                </div>
                <p><a href="https://dai-nagoya.univnet.jp/subjects/detail/474" target="_blank" className={styles.hover}>松坂屋初代当主の国際交流についての授業</a>や、<a href="https://dai-nagoya.univnet.jp/subjects/detail/492" target="_blank" className={styles.hover}>姉妹校の京都カラスマ大学とコラボ授業</a>を企画しました。</p>
            </li>
            <li className={styles.side_scroll_item}>
                <div>
                  <h4>2020</h4>
                  <h3>noteチーム立ち上げ</h3>
                </div>
                <p>ボランティアスタッフさんのことをもっと発信したいとの声があり、<br/>スタッフさんのインタビューを載せた<a href="https://note.com/dainagoya/m/m6840810430ba" target="_blank" className={styles.hover}>note</a>を作る活動を立ち上げました。<br/>校正係として現在も活動中です。</p>
            </li>
            <li className={styles.side_scroll_item}>
              <div>
                <h4>2021</h4>
                <h3>やっとかめ文化祭まちあるきなごやで企画する</h3>
              </div>
              <p>2017年よりやっとかめ大使としてお手伝いしていた<a href="https://yattokame.jp/" target="_blank" className={styles.hover}>やっとかめ文化祭</a>。犬山城マイスターの方とまちあるき企画を実施しました。</p>
            </li>
            <li className={styles.side_scroll_item}>
              <div>
                <h4>2022</h4>
                <h3>まちシル立ち上げ</h3>
              </div>
              <p>「歩くまちには何がある？」をコンセプトに、まちを歩いて発見するプロジェクト<a href="https://dai-nagoya.univnet.jp/relations/machishiru/" target="_blank" className={styles.hover}>「まちシル」</a>を立ち上げました。<br/>webサイト制作、企画や現場担当としても活動中です。</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

   
    </>
  )
}
