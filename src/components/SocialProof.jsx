import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SocialProof = () => {
  return (
    <Section>
      <Container>
        <TrustedBy>Trusted by professionals from companies like...</TrustedBy>
        <LogoGrid>
          <CompanyLogo>Google</CompanyLogo>
          <CompanyLogo>Microsoft</CompanyLogo>
          <CompanyLogo>Amazon</CompanyLogo>
        </LogoGrid>
        <TestimonialGrid>
          <Testimonial>
            <Quote>"This platform transformed how I use AI in my daily work."</Quote>
            <Author>Sarah J. - Product Manager</Author>
          </Testimonial>
          <Testimonial>
            <Quote>"The personalized recommendations were spot-on."</Quote>
            <Author>Mike R. - Software Engineer</Author>
          </Testimonial>
        </TestimonialGrid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 4rem 2rem;
  background: var(--background);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TrustedBy = styled.h3`
  text-align: center;
  color: var(--text);
  opacity: 0.8;
  margin-bottom: 2rem;
`

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  justify-items: center;
`

const CompanyLogo = styled.div`
  color: var(--text);
  opacity: 0.6;
  font-weight: 600;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const Testimonial = styled(motion.div)`
  padding: 2rem;
  background: var(--gray-100);
  border-radius: 8px;
  text-align: center;
`

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`

const Author = styled.p`
  font-weight: 600;
  color: var(--primary);
`

export default SocialProof
