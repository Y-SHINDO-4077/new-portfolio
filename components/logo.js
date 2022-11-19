
import Link from 'next/link'
import styles from '../styles/scss/logo.module.scss'

export default function Logo({boxOn = false}){
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>DO</a>
    </Link>
  )
}