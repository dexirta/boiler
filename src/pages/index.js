import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

import Services from '@sections/Services'
import Projects from '@sections/Projects'
import Footer from '@sections/Footer'
import About from '../components/sections/About'
import '../styles/fonts.css'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Services />
    <About />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
