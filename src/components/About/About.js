import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useMouse } from 'react-use'
import { Accordion } from './Accordion'
import Scroll from '../../assets/images/hire.svg'

const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  align-items: center;
  h1 {
    writing-mode: vertical-rl;
    align-self: center;
    justify-self: center;
    font-size: 7rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-start: 1;
    h1 {
      writing-mode: horizontal-tb;
      font-size: inherit;
    }
  }
`
const StyledScrollImage = styled(motion.img)`
  will-change: transform;
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
  filter: var(--color-logo);
  @media (max-width: 800px) {
    display: none;
  }
`

const ContactGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`
const Cursor = styled(motion.div)`
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: var(--color-text);
  /* border: 1px var(--color-text) solid; */
  border-radius: 100%;
  pointer-events: none;
  mix-blend-mode: difference;
`

const About = () => {
  const [cursorHovered, setCursorHovered] = useState(false)
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)
  return (
    <AboutMeGrid ref={ref}>
      <div>
        <StyledScrollImage
          src={Scroll}
          alt="Hire Me!"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
        />
        <Accordion />
        <ContactGrid>
          <motion.p
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            github
          </motion.p>
          <motion.p
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            email
          </motion.p>
          <motion.p
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            twiiter
          </motion.p>
        </ContactGrid>
      </div>
      <AboutSection>
        <h1>Josh Arrowsmith</h1>
        <p>
          I'm a software engineer. I specialize in Front-end development which
          is building out the visual components of a website. I build
          interactive, responsive and beautiful websites through carefully
          crafted code and user-centric design. I work with technologies like
          <motion.span
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            {' '}
            React Native
          </motion.span>
          , CSS3 and Javascript. I'm currently a freelancer and available to
          work.
        </p>
      </AboutSection>
      <Cursor
        animate={{
          x: docX - 50,
          y: docY - 16,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 1 : 0,
        }}
        transition={{
          ease: 'linear',
          duration: 0.2,
        }}
      />
    </AboutMeGrid>
  )
}

export default About
