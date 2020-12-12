import React from 'react'
import Helmet from 'react-helmet'

const SEO_DATA = {
  description: 'Senior application engineer',
  title: 'Zoltan Papp',
  url: '',
  author: 'Zoltan Papp',
  keywords: [
    'Available bluetooth consultant',
    'Available electronics engineer',
    'Alectronics engineer',
    'IoT consultant',
    'Telecommunications engineer',
    'BLE',
    'Bluetooth regulations',
    'ETSI',
    'ETSI regulations',
    'Electronincs engineer Europe',
    'Freelance electronics engineer',
    'Radio connectivity consultant',
    'Bluetooth engineer',
    'Bluetooth consultant',
    'Bluetooth regulations consultant',
    'Startup IoT',
    'Startup bluetooth consultant',
    'Startup radiofrequency consultant',
    'Agilent Vee engineer',
    'RF instrumentation engineer',
    'Baseband signal processing',
    'Matlab engineer',
    'Matlab consultant',
    'Labwork engineer',
  ],
  img: '',
  twitterId: '',
  facebookId: '',
}

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="./static/fonts/Darker_Grotesque/darker-grotesque-v2-latin-500.woff2"
        crossorigin
      />

      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="./static/fonts/Darker_Grotesque/darker-grotesque-v2-latin-800.woff2"
        crossorigin
      />
    </Helmet>
  )
}

export default SEO
