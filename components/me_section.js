
import styles from '../styles/scss/mesection.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'

import Image from 'next/image'
import dicon from 'images/dyuicon.svg'

export default function MeSetion({linkOn = false}) {
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
              <h3>Hello,World.<br/>
                Yutaro Shindo.<br/>
                I’m a Web Engineer.<br/>
                Studying Graphic Design.<br/>
                Writing,and <br/>
                Planing a town walk ,<br/>
                and so on… 
              </h3>
              <h5>
              進藤雄太朗です。<br/>
              Webエンジニアをしています。<br/>
              グラフィックデザイン勉強中。<br/>
              文章を書いたり、まちあるきの企画などもやります。
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
