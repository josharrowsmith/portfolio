import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeProvider'

const SwitchContainer = styled(motion.div)`
  &.switch {
    width: 50px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  &.switch div {
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
  }
  &.switch.on {
    background-color: #00f260;
    justify-content: flex-end;
  }

  &.switch.off {
    background-color: #dddddd;
    justify-content: flex-start;
  }
`

function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? 'on' : 'off'}`

  return (
    <SwitchContainer magic className={className} {...props}>
      <motion.div magic />
    </SwitchContainer>
  )
}

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <Switch
      isOn={colorMode === 'dark'}
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    />
  )
}

export default DarkToggle
