
import styles from '../styles/scss/readmore.module.scss'



export default function READMORE({url,none = false}) {
  return (
    <div className={styles.readmore}>
      <a href={url}>
        <span>READ MORE</span>
      </a>
    </div>
  )
}
