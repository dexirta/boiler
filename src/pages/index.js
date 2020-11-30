import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import Services from '@sections/Services'
import Brands from '@sections/Brands'
import Team from '@sections/Team'
import Portfolio from '@sections/Portfolio'
import Footer from '@sections/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Services />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
