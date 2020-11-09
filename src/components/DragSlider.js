import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { IntersectionObserver } from './IntersectionObserver'
import { ScaleBox } from './ScaleBox'

export const DragSlider = ({ children }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

  const SliderWrap = ({ children }) => (
    <div style={{ overflowX: 'hidden' }}>
      <motion.div
        ref={ref}
        drag="y"
        initial={{ x: 0 }}
        style={{ x }}
        dragConstraints={{
          left: `${-sliderConstraints}`,
          right: 0,
        }}
        dragTransition={(100, 10)}
      >
        {children}
      </motion.div>
    </div>
  )
  return (
    <>
      <SliderWrap>
        {React.Children.map(children, child => (
          <IntersectionObserver reset="true">
            <ScaleBox>{React.cloneElement(child)}</ScaleBox>
          </IntersectionObserver>
        ))}
      </SliderWrap>
    </>
  )
}
