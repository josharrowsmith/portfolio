import React, { useContext } from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { TransitionContext } from '../context/ThemeProvider'

const transitionStyles = styled.div`
  color: #d8cf25;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  font-weight: bold;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`
export const TLink = props => {
  const { to, children, styles } = props
  const { setTransition } = useContext(TransitionContext)
  return (
    <Link
      to={to}
      title={to === '/' ? 'Home' : to.replace(/\//g, ' ')}
      css={[transitionStyles, styles]}
      onClick={e => {
        e.preventDefault()
        setTransition(false)
        setTimeout(() => {
          navigate(to)
          setTransition(true)
        }, 1800)
      }}
    >
      {children}
    </Link>
  )
}
