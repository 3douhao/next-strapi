import '../styles/globals.css'
import { Fragment } from 'react'
import Header from '../components/Header'
import getConfig from 'next/config'
import axios from 'axios'

function MyApp ({ Component, pageProps, navigations }) {
  return (
    <Fragment>
      <Header navigations={navigations} />
      <Component {...pageProps} />
    </Fragment>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async function () {
  const { data } = await axios.get(
    `${publicRuntimeConfig.BASE_URL}/navigations`
  )
  return {
    navigations: data
  }
}

export default MyApp
