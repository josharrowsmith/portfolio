import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`
const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #000;
  z-index: 999;
  pointer-events: none;
`

export default function Layout({ children }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = e => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Typography />
      <>
        <ContentStyles>{children}</ContentStyles>
      </>
      <Cursor
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  )
}
