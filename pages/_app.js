import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import getConfig from 'next/config'
import axios from 'axios'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
// function MyApp ({ Component, pageProps, navigations }) {
//   return (
//     <Fragment>
//       <Header navigations={navigations} />
//       <Component {...pageProps} />
//     </Fragment>
//   )
// }
export default function MyApp (props) {
  const { Component, pageProps, navigations } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Header navigations={navigations} />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
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
