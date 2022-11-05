import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from '../styles/scss/header.module.scss'

export default function Header(){
  return (
    <header >
     <Container large>
        <div className={styles.header__flex}>
          <Logo boxOn/>
          <Nav />
        </div>
     </Container>
  
    </header>
  )
}