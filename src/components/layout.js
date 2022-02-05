import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '../context/ThemeProvider'
import SEO from './SEO/SEO'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
}

const ContentStyles = styled.div``
export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <>
        <SEO />
        <GlobalStyles />
        <Typography />
        <>
          <Nav />
          <AnimatePresence>
            <motion.main
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <ContentStyles>{children}</ContentStyles>
            </motion.main>
          </AnimatePresence>
        </>
      </>
    </ThemeProvider>
  )
}
