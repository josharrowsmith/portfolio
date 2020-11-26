import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useWindowSize } from 'react-use'
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

const Parent = props => {
  const { children } = props

  const childrenWithExtraProp = React.Children.map(children, child =>
    React.cloneElement(child, { propsToPass: 'toChildren' })
  )

  return <div>{childrenWithExtraProp}</div>
}

export default function Layout({ children }) {
  const [cursorHovered, setCursorHovered] = useState(false)
  const { x, y } = useMousePosition()
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
            <Nav setCursorHovered={setCursorHovered} x={x} y={y} />
            <Parent>{children}</Parent>
          </>
          <Cursor
            initial={{ x: -100 }}
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
        </>
      )}
    </ThemeProvider>
  )
}
