import React, { useState } from 'react'
import styled from 'styled-components'

const Premium = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <Section id="pricing">
      <Container>
        <Card>
          <Header>
            <Title>Upgrade to AI Premium</Title>
            <PriceToggle>
              <span>Monthly</span>
              <Toggle checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
              <span>Annual</span>
            </PriceToggle>
            <Price>{isAnnual ? '$190/year' : '$19/month'}</Price>
          </Header>
          <Features>
            <Feature>✓ Custom AI Learning Podcast</Feature>
            <Feature>✓ Curated AI Conversations</Feature>
            <Feature>✓ Recommended AI Tools</Feature>
          </Features>
          <Button>Buy Now</Button>
        </Card>
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

const Card = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--gray-100);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const Title = styled.h2`
  color: var(--primary);
  margin-bottom: 1rem;
`

const PriceToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const Toggle = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 60px;
  height: 30px;
  appearance: none;
  background: var(--gray-300);
  border-radius: 15px;
  cursor: pointer;

  &:checked {
    background: var(--secondary);
  }

  &::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: 0.3s;
  }

  &:checked::before {
    left: 32px;
  }
`

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
`

const Features = styled.div`
  margin: 2rem 0;
`

const Feature = styled.div`
  padding: 0.5rem 0;
  color: var(--text);
`

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--secondary);
  color: white;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: #357ABD;
  }
`

export default Premium
