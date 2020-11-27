import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useWindowSize, useMouse } from 'react-use'
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

export default function Layout({ children, data }) {
  const [cursorHovered, setCursorHovered] = useState(false)
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)
  const { height } = useWindowSize()

  return (
    <ThemeProvider>
      {height < 830 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <h1>Its not ready</h1>
        </div>
      ) : (
        <>
          <GlobalStyles />
          <Typography />
          <>
            <Nav setCursorHovered={setCursorHovered} />
            <ContentStyles>{children}</ContentStyles>
          </>
          <Cursor
            initial={{ x: -100 }}
            animate={{
              x: -16,
              y: docY - 16,
              scale: cursorHovered ? 1.2 : 1,
              opacity: cursorHovered ? 0.8 : 0,
            }}
            transition={{
              ease: 'linear',
              duration: 0.2,
            }}
          />
        </>
      )}
    </ThemeProvider>
  )
}
