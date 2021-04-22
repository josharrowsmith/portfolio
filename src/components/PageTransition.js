import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { TransitionContext } from '../context/ThemeProvider'
import Hire from '../assets/images/hire.svg'

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
    rotate: 90,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.4,
    },
  },
}

const PageTransitions = styled(motion.div)`
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
    top: calc(50% - 15rem);
    left: calc(50% - 15rem);
    transform-origin: center;
    width: 30rem;
    height: 30rem;
    z-index: 12;
    padding: 0;
    margin: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`

const HireMe = styled.img`
  filter: var(--color-background);
`

export const PageTransition = () => {
  const { transition } = useContext(TransitionContext)
  const [playState, setPlayState] = useState(transition)
  useEffect(() => {
    setPlayState(transition)
  }, [transition])
  return (
    <AnimatePresence exitBeforeEnter>
      {playState && (
        <PageTransitions
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          aria-hidden
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
            <HireMe src={Hire} alt="Hire Me!" />
          </motion.figure>
        </PageTransitions>
      )}
    </AnimatePresence>
  )
}
