import React from 'react'
import Lottie from '@components/Lottie'
import styled from 'styled-components'

import animationData from './data/marker.json'

const Marker = () => {
  return (
    <Wrapper>
      <div className="lottie">
        <Lottie width="100%" height="100%" data={animationData} loop />
      </div>
    </Wrapper>
  )
}

export default Marker

const Wrapper = styled.div``
