import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { DragSlider } from '../Slider/DragSlider'
import { Container, FlexItem } from '../Slider/Box'
import { ProjectData } from '../../assets/data/data'

const ProjectsSection = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 4rem);
  justify-content: flex-end;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: 800px) {
    justify-content: center;
    height: auto;
    overflow-y: scroll;
  }
`
const DragMe = styled.p`
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
const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
`
const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ProjectName = styled.p`
  align-self: center;
  margin-bottom: 0;
`
const Description = styled.p`
  text-align: center;
  margin: 0;
`
const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  p {
    margin: 0;
  }
`
const Languages = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  p {
    margin: 0;
  }
`

const Projects = data => {
  console.log(ProjectData)
  return (
    <ProjectsSection>
      <Container>
        <DragSlider>
          {ProjectData.map((project, i) => {
            const skatePark = data.images.skatePark.childImageSharp.fluid
            const twitch = data.images.twitch.childImageSharp.fluid
            return (
              <FlexItem>
                <AssetContainer>
                  {i === 0 && (
                    <StyledImage
                      fluid={skatePark}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {i === 1 && (
                    <StyledImage
                      fluid={twitch}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  <ProjectContainer>
                    <ProjectName>{project.name}</ProjectName>
                    <Description>{project.descrption}</Description>
                    <Links>
                      <p>github</p>
                      <p>store</p>
                    </Links>
                    <Languages>
                      <p>html</p>
                      <p>javascipt</p>
                      <p>code</p>
                    </Languages>
                  </ProjectContainer>
                </AssetContainer>
              </FlexItem>
            )
          })}
        </DragSlider>
      </Container>
      <DragMe>Drag Me</DragMe>
    </ProjectsSection>
  )
}

export default Projects
