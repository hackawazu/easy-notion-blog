import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>Welcome!</h2>
        <img src="https://i.gyazo.com/ca1ac34ed5a3f4b6be1f536f2602fb70.png" />
        <p>カワズマサカズによるブログです。</p>
        <p>Have fun!</p>
        <p>
          {' '}
          <Link href="https://note.com/civictechlt">
            note
          </Link>
          もやってるよ。
        </p>
      </div>
    </div>
  </>
)

export default RootPage
