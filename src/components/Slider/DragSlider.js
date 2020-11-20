import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { useWindowSize } from 'react-use'
import { IntersectionObserver } from './IntersectionObserver'
import { ScaleBox } from './ScaleBox'

const Slider = styled(motion.div)`
  cursor: grab;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`

export const DragSlider = ({ children }) => {
  const ref = useRef(null)
  const y = useMotionValue(0)
  const { width } = useWindowSize()

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
    <div style={{ overflow: 'hidden' }}>
      <Slider
        ref={ref}
        drag={width >= 800 ? 'y' : 'x'}
        initial={{ y: 0 }}
        style={{ y }}
        dragConstraints={
          width >= 800
            ? {
                top: `${-sliderConstraints}`,
                bottom: 0,
              }
            : { left: `${-sliderConstraints}`, right: 0 }
        }
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
