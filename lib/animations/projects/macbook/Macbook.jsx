import React from 'react'
import Parallax from 'react-rellax'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/Macbook.json'

const FileExplotion = () => {
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
      <svg className="background" width="621" height="629" viewBox="0 0 630 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.1" cx="314.5" cy="314.5" r="314.5" fill="white" />
      </svg>
      <div className="lottie">
        <Parallax speed={0.5} percentage={0}>
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
    transform: translate(20px, 20px);

    @media (max-width: 980px) {
      display: none;
    }
  }
`

export default FileExplotion
