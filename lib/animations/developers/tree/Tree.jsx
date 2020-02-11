import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/trees.json'

const Tree = () => {
  const options = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper className="animated">
      <div className="lottie">
        <Lottie width="100%" speed={0.5} height="100%" options={options} loop />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: calc(100% - 200px);
  bottom: 100px;
  z-index: 1;
  left: -50%;

  @media (min-width: 1650px) {
    width: 1610px;
    height: auto;
    left: -40%;
  }

  @media (max-width: 1300px) {
    width: 100%;
    left: -60%;
  }

  @media (max-width: 980px) {
    display: none;
  }

  &.animated {
    margin: 0px auto;

    .lottie {
      height: 100%;
      right: 15%;
      > div > svg > g {
        transform: translate(400px, 0%);
        @media (max-width: 1300px) {
          transform: translate(0, 0);
        }
      }
    }
  }
`

export default Tree
