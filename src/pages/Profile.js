import React from 'react'
import { useState } from 'react'
import { useTransition, useSpring, animated } from 'react-spring'

const myCallback = () => {
  console.log('animation complete')
}

function Profile() {
  const [isHide, setHide] = useState(false)
  const [isNumber, setNumber] = useState(false)

  const { opacity } = useSpring({
    opacity: isHide ? 0 : 1,
    width: 200,
    onRest: myCallback,
  })
  const toggleHide = () => setHide(!isHide)

  const { number } = useSpring({
    number: isNumber ? 100 : 0,
  })
  const toggleNum = () => setNumber(!isNumber)

  return (
    <main className="mt-10">
      <section className="flex flex-col items-center gap-10">
        <div>
          <animated.div style={{ opacity }}>
            {isHide ? 'bye' : 'show'}
          </animated.div>
          <button className="btn btn-primary p-2" onClick={toggleHide}>
            TOGGLE
          </button>
        </div>

        <div>
          <animated.div>{number.interpolate((x) => x.toFixed(0))}</animated.div>
          <button className="btn btn-primary p-2" onClick={toggleNum}>
            숫자넘기기
          </button>
        </div>
      </section>
    </main>
  )
}

export default Profile
