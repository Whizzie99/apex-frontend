import Head from 'next/head'
import Layout from '../components/Layout'
import { GlobalStyle } from '../styles/globals'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHistory, faTrophy, faPhoneAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
library.add(fab, faHistory, faTrophy, faPhoneAlt, faUserCircle)



function MyApp({ Component, pageProps }) {

  

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&display=swap" />
    </Head>
    <Layout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
