import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/particles.json'

const Particles = () => {
  const options = {
    loop: false,
    animationData,
    autoplay: true,
    speed: 0.2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper className="particles animated">
      <div className="lottie">
        <Lottie width="100%" height="100%" options={options} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  &.animated {
    .lottie {
      width: 1350px;
      @media (max-width: 980px) {
        width: 700px;
      }
    }
  }
`

export default Particles
