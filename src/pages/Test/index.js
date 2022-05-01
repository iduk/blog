import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Transition, useSpring, animated } from 'react-spring'

function Test() {
  const [isOpen, setIsOpen] = useState(false)

  const props = useSpring({
    opacity: isOpen ? 1 : 0,
  })

  const openToggle = () => setIsOpen(!isOpen)

  return (
    <div
      className="flex flex-col justify-center w-full relative"
      style={{ height: '80vh' }}
    >
      <animated.div style={props}>
        <div className="absolute h-56 inset-0 top-8 z-10 bg-dark text-center bg-stone-600">
          <h1>asdfasdf</h1>
          <div>asdfasdf</div>
        </div>
      </animated.div>

      <div className="absolute bottom-4 z-10 w-full">
        <button className="btn btn-primary w-full" onClick={openToggle}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default Test
