import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import Services from '@sections/Services'
import Portfolio from '@sections/Portfolio'
import Footer from '@sections/Footer'
import About from '../components/sections/About'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Services />
    <About />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
