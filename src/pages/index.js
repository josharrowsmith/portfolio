import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { DragSlider } from '../components/DragSlider'
import { Container, FlexItem } from '../components/Box'

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
`

const DragMe = styled.h1`
  transform: rotate(90deg);
  width: 300px;
  align-self: center;
  justify-self: center;
  position: relative;
  display: flex;
  &:after {
    content: "";
    height: 2px;
    width: 200px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <h1>hey</h1>
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
