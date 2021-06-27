import * as React from 'react'
import { useEffect, useState } from 'react'
import { motion, useAnimation, transform } from 'framer-motion'
import styled from 'styled-components'

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 50px;
  p {
    background: linear-gradient(to right, #00f260 50%, #0575e6 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.5px;
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
`

const speed = 50
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0])

export const Counter = ({ hits }) => {
  const [counter, setCounter] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (counter < hits) {
      setTimeout(() => setCounter(counter + 1), speed)
    }

    controls.start({
      scale: 1,
      transition: {
        type: 'spring',
        velocity: mapRemainingToSpringVelocity(hits / counter),
        stiffness: 2000,
        damping: 1000,
      },
    })
  }, [counter, hits, controls])

  return (
    <CounterContainer>
      <motion.span animate={controls}>
        <p>{counter}</p>
      </motion.span>
    </CounterContainer>
  )
}
