import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 600px;
  overflow-y: hidden;
  @media (max-width: 800px) {
    width: 300px;
  }
`

export const Box = styled.div`
  width: 600px;
  height: 600px;
  font-size: 72px;
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 300px;
    height: 400px;
  }
`

export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
