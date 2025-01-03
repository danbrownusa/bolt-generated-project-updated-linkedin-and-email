import React from 'react'
import styled from 'styled-components'
import LeadForm from './LeadForm'

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Content>
          <TextContent>
            <Title>Ready to Transform Your AI Journey?</Title>
            <Subtitle>Join professionals already using AI effectively</Subtitle>
          </TextContent>
          <FormWrapper>
            <LeadForm />
          </FormWrapper>
        </Content>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--primary);
  color: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const TextContent = styled.div`
  max-width: 540px;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
`

const FormWrapper = styled.div`
  background: var(--background);
  padding: 2rem;
  border-radius: 8px;
`

export default CallToAction
