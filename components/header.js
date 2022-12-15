import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import Toggle from 'components/toggle'
import Social from 'components/social'
import React, {useState, useEffect} from 'react'
import styles from '../styles/scss/header.module.scss'

export default function Header(){
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    window.scrollY > 500
      ? setIsVisible(true)
      : setIsVisible(false)
    }
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
  return (
    <header className={isVisible ? styles.header__wrap : styles.header__wraps }>
     
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