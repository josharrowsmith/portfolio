import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import { DragSlider } from '../components/DragSlider'
import { Container, FlexItem } from '../components/Box'
import Scroll from '../assets/images/scroll.svg'

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
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
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <div>
        <h1>hey</h1>
        <StyledScrollImage
          src={Scroll}
          alt="Scroll down!"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
        />
      </div>
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
