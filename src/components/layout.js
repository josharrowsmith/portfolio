import React from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'
import { ThemeProvider } from '../context/ThemeProvider'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'

const ContentStyles = styled.div`
  padding: 2rem 4rem 4rem 4rem;
  /* height: 100vh; */
`
export default function Layout({ children }) {
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
            <Nav />
            <ContentStyles>{children}</ContentStyles>
          </>
        </>
      )}
    </ThemeProvider>
  )
}
