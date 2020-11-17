import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Accordion } from './Accordion'
import Scroll from '../../assets/images/hire.svg'

const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  --columns: 2;
  justify-items: center;
`

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  --columns: 2;
  align-items: center;
  h1 {
    writing-mode: vertical-rl;
    align-self: center;
    justify-self: center;
    font-size: 7rem;
  }
`
const StyledScrollImage = styled(motion.img)`
  will-change: transform;
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`
const ContactGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`

const About = () => (
  <AboutMeGrid>
    <div>
      <StyledScrollImage
        src={Scroll}
        alt="Hire Me!"
        animate={{ rotate: -360 }}
        transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
      />
      <Accordion />
      <ContactGrid>
        <p>github</p>
        <p>email</p>
        <p>twiiter</p>
      </ContactGrid>
    </div>
    <AboutSection>
      <h1>Josh Arrowsmith</h1>
      <p>
        I'm a software engineer. I specialize in Front-end development which is
        building out the visual components of a website. I build interactive,
        responsive and beautiful websites through carefully crafted code and
        user-centric design. I work with technologies like HTML5, CSS3 and
        Javascript. I'm currently a freelancer and available to work.
      </p>
    </AboutSection>
  </AboutMeGrid>
)

export default About
