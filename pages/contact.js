import React, { Fragment } from 'react'
import { NextSeo } from 'next-seo'

const Contact = () => {
  const SEO = {
    title: 'Contact PAGE',
    description: 'Contact PAGE DESCRIPTION',
    openGraph: {
      title: 'contact page title in og',
      description: 'contact page description in og'
    }
  }
  return (
    <Fragment>
      <NextSeo {...SEO} />
      <h3>Contact us here</h3>
    </Fragment>
  )
}

export default Contact
