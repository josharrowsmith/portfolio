import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from 'react-use'
import {
  ThemeProvider,
  TransitionContextProvider,
} from '../context/ThemeProvider'
import SEO from './SEO/SEO'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'
import { PageTransition } from './PageTransition'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <TransitionContextProvider>
        <SEO />
        <GlobalStyles />
        <Typography />
        <>
          <Nav />
          <div>{children}</div>
        </>
        <PageTransition />
      </TransitionContextProvider>
    </ThemeProvider>
  )
}
