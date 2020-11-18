import React from 'react'
import styled from 'styled-components'
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
export const DragMe = styled.h1`
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

const Projects = () => (
  <ProjectsSection>
    <Container>
      <DragSlider>
        {[...Array(5).keys()].map((item, key) => (
          <FlexItem key={key} width={300}>
            <h1>hey man</h1>
          </FlexItem>
        ))}
      </DragSlider>
    </Container>
    <DragMe>Drag Me</DragMe>
  </ProjectsSection>
)

export default Projects
