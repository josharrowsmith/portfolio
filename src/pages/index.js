import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import { DragSlider } from '../components/DragSlider'
import { Container, FlexItem } from '../components/Box'
import Scroll from '../assets/images/hire.svg'

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
  height: calc(100vh - 4rem);
`
const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  --columns: 2;
`
const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  --columns: 2;
  align-items: center;
  h1 {
    writing-mode: vertical-rl;
    align-self: center;
    justify-self: center;
    font-size: 7rem;
  }
`

const Right = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`

const DragMe = styled.h1`
  transform: rotate(90deg);
  &:before {
    content: "";
    height: 2px;
    width: 200px;
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 100%;
    margin-right: 1rem;
  }
  &:after {
    content: "";
    height: 2px;
    width: 200px;
    background-color: #000;
    position: absolute;
    top: 50%;
    margin-left: 1rem;
  }
}
`
const StyledScrollImage = styled(motion.img)`
  will-change: transform;
  width: 300px;
  height: 300px;
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <AboutMeGrid>
        <div>
          <h1>hey</h1>
        </div>
        <AboutSection>
          <h1>Josh Arrowsmith</h1>
          <p>
            I'm a software engineer. I specialize in Front-end development which
            is building out the visual components of a website. I build
            interactive, responsive and beautiful websites through carefully
            crafted code and user-centric design. I work with technologies like
            HTML5, CSS3 and Javascript. I'm currently a freelancer and available
            to work.
          </p>
        </AboutSection>
      </AboutMeGrid>
      <Right>
        <Container>
          <DragSlider>
            {[...Array(10).keys()].map((item, key) => (
              <FlexItem key={key} width={300}>
                {item + 1}
              </FlexItem>
            ))}
          </DragSlider>
        </Container>
        <DragMe>Drag Me</DragMe>
      </Right>
    </HomePageGrid>
  </Layout>
)

export default IndexPage
