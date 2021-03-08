import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 600px;
  overflow-y: hidden;
  margin-top: 4rem;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0;
    height: auto;
  }
`

export const Box = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  height: 600px;
  border: var(--color-text) 5px solid;
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 250px;
    height: 300px;
    margin-right: 1rem;
  }
`

export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
