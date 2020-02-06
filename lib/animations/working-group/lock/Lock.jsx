import React from 'react'
import Parallax from 'react-rellax'
import Lottie from '@components/Lottie'

import animationData from './data/lock.json'

const Lock = () => {
  return (
    <>
      <div className="lottie">
        <Parallax speed={0.2} percentage={0}>
          <Lottie width="100%" height="100%" data={animationData} loop />
        </Parallax>
      </div>
    </>
  )
}

export default Lock
