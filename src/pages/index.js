import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
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

function IndexPage({ data }) {
  console.log(data.work)
  return (
    <HomePageGrid>
      <About />
      <Img fixed={data.work.childImageSharp.fixed} />
      {/* <Projects /> */}
    </HomePageGrid>
  )
}

export const query = graphql`
  query {
    work: file(relativePath: { eq: "work.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
