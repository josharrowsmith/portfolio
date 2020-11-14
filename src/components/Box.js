import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 600px;
  overflow-y: hidden;
`

export const Box = styled.div`
  width: 600px;
  background-color: #2d2dff;
  height: 600px;
  font-size: 72px;
  font-weight: 700;
  color: #e6e6e6;
  text-align: center;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`

export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
