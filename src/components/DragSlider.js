import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { IntersectionObserver } from './IntersectionObserver'
import { ScaleBox } from './ScaleBox'

export const DragSlider = ({ children }) => {
  const ref = useRef(null)
  const y = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

  console.log(sliderWidth)

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0
        )
      )
    }

    calcSliderChildrenWidth()

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth)
    }

    calcSliderWidth()
    window.addEventListener('resize', calcSliderWidth)

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth)
    }

    calcSliderConstraints()
    window.addEventListener('resize', calcSliderConstraints)
  }, [ref, sliderChildrenWidth, sliderWidth])

  const SliderWrap = ({ children }) => (
    <div style={{ overflowY: 'hidden' }}>
      <motion.div
        ref={ref}
        drag="y"
        initial={{ y: 0 }}
        style={{ y }}
        dragConstraints={{
          bottom: 0,
          top: `${sliderConstraints}`,
        }}
        // dragTransition={(100, 10)}
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
