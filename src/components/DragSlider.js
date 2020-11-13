import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { IntersectionObserver } from './IntersectionObserver'
import { ScaleBox } from './ScaleBox'

const Slider = styled(motion.div)`
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
`
Slider.defaultProps = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const DragSlider = ({ children }) => {
  const ref = useRef(null)
  const y = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

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
      <Slider
        ref={ref}
        drag="y"
        initial={{ y: 0 }}
        style={{ y }}
        dragConstraints={{
          top: `${-sliderConstraints}`,
          bottom: 0,
        }}
        dragTransition={(100, 10)}
      >
        {children}
      </Slider>
    </div>
  )
  return (
    <SliderWrap>
      {React.Children.map(children, child => (
        <IntersectionObserver reset="true">
          <ScaleBox>{React.cloneElement(child)}</ScaleBox>
        </IntersectionObserver>
      ))}
    </SliderWrap>
  )
}
