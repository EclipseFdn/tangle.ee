import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/upperhand.json'

const UpperHand = () => {
  const animation = useRef(null)
  const options1 = {
    loop: true,
    animationData,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper className="hand back animated">
      <div className="lottie">
        <Lottie
          ref={animation}
          width="100%"
          speed={0.5}
          height="100%"
          options={options1}
          eventListeners={[
            {
              eventName: 'DOMLoaded',
              callback: () =>
                setTimeout(() => {
                  animation.current.anim.setSpeed(0.9)
                  animation.current.anim.play(0)
                }, 200)
            }
          ]}
          loop
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  &.animated {
    .lottie {
      width: 160%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

export default UpperHand
