import styled from 'styled-components'

export const Box = styled.div`
  width: 300px;
  background-color: #2d2dff;
  height: 300px;
  font-size: 72px;
  font-weight: 700;
  color: #e6e6e6;
  margin-bottom: 64px;
  text-align: center;
`

export const Flex = styled(Box)`
  display: flex;
`
export const FlexItem = styled(Flex)``
FlexItem.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 300,
  width: 300,
  fontSize: 10,
  fontWeight: 2,
  marginBottom: 8,
}
