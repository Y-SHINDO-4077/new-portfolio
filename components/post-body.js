import styles from 'styles/scss/post-body.module.scss'
export default function PostBody({ children }) {
  return (
    <div className={styles.stack}>
    {children}
    </div>
  )
}
