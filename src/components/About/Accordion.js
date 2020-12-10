import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import mix from 'mix-color'

const accordionIds = [
  {
    id: 0,
    title: 'Frontend',
    results: [
      'react',
      'node',
      'gatsby',
      'GraphQL',
      'redux',
      'framer-motion',
      'react-spring',
      'html',
      'css',
      'javascript',
      'socket.io',
      'sass',
      'styled component',
      'webpack',
    ],
  },
  {
    id: 1,
    title: 'Backend',
    results: ['node', 'express', 'php', 'socket.io', 'rust'],
  },
  {
    id: 2,
    title: 'Mobile',
    results: ['React Naitve', 'Android', 'Kotlin', 'flutter'],
  },
  {
    id: 3,
    title: 'CMS',
    results: ['shopify', 'wordpress', 'woocommerce', 'neto'],
  },
  {
    id: 4,
    title: 'Web Services',
    results: ['google cloud', 'heroku', 'netlify', 'firebase'],
  },
]

const AccordionHeader = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
`

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: black;
    transition: all 0.1s ease-in-out;
    background: var(--color-text);
  }
`

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-transform: lowercase;
  margin: 0.5rem 0;
  span {
    font-size: 1.5rem;
    padding: 5px;
    margin-bottom: 0.5rem;
  }
`

const AccordionSetup = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)

  const tags = Object.keys(details.results).map(
    result => details.results[result]
  )

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
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              color: mix('#00F260', '#0575E6', `${index / tags.length}`),
              borderColor: mix('#00F260', '#0575E6', `${index / tags.length}`),
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '10px',
            }}
          >
            {tag}
          </span>
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
