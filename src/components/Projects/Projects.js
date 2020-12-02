import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import mix from 'mix-color'
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
  const projects = Object.values(ProjectData).map(project => project)
  // const tags = Object.keys(projects).map(result => projects[result].tags)
  return (
    <ProjectsSection>
      <Container>
        <DragSlider>
          {projects.map((project, i) => {
            const skatePark = data.images.skatePark.childImageSharp.fluid
            const twitch = data.images.twitch.childImageSharp.fluid
            const HangMan = data.images.hangMan.childImageSharp.fluid
            const Parks = data.images.parks.childImageSharp.fluid
            const FaceOff = data.images.faceOff.childImageSharp.fluid
            return (
              <FlexItem key={project.id}>
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
                  {i === 2 && (
                    <StyledImage
                      fluid={HangMan}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {i === 3 && (
                    <StyledImage
                      fluid={Parks}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {i === 4 && (
                    <StyledImage
                      fluid={FaceOff}
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
                      <p>{project.tags}</p>
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
