import styles from 'styles/scss/social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faTwitter,
faFacebookF,
faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import login from 'images/login.svg'

export default function Social({ iconSize = 'initial' }) {
  return (
  <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      {/* <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li> */}
      {/* <li>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li> */}
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
      {/* <li>
        <a href="/login/">
        <figure >
          <Image className="" src={login} alt="" layout="fixed"
            width={21}
            height={29}
          priority/>
        </figure>
          <span className="sr-only">login</span>
        </a>
      </li> */}
  </ul>
  )
}
