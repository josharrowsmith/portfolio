import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/layout'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  --columns: 2;
  grid-template-columns: 60% 40%;
  @media (max-width: 800px) {
    --columns: 1;
  }
  height: calc(100vh - 4rem);
`
const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`

function IndexPage() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  return (
    <Layout>
      <Cursor
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <HomePageGrid>
        <About />
        <Projects />
      </HomePageGrid>
    </Layout>
  )
}

export default IndexPage
