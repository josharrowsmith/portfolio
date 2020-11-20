import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 600px;
  overflow-y: hidden;
  margin-top: 4rem;
  @media (max-width: 800px) {
    width: 300px;
  }
`

export const Box = styled.div`
  width: 600px;
  height: 600px;
  border: var(--color-text) 5px solid;
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 300px;
    height: 400px;
    margin-right: 1rem;
  }
`

export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
