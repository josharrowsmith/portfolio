import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useMouse } from 'react-use'
import {
  FaGithub,
  FaTwitterSquare,
  FaMailBulk,
  FaLinkedin,
  FaGooglePlay,
} from 'react-icons/fa'
import { Accordion } from './Accordion'
import Scroll from '../../assets/images/hire.svg'
import { ThemeContext } from '../../context/ThemeProvider'
import ExplosionScren from '../Explosion/ExplosionScren'

const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 350px 1fr;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto;
    justify-content: center;
    align-items: center;
  }
`
const StyledScrollImage = styled(motion.img)`
  will-change: transform;
  width: 300px;
  height: 300px;
  /* margin-bottom: 2rem; */
  filter: var(--color-logo);
  @media (max-width: 800px) {
    grid-row: 1;
  }
`
const Infromation = styled.div`
  grid-row: 2;
  grid-column: 1;
  @media (max-width: 800px) {
    grid-row: 4;
    min-width: 600px;
  }
`
const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  align-items: center;
  grid-row: 1 / 3;
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
    grid-row: 2;
    grid-template-columns: 1fr;
    h1 {
      writing-mode: horizontal-tb;
      font-size: 3.5rem;
      justify-self: flex-start;
    }
  }
`

const ContactGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-start;
  margin: 2rem 0;
  a {
    font-size: 3.2rem;
  }
  @media (max-width: 800px) {
    grid-row-start: 5;
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
      <div
        style={{
          minWidth: '300px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <StyledScrollImage
          src={Scroll}
          alt="Hire Me!"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
        />
      </div>
      <Infromation>
        <Accordion />
        <ContactGrid>
          <motion.a
            href="https://github.com/josharrowsmith"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:josh.arrowsmith12@gmail.com"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaMailBulk />
          </motion.a>
          <motion.a
            href="https://twitter.com/JoshArrowsmith9"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaTwitterSquare />
          </motion.a>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.skate.beta"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaGooglePlay />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/josh-arrowsmith-723b02164/"
            target="_blank"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <FaLinkedin />
          </motion.a>
        </ContactGrid>
        <ExplosionScren />
      </Infromation>
      <AboutSection>
        <h1>Josh Arrowsmith</h1>
        <p>
          I'm a Software engineer, I specialize in Front-end development mainly
          React and{' '}
          <motion.span
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            {' '}
            React Native
          </motion.span>
          , i have been taking a diving deep into the JamStack and serverless
          architecture using{' '}
          <motion.span
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            {' '}
            Gatsby{' '}
          </motion.span>{' '}
          and GraphQL. I am have worked at a digital agency doing Wordpress and
          Shopify development with a little Neto on the side. if you would like
          to get in contact{' '}
          <motion.span
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            @josh.arrowsmith12@gmail.com
          </motion.span>
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
