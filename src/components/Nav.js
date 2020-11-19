import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  ul {
    display: flex;
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
