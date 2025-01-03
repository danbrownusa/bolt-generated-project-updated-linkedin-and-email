import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LeadForm from './LeadForm'

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <Content>
        <TextContent
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>AI-Powered Growth</Badge>
          <Title>Discover Your Personal AI Potential</Title>
          <Subtitle>Get custom AI recommendations based on your professional experience</Subtitle>
          <Description>
            Unlock the power of AI tailored to your specific needs. Our platform analyzes your professional background to provide personalized AI solutions that can transform your workflow and boost your productivity.
          </Description>
          <Stats>
            <StatItem>
              <StatNumber>93%</StatNumber>
              <StatLabel>Productivity Boost</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10k+</StatNumber>
              <StatLabel>Professionals</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>AI Tools</StatLabel>
            </StatItem>
          </Stats>
        </TextContent>
        <FormContainer
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LeadForm />
        </FormContainer>
      </Content>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  background: var(--gray-50);
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(66, 153, 225, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%);
  z-index: 0;
`

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--gradient);
  color: white;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`

const TextContent = styled.div`
  max-width: 540px;
`

const Title = styled.h1`
  font-size: 3.5rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 1.5rem;
  opacity: 0.9;
`

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--text);
  opacity: 0.8;
  margin-bottom: 2rem;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

const StatItem = styled.div`
  text-align: left;
`

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text);
  opacity: 0.8;
`

const FormContainer = styled.div`
  background: var(--background);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
`

export default Hero
