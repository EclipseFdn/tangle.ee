import React from 'react'
import Parallax from 'react-rellax'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/tech_hub.json'

const TechHub = () => {
  const options = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper>
      <svg className="background" width="100%" height="100%" viewBox="0 0 406 405" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="203.375"
          cy="202.537"
          r="202.41"
          transform="rotate(4.36117 203.375 202.537)"
          fill="url(#tech_techhub_anim_bg)"
        />
        <defs>
          <linearGradient
            id="tech_techhub_anim_bg"
            x1="134.107"
            y1="267.224"
            x2="342.513"
            y2="-20.6129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset="0.241159" stopColor="#30C9E8" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" options={options} loop />
        </Parallax>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;

  svg.background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    @media (max-width: 980px) {
      display: none;
    }
  }
`

export default TechHub
