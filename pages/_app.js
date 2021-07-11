import '../styles/globals.scss'
import '../styles/normalize.scss'

function MyApp({ Component, pageProps }) {
  return <div className="app"><Component {...pageProps} /></div>
}

export default MyApp
