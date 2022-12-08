import styles from 'styles/scss/post-header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({ title, en_title,productYear,role }) {
  return (
  <div className={styles.stack}>
    <div className={styles.workTitle}>WORKS</div>
    <h1 className={styles.title}>{en_title}</h1>
    <h2 className={styles.subtitle}>{title}</h2>
    <div className={styles.detail_data}>
      {productYear && <span>{productYear.slice(0, 4)}</span> }
      {role && <span>{role}</span>}
    </div>
  </div>
  )
}