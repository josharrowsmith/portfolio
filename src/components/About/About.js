import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useMouse } from 'react-use'
import {
  FaGithub,
  FaTwitterSquare,
  FaMailBulk,
  FaTwitch,
  FaLinkedin,
} from 'react-icons/fa'
import { Accordion } from './Accordion'
import Scroll from '../../assets/images/hire.svg'
import { ThemeContext } from '../../context/ThemeProvider'

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

  span {
    background: linear-gradient(to right, #00f260 0%, #0575e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  gap: 2rem;
  justify-content: flex-start;
  margin: 2rem 0;
  a {
    font-size: 3.5rem;
  }
`
const Cursor = styled(motion.div)`
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 10;
  top: 0;
  border: 1px var(--color-text) solid;
  border-radius: 100%;
  pointer-events: none;
  mix-blend-mode: difference;
  cursor: none !important;
`

const About = () => {
  const [cursorHovered, setCursorHovered] = useState(false)
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)
  const { colorMode } = React.useContext(ThemeContext)
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
          <motion.a
            href="http://google.com"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaMailBulk />
          </motion.a>
          <motion.a
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaTwitterSquare />
          </motion.a>
          <motion.a
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaTwitch />
          </motion.a>
          <motion.a
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaLinkedin />
          </motion.a>
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
          background: colorMode === 'light' ? 'transparent' : 'white',
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
