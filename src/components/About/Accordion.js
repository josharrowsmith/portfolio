import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const accordionIds = [
  {
    id: 0,
    title: 'Frontend',
    results: ['React', 'Node.js', 'Gatsby'],
  },
  {
    id: 1,
    title: 'Backend',
    results: ['other stuff', 'cool', 'yes'],
  },
  {
    id: 2,
    title: 'Mobile',
    results: ['other stuff', 'cool', 'yes'],
  },
  {
    id: 3,
    title: 'Test',
    results: ['other stuff', 'cool', 'yes'],
  },
  {
    id: 4,
    title: 'Other stuff',
    results: ['other stuff', 'cool', 'yes'],
  },
]

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2.5rem;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: black;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-transform: lowercase;
`

const AccordionSetup = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? 'auto' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export const Accordion = () => {
  const [expanded, setExpanded] = useState(0)
  return (
    <>
      {accordionIds.map((details, index) => (
        <AccordionSetup
          key={index}
          details={details}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </>
  )
}
