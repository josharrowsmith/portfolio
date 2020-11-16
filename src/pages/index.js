import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  --columns: 2;
  grid-template-columns: 60% 40%;
  @media (max-width: 800px) {
    --columns: 1;
  }
  height: calc(100vh - 4rem);
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <About />
      <Projects />
    </HomePageGrid>
  </Layout>
)

export default IndexPage
