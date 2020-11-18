import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  grid-template-columns: 60% 40%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

function IndexPage() {
  return (
    <HomePageGrid>
      <About />
      <Projects />
    </HomePageGrid>
  )
}

export default IndexPage
