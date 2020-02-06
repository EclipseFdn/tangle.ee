import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/downerhand.json'

const DownerHand = () => {
  const options = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper className="hand animated">
      <div className="lottie">
        <Lottie width="100%" speed={0.5} height="100%" options={options} loop />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  &.animated {
    .lottie {
      width: 130%;
    }
  }
`

export default DownerHand
