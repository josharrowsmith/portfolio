import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { DragSlider } from '../components/DragSlider'
import { Box, Flex, FlexItem } from '../components/Box'

function rand(min = 200, max = 500) {
  return Math.floor(Math.random() * (+max - +min)) + +min
}

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

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <h1>hey</h1>
      <DragSlider>
        {[...Array(24).keys()].map((item, key) => (
          <FlexItem key={key} width={rand()}>
            {item + 1}
          </FlexItem>
        ))}
      </DragSlider>
    </HomePageGrid>
  </Layout>
)

export default IndexPage
