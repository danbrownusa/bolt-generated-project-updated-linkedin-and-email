import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Column>
            <Title>AI Potential</Title>
            <Text>Empowering professionals with personalized AI solutions.</Text>
          </Column>

          <Column>
            <Title>Contact</Title>
            <Link href="mailto:hello@aipotential.com">hello@aipotential.com</Link>
          </Column>

          <Column>
            <Title>Legal</Title>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </Column>

          <Column>
            <Title>Social</Title>
            <SocialLinks>
              <SocialLink href="#"><FaTwitter /></SocialLink>
              <SocialLink href="#"><FaLinkedin /></SocialLink>
              <SocialLink href="#"><FaGithub /></SocialLink>
            </SocialLinks>
          </Column>
        </Grid>
        <Copyright>© 2023 AI Potential. All rights reserved.</Copyright>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: var(--primary);
  color: white;
  padding: 4rem 2rem 2rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`

const Text = styled.p`
  opacity: 0.8;
`

const Link = styled.a`
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled.a`
  font-size: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
`

export default Footer
