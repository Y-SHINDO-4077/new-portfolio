
import styles from 'styles/scss/policy_section.module.scss'
import Container from './container'




export default function PolicySetion({title,en__content,ja__content}) {
  return (
    <>
    <section>
      <Container>
          <h2 className={styles.t__left}>{title}</h2>
          <div className={styles.en__content}>
            <h4>{en__content}</h4>
          </div>
          <div className={styles.ja__content}>
            <h5>{ja__content}</h5>
          </div>
      </Container>
    </section>
    </>
  )
}
