import React from 'react'
import Lottie from '@components/Lottie'
import styled from 'styled-components'

import animationData from './data/running_woman.json'

const RunningWoman = () => {
  return (
    <Wrapper>
      <div className="lottie">
        <Lottie loop width="800px" height="955px" data={animationData} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 50%;
  height: 100%;
  min-width: 640px;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);

  @media (max-width: 980px) {
    display: none;
  }

  .lottie {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    > div {
      width: 100% !important;
      height: 100% !important;
    }
  }
`

export default RunningWoman
