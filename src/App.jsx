import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Premium from './components/Premium'
import Benefits from './components/Benefits'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <SocialProof />
        <Features />
        <Premium />
        <Benefits />
        <CallToAction />
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  margin-top: 80px; // Account for fixed header
`

export default App
