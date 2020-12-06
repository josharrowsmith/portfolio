import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from 'react-use'
import { ThemeProvider } from '../context/ThemeProvider'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'
import useDoubleClick from './hooks/useDoubleClick'

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
  padding: 2rem 4rem 4rem 4rem;
  /* height: 100vh; */
`
export default function Layout({ children }) {
  const { height } = useWindowSize()
  function doStuff() {
    console.log('yes')
  }
  const [refCallback] = useDoubleClick(doStuff)

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
            <Nav />
            <AnimatePresence>
              <motion.main
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <ContentStyles ref={refCallback}>{children}</ContentStyles>
              </motion.main>
            </AnimatePresence>
          </>
        </>
      )}
    </ThemeProvider>
  )
}
