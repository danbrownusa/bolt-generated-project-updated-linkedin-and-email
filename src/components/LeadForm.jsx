import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    linkedin: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.linkedin.includes('linkedin.com/')) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      console.log('Form submitted:', formData)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <FormTitle>Get Your AI Report</FormTitle>
        <FormSubtitle>Free personalized insights delivered to your inbox</FormSubtitle>
      </FormHeader>

      <InputGroup>
        <Label htmlFor="email">Email Address</Label>
        <InputWrapper>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            placeholder="john@company.com"
          />
          <InputIcon>✉️</InputIcon>
        </InputWrapper>
        <AnimatePresence>
          {errors.email && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.email}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
        <InputWrapper>
          <Input
            type="url"
            id="linkedin"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            error={errors.linkedin}
            placeholder="linkedin.com/in/yourprofile"
          />
          <InputIcon>👤</InputIcon>
        </InputWrapper>
        <AnimatePresence>
          {errors.linkedin && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.linkedin}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </InputGroup>

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        as={motion.button}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <ButtonContent>
            <Spinner /> Processing...
          </ButtonContent>
        ) : (
          <ButtonContent>
            Get My AI Report <span>→</span>
          </ButtonContent>
        )}
      </SubmitButton>

      <SecurityNote>
        🔒 Your data is secure and never shared
      </SecurityNote>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`

const FormTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`

const FormSubtitle = styled.p`
  color: var(--gray-400);
  font-size: 0.875rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 500;
  color: var(--text);
  font-size: 0.875rem;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.5rem;
  border: 2px solid ${props => props.error ? 'var(--error)' : 'var(--gray-200)'};
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: all 0.2s ease;
  background: ${props => props.error ? 'rgba(245, 101, 101, 0.05)' : 'white'};

  &:focus {
    outline: none;
    border-color: var(--secondary);
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  &::placeholder {
    color: var(--gray-400);
  }
`

const InputIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
`

const ErrorMessage = styled(motion.span)`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const SubmitButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 1rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  span {
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) span {
    transform: translateX(4px);
  }
`

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const SecurityNote = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--gray-400);
`

export default LeadForm
