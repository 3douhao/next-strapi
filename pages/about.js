import React, { Fragment } from 'react'
import { NextSeo } from 'next-seo'

const AboutPage = () => {
  const SEO = {
    title: 'ABOUT PAGE',
    description: 'ABOUT PAGE DESCRIPTION',
    openGraph: {
      title: 'about page title in og',
      description: 'about page description in og'
    }
  }
  return (
    <Fragment>
      <NextSeo {...SEO} />
      <h3>This is the about page</h3>
    </Fragment>
  )
}

export default AboutPage
