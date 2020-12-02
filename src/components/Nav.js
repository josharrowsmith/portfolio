import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMouse } from 'react-use'
import DarkToggle from './Toggle/DarkToggle'
import { ThemeContext } from '../context/ThemeProvider'

const NavStyles = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 2rem 0 0 0;
    margin-right: 4rem;
  }
  li {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    align-content: center;
    grid-gap: 2rem;
    margin: 1rem;
  }
  a {
    text-decoration: none;
  }
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

export default function Nav() {
  const [cursorHovered, setCursorHovered] = useState(false)
  const ref = useRef(null)
  const { elX, elY } = useMouse(ref)
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <NavStyles ref={ref}>
      <div>
        <DarkToggle />
      </div>
      <div>
        <ul>
          <motion.li
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
          </motion.li>
        </ul>
      </div>
      <Cursor
        initial={{ x: -100 }}
        animate={{
          x: elX - 16,
          y: elY - 16,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 1 : 0,
          background: colorMode === 'light' ? 'black' : 'white',
        }}
        transition={{
          ease: 'linear',
          duration: 0.2,
        }}
      />
    </NavStyles>
  )
}
