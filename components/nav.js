import Link from 'next/link'
import styles from 'styles/scss/nav.module.scss'
import { useState } from 'react'

export default function Nav(){
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
        @media (max-width: 767px) {
        body {
        overflow: hidden;
        position: fixed;
        width: 100%;
        }
        }
        `}
        </style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/me/">
            <a onClick={closeNav}>ME</a>
          </Link>
        </li>
        <li>
          <Link href="/work/">
            <a onClick={closeNav}>WORKS</a>
          </Link>
        </li>
        <li>
          <Link href="/other/">
            <a onClick={closeNav}>OTHER</a>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
}