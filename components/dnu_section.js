
import styles from 'styles/scss/dnusection.module.scss'
import Hero from './hero'
import Container from './container'
import READMORE from './readmore'
import Image from 'next/image'
import dmask from 'images/dnu_mask.webp'

export default function DNUSetion({linkOn = false }) {
  return (
    <>
    <section className={styles.dnu__section}>
      <Container>
        <div className={styles.t_center}>
          <Hero
                title="DNU"
                subtitle=""
          />
        </div>
        <div className={styles.dnu__flex__area}>
            <div className={styles.flex__left}>
              <h3>I have been involved with the Dai-Nagoya University since 2017 when I was enrolled at the university.
I would like to introduce my activities.
              </h3>
              <h5>
              2017年の大学在籍時より、<br/>
大ナゴヤ大学に関わり続けています。<br/>
私の活動を紹介します。
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
          <READMORE url="/dnu"/>
        }
      </Container>
    </section>
    </>
  )
}
