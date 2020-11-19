import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { DragSlider } from '../Slider/DragSlider'
import { Container, FlexItem } from '../Slider/Box'

const ProjectsSection = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 4rem);
  justify-content: flex-end;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: 800px) {
    justify-content: center;
  }
`
export const DragMe = styled.p`
  transform: rotate(90deg);
  &:before {
    content: '';
    height: 2px;
    width: 200px;
    background: var(--color-text);
    position: absolute;
    top: 50%;
    right: 100%;
    margin-right: 1rem;
  }
  &:after {
    content: '';
    height: 2px;
    width: 200px;
    background: var(--color-text);
    position: absolute;
    top: 50%;
    margin-left: 1rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`
const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`

const Projects = data => {
  console.log(data)
  return (
    <ProjectsSection>
      <Container>
        <DragSlider>
          {[...Array(5).keys()].map((item, key) => (
            <FlexItem key={key} width={300}>
              <div>
                <Img fixed={data.file.childImageSharp.fixed} />
                <p>projects name</p>
                <p>coding stuff</p>
                <p>links</p>
              </div>
            </FlexItem>
          ))}
        </DragSlider>
      </Container>
      <DragMe>Drag Me</DragMe>
    </ProjectsSection>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "work.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Projects
