import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <Container>
        <Logo>
          <LogoIcon>🚀</LogoIcon>
          <LogoText>AI Potential</LogoText>
        </Logo>

        <Nav>
          <NavItem href="#how-it-works">How It Works</NavItem>
          <NavItem href="#features">Features</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
          <CTAButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </Nav>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <MobileNavItem href="#how-it-works">How It Works</MobileNavItem>
              <MobileNavItem href="#features">Features</MobileNavItem>
              <MobileNavItem href="#pricing">Pricing</MobileNavItem>
              <MobileCTAButton>Get Started</MobileCTAButton>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.isScrolled ? 'var(--shadow-sm)' : 'none'};
  z-index: 1000;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoIcon = styled.span`
  font-size: 1.5rem;
`

const LogoText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary);
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.a`
  color: var(--text);
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--secondary);
  }
`

const CTAButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.2s ease;
`

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  padding: 0.5rem;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--primary);
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const MobileMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: var(--shadow-lg);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const MobileNavItem = styled.a`
  padding: 0.75rem;
  color: var(--text);
  font-weight: 500;
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: var(--gray-100);
  }
`

const MobileCTAButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  margin-top: 0.5rem;
`

export default Header
