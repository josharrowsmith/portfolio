import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import mix from 'mix-color'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitch, FaGooglePlay } from 'react-icons/fa'
import useDeviceDetect from '../hooks/useDeviceDetect'
import { DragSlider } from '../Slider/DragSlider'
import { Container, FlexItem } from '../Slider/Box'
import { ProjectData } from '../../assets/data/data'

const ProjectsSection = styled(motion.div)`
  display: flex;
  width: 100%;
  height: calc(100vh - 4rem);
  justify-content: flex-end;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: 900px) {
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
  @media (max-width: 1600px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  align-items: center;
  @media (max-width: 900px) {
    padding: 0;
  }
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
  width: 100%;
  @media (max-width: 900px) {
    max-width: 600px;
  }
`

const ProjectName = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  p {
    margin-bottom: 0;
    z-index: 10;
  }
`
const Description = styled.p`
  text-align: center;
  font-size: 2rem;
  @media (max-width: 900px) {
  }
`
const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-self: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  grid-column: 3/ 4;
  justify-self: flex-end;
  a {
    font-size: 3.2rem;
  }
  @media (max-width: 900px) {
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
    margin: 0;
  }
  @media (max-width: 900px) {
    gap: 0.5rem;
  }
`

const Projects = data => {
  const { isMobile } = useDeviceDetect()
  console.log(data)

  return (
    <ProjectsSection
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.8 }}
    >
      {isMobile ? (
        <ProjectContainer>
          {ProjectData.map((project, i) => {
            const mtwitchAsk = data.images.mtwitchAsk.childImageSharp.fluid
            const skatePark = data.images.skatePark.childImageSharp.fluid
            const twitch = data.images.twitch.childImageSharp.fluid
            const HangMan = data.images.hangMan.childImageSharp.fluid
            const Parks = data.images.parks.childImageSharp.fluid
            const FaceOff = data.images.faceOff.childImageSharp.fluid
            const tags = Object.keys(project.tags).map(
              fucck => project.tags[fucck]
            )
            return (
              <div style={{ marginBottom: '2rem' }}>
                <AssetContainer>
                  {i === 0 && (
                    <StyledImage
                      fluid={mtwitchAsk}
                      imgStyle={{
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {i === 1 && (
                    <StyledImage
                      fluid={skatePark}
                      imgStyle={{
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {i === 2 && (
                    <StyledImage
                      fluid={twitch}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {i === 3 && (
                    <StyledImage
                      fluid={HangMan}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {i === 4 && (
                    <StyledImage
                      style={{ width: '80%' }}
                      fluid={Parks}
                      imgStyle={{
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {i === 5 && (
                    <StyledImage
                      fluid={FaceOff}
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  )}
                </AssetContainer>
                <ProjectName>
                  <div
                    style={{
                      gridColumn: '2 / 3 ',
                      textAlign: 'center',
                    }}
                  >
                    <p>{project.name}</p>
                  </div>
                  <Links>
                    {project.github && (
                      <a href={project.github} target="_blank">
                        <FaGithub />
                      </a>
                    )}
                    {project.play && (
                      <a href={project.play} target="_blank">
                        <FaGooglePlay />
                      </a>
                    )}
                    {project.twitch && (
                      <a href={project.twitch} target="_blank">
                        <FaTwitch />
                      </a>
                    )}
                  </Links>
                </ProjectName>
                <Description>{project.descrption}</Description>
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
              </div>
            )
          })}
        </ProjectContainer>
      ) : (
        <>
          <Container>
            <DragSlider>
              {ProjectData.map((project, i) => {
                const twitchAsk = data.images.twitchAsk.childImageSharp.fluid
                const skatePark = data.images.skatePark.childImageSharp.fluid
                const twitch = data.images.twitch.childImageSharp.fluid
                const HangMan = data.images.hangMan.childImageSharp.fluid
                const Parks = data.images.parks.childImageSharp.fluid
                const FaceOff = data.images.faceOff.childImageSharp.fluid
                const tags = Object.keys(project.tags).map(
                  fucck => project.tags[fucck]
                )
                return (
                  <FlexItem key={project.id}>
                    <AssetContainer>
                      {i === 0 && (
                        <StyledImage
                          fluid={twitchAsk}
                          imgStyle={{
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      {i === 1 && (
                        <StyledImage
                          fluid={skatePark}
                          imgStyle={{
                            objectFit: 'contain',
                          }}
                        />
                      )}
                      {i === 2 && (
                        <StyledImage
                          fluid={twitch}
                          imgStyle={{
                            objectFit: 'contain',
                          }}
                        />
                      )}
                      {i === 3 && (
                        <StyledImage
                          fluid={HangMan}
                          imgStyle={{
                            objectFit: 'contain',
                          }}
                        />
                      )}
                      {i === 4 && (
                        <StyledImage
                          style={{ width: '80%' }}
                          fluid={Parks}
                          imgStyle={{
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      {i === 5 && (
                        <StyledImage
                          fluid={FaceOff}
                          imgStyle={{
                            objectFit: 'contain',
                          }}
                        />
                      )}
                      <ProjectContainer>
                        <ProjectName>
                          <div
                            style={{
                              gridColumn: '2 / 3 ',
                              textAlign: 'center',
                            }}
                          >
                            <p>{project.name}</p>
                          </div>
                          <Links>
                            {project.github && (
                              <a href={project.github} target="_blank">
                                <FaGithub />
                              </a>
                            )}
                            {project.play && (
                              <a href={project.play} target="_blank">
                                <FaGooglePlay />
                              </a>
                            )}
                            {project.twitch && (
                              <a href={project.twitch} target="_blank">
                                <FaTwitch />
                              </a>
                            )}
                          </Links>
                        </ProjectName>
                        <Description>{project.descrption}</Description>
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
        </>
      )}
    </ProjectsSection>
  )
}

export default Projects
