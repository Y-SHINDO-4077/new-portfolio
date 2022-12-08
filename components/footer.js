import Link from 'next/link'
import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'
import styles from '../styles/scss/footer.module.scss'

export default function Footer(){
  return(
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <ul className={styles.list}>
            <li>
              <Link href="/me/">
                <a>ME</a>
              </Link>
            </li>
            <li>
              <Link href="/work/">
                <a>WORKS</a>
              </Link>
            </li>
            <li>
              <Link href="/other/">
                <a>OTHER</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <Social />
        </div>
        <p className={styles.t_center}><small className={styles.copyright}>©️ YUTARO SHINDO</small></p>
      </Container>
    </footer>
  )
}