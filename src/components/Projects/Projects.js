import React from 'react'
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
  console.log(data)
  return (
    <ProjectsSection>
      <Container>
        <DragSlider>
          <FlexItem width={300}>
            <AssetContainer>
              <StyledImage
                fluid={data.images.skatePark.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
              <ProjectContainer>
                <ProjectName>SOTI Skatepark App</ProjectName>
                <Description>Find skateparks near you</Description>
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
          <FlexItem width={300}>
            <AssetContainer>
              <StyledImage
                fluid={data.images.twitch.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
              <ProjectContainer>
                <ProjectName>SOTI Skatepark App</ProjectName>
                <Description>Find skateparks near you</Description>
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
          <FlexItem width={300}>
            <AssetContainer>
              <StyledImage
                fluid={data.images.hangMan.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
              <ProjectContainer>
                <ProjectName>SOTI Skatepark App</ProjectName>
                <Description>Find skateparks near you</Description>
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
          <FlexItem width={300}>
            <AssetContainer>
              <StyledImage
                fluid={data.images.parks.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
              <ProjectContainer>
                <ProjectName>SOTI Skatepark App</ProjectName>
                <Description>Find skateparks near you</Description>
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
          <FlexItem width={300}>
            <AssetContainer>
              <StyledImage
                fluid={data.images.faceOff.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'cover',
                }}
              />
              <ProjectContainer>
                <ProjectName>SOTI Skatepark App</ProjectName>
                <Description>Find skateparks near you</Description>
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
        </DragSlider>
      </Container>
      <DragMe>Drag Me</DragMe>
    </ProjectsSection>
  )
}

export default Projects
