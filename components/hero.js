import styles from '../styles/scss/hero.module.scss'
import Image from 'next/image'
import cube from 'images/cube.jpg'

export default function Hero({ title, subtitle,imageOn = false }){
  return (
    
    <div className={styles.flexContainer}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.subtitle}> {subtitle}</h4>
      </div>
    </div>
  )
}