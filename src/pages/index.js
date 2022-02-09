import React from 'react'
import { graphql } from 'gatsby'
import Amplify from 'aws-amplify'
import styled from 'styled-components'
import config from '../aws-exports'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

Amplify.configure(config)

const HomePageGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 60% 40%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

function IndexPage({ data }) {
  return (
    <>
      <HomePageGrid>
        <About />
        <Projects images={data} />
      </HomePageGrid>
    </>
  )
}

export const query = graphql`
  query {
    twitchAsk: file(relativePath: { eq: "twitchAsk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mtwitchAsk: file(relativePath: { eq: "questionAnswer.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skatePark: file(relativePath: { eq: "skatePark.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mskatepark: file(relativePath: { eq: "mskatepark.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
        fluid(maxWidth: 450, maxHeight: 350) {
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
