import styled from 'styled-components'

export const Box = styled.div`
  width: 467px;
  background-color: #2d2dff;
  height: 300px;
  margin-top: 8px;
  font-size: 72px;
  font-weight: 700;
  color: #e6e6e6;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`
export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
