
import styles from '../styles/scss/contentbody.module.scss'

export default function ContentBody({Year,heading4,heading5}) {
  return (
    <>
      <h3>{Year}</h3>
      <h4 className={styles.heading4}>{heading4}</h4>
      <h5>{heading5}</h5>
    </>
  )
}
