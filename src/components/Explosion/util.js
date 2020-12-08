import Exotic from '../../assets/images/icons/exotic.png'
import Purple from '../../assets/images/icons/purple.png'
import Pink from '../../assets/images/icons/pink.png'
import DarkPurple from '../../assets/images/icons/dark-purple.png'
import Redbull from '../../assets/images/icons/redbull.png'
import Bmx from '../../assets/images/icons/bmx.png'
import Fries from '../../assets/images/icons/fries.png'
import Donuts from '../../assets/images/icons/donuts.png'
import React from '../../assets/images/icons/react.png'
import Yoda from '../../assets/images/icons/yoda.png'

export const STATIC_DENSITY = 30
export const PARTICLE_SIZE = 30
export const PARTICLE_BOUNCYNESS = 0.9
export const angle = 300
export const spread = 20
export const velocity = 30
export const angularVelocity = 0.5
export const volatility = 0.75
export const airFriction = 0.02

export const sprites = [
  {
    src: Donuts,
    size: 25,
    airFrictionMultiplier: 0.75,
  },
  {
    src: Fries,
    size: 25,
    airFrictionMultiplier: 1.2,
  },
  {
    src: Bmx,
    size: 25,
    airFrictionMultiplier: 1.15,
  },
  {
    src: Redbull,
    size: 25,
    airFrictionMultiplier: 0.9,
  },
  {
    src: React,
    size: 25,
    airFrictionMultiplier: 0.5,
  },
  {
    src: Yoda,
    size: 25,
    airFrictionMultiplier: 0.5,
  },
]

export const random = (min, max) => Math.random() * (max - min) + min

export const convertDegreesToRadians = angle => (angle * Math.PI) / 180

export const sample = arr => arr[Math.floor(Math.random() * arr.length)]

export const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin)

  // Next, transpose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
}
