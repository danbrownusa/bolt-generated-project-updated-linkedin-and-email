import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaUserCog, FaComments, FaFileAlt } from 'react-icons/fa'

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <Section id="features">
      <Container>
        <SectionHeader>
          <Title>Powerful Features</Title>
          <Subtitle>Everything you need to master AI in your profession</Subtitle>
        </SectionHeader>

        <Grid
          as={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard
            as={motion.div}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaUserCog />
            </IconWrapper>
            <CardTitle>Personalized AI Use Cases</CardTitle>
            <Description>
              Get AI solutions tailored to your professional profile and experience level.
              Our smart algorithm analyzes your background to provide relevant recommendations.
            </Description>
            <LearnMore>
              Learn more <Arrow>→</Arrow>
            </LearnMore>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaComments />
            </IconWrapper>
            <CardTitle>Ready-to-Use Prompts</CardTitle>
            <Description>
              Start immediately with custom-crafted prompts designed for your specific needs.
              No more guessing what to ask AI.
            </Description>
            <LearnMore>
              Learn more <Arrow>→</Arrow>
            </LearnMore>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <IconWrapper>
              <FaFileAlt />
            </IconWrapper>
            <CardTitle>Real-World Examples</CardTitle>
            <Description>
              Learn from actual case studies and implementations in your field.
              See how others are successfully using AI.
            </Description>
            <LearnMore>
              Learn more <Arrow>→</Arrow>
            </LearnMore>
          </FeatureCard>
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--background);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--gray-400);
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const FeatureCard = styled.div`
  padding: 2.5rem;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
`

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--gradient);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: var(--gray-400);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const LearnMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary);
  font-weight: 600;
  cursor: pointer;
`

const Arrow = styled.span`
  transition: transform 0.2s ease;
  ${LearnMore}:hover & {
    transform: translateX(4px);
  }
`

export default Features
