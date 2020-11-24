import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMouse } from 'react-use'
import DarkToggle from './Toggle/DarkToggle'

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

export default function Nav({ setCursorHovered }) {
  return (
    <NavStyles>
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
    </NavStyles>
  )
}
