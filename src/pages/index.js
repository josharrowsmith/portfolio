import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import { DragSlider } from '../components/DragSlider'
import { FlexItem } from '../components/Box'

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
export const Container = styled.div`
  margin: 0 auto;
  background-color: #000;
  height: 100vh;
  width: 400px;
  overflow-y: hidden;
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <h1>hey</h1>
      <Container>
        <DragSlider>
          {[...Array(10).keys()].map((item, key) => (
            <FlexItem key={key} width={300}>
              {item + 1}
            </FlexItem>
          ))}
        </DragSlider>
      </Container>
    </HomePageGrid>
  </Layout>
)

export default IndexPage
