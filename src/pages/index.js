import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { DragSlider } from '../components/DragSlider'
import { Flex } from '../components/Box'

const Container = styled.div`
  background-color: #000;
  height: 100vh;
  overflow-y: hidden;
  flex: 1 0 1px;
`

const HomePageGrid = styled.div`
  display: flex;
`

const IndexPage = () => (
  <Layout>
    <HomePageGrid>
      <h1>JOSH ARROWSMITH</h1>
      <>
        <Container>
          <DragSlider>
            {[...Array(10).keys()].map((item, key) => (
              <Flex key={key} width={300}>
                {item + 1}
              </Flex>
            ))}
          </DragSlider>
        </Container>
      </>
    </HomePageGrid>
  </Layout>
)

export default IndexPage
