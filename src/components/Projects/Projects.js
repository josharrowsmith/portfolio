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
  align-items: center;
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
    font-size: 1.5rem;
    padding: 5px;
  }
`

const Projects = data => (
  <ProjectsSection>
    <Container>
      <DragSlider>
        {ProjectData.map((project, i) => {
          const skatePark = data.images.skatePark.childImageSharp.fluid
          const twitch = data.images.twitch.childImageSharp.fluid
          const HangMan = data.images.hangMan.childImageSharp.fluid
          const Parks = data.images.parks.childImageSharp.fluid
          const FaceOff = data.images.faceOff.childImageSharp.fluid
          const tags = Object.keys(project.tags).map(
            fucck => project.tags[fucck]
          )
          return (
            <FlexItem whileTap={{ scale: 0.9 }} key={project.id}>
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
                    style={{ width: '80%' }}
                    fluid={Parks}
                    imgStyle={{
                      objectFit: 'cover',
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
                    {tags.map((tag, index) => (
                      <p
                        key={index}
                        style={{
                          color: mix(
                            '#00F260',
                            '#0575E6',
                            `${index / tags.length}`
                          ),
                          borderColor: mix(
                            '#00F260',
                            '#0575E6',
                            `${index / tags.length}`
                          ),
                          borderWidth: '2px',
                          borderStyle: 'solid',
                          borderRadius: '10px',
                        }}
                      >
                        {tag}
                      </p>
                    ))}
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

export default Projects
