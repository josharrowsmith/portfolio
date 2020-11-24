import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMousePosition from './hooks/useMousePosition'
import { ThemeProvider } from '../context/ThemeProvider'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'

const ContentStyles = styled.div`
  padding: 2rem 4rem 4rem 4rem;
  /* height: 100vh; */
`
const Cursor = styled(motion.div)`
  cursor: pointer;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 10;
  top: 0;
  background: var(--color-text);
  border-radius: 100%;
  pointer-events: none;
`

export default function Layout({ children }) {
  const [cursorHovered, setCursorHovered] = useState(false)
  const { x, y } = useMousePosition()

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Typography />
      <>
        <Nav setCursorHovered={setCursorHovered} x={x} y={y} />
        <ContentStyles>{children}</ContentStyles>
      </>
      <Cursor
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        transition={{
          ease: 'linear',
          duration: 0.2,
        }}
      />
    </ThemeProvider>
  )
}
