import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from 'react-use'
import {
  ThemeProvider,
  TransitionContext,
  TransitionContextProvider,
} from '../context/ThemeProvider'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'
import useDoubleClick from './hooks/useDoubleClick'

export const parentVariants = {
  visible: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  hidden: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
}
export const childVariants = {
  visible: {
    scaleX: 1,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
  hidden: {
    scaleX: 0,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
}
export const childVariantHead = {
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 1.2,
    },
  },
  hidden: {
    scale: 0,
    rotate: 15,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.4,
    },
  },
}

const PageTransition = () => {
  const { transition } = useContext(TransitionContext)
  const [playState, setPlayState] = useState(transition)
  useEffect(() => {
    setPlayState(transition)
  }, [transition])
  return (
    <AnimatePresence exitBeforeEnter>
      {playState && (
        <motion.div
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          key={location && location.pathname ? location.pathname : 'error'}
          aria-hidden
          css={css`
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 11;
            pointer-events: none;
            transform-origin: left;
            > div {
              height: 25vh;
              margin-top: -5vh;
              width: 100vw;
              background-color: var(--color-text);
              transform-origin: right;
            }
            > figure {
              position: fixed;
              top: calc(50% - 8rem);
              left: calc(50% - 8rem);
              transform-origin: center;
              width: 16rem;
              height: 16rem;
              z-index: 12;
              padding: 0;
              margin: 0;
              svg {
                width: 100%;
                height: 100%;
              }
            }
          `}
        >
          <motion.div variants={childVariants} exit="visible" key={0}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit="visible" key={1}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit="visible" key={2}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit="visible" key={3}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit="visible" key={4}>
            {' '}
          </motion.div>
          <motion.figure variants={childVariantHead} exit="visible" key={5}>
            <h1 style={{ color: '#000' }}>hey</h1>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ContentStyles = styled.div`
  padding: 2rem 4rem 4rem 4rem;
  height: 100vh;
`
export default function Layout({ children }) {
  const { height } = useWindowSize()
  function doStuff() {
    console.log('yes')
  }
  const [refCallback] = useDoubleClick(doStuff)

  return (
    <ThemeProvider>
      <TransitionContextProvider>
        <GlobalStyles />
        <Typography />
        <>
          <Nav />
          <ContentStyles ref={refCallback}>{children}</ContentStyles>
        </>
        <PageTransition />
      </TransitionContextProvider>
    </ThemeProvider>
  )
}
