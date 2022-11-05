import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'
import styles from 'styles/scss/footer.module.scss'

export default function Footer(){
  return(
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}