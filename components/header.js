import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import Toggle from 'components/toggle'
import Social from 'components/social'

import styles from '../styles/scss/header.module.scss'

export default function Header(){
  return (
    <header className={styles.header__wrap}>
     
        <div className={styles.header__flex}>
          <Logo boxOn/>
          <div className={styles.header__flex__nav }>
            <div className={styles.header__nav }>
              <Nav />
            </div>
            <Social />
            <Toggle />
          </div>
        </div>
     
  
    </header>
  )
}