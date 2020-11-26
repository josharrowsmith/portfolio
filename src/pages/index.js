import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
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
  console.log(data)
  return (
    <HomePageGrid>
      <About />
      <Projects images={data} />
    </HomePageGrid>
  )
}

export const query = graphql`
  query {
    skatePark: file(relativePath: { eq: "skatePark.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twitch: file(relativePath: { eq: "twitch.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hangMan: file(relativePath: { eq: "hangMan.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parks: file(relativePath: { eq: "parks.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    faceOff: file(relativePath: { eq: "faceOff.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
