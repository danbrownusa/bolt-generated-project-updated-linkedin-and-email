import React from 'react'
import styled from 'styled-components'
import { FaClock, FaUserCheck, FaRocket } from 'react-icons/fa'

const Benefits = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <BenefitCard>
            <Icon><FaClock /></Icon>
            <Title>Save Time Learning</Title>
            <Description>Get up to speed with AI faster through personalized guidance.</Description>
          </BenefitCard>

          <BenefitCard>
            <Icon><FaUserCheck /></Icon>
            <Title>Personalized to Your Role</Title>
            <Description>Receive recommendations tailored to your specific profession.</Description>
          </BenefitCard>

          <BenefitCard>
            <Icon><FaRocket /></Icon>
            <Title>Real Applications</Title>
            <Description>Learn practical ways to apply AI in your daily work.</Description>
          </BenefitCard>
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 4rem 2rem;
  background: var(--gray-100);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 1rem;
`

const Title = styled.h3`
  color: var(--primary);
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: var(--text);
  opacity: 0.8;
`

export default Benefits
