import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from 'react-use'
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

const ContentStyles = styled.div`
  min-height: calc(100vh - 40px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 800px;
`
export default function Layout({ children }) {
  const { height } = useWindowSize()
  return (
    <ThemeProvider>
      {/* {height < 830 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          Not ready
        </div>
      ) : ( */}
      <>
        <SEO metaData="hey" />
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
      {/* )} */}
    </ThemeProvider>
  )
}
