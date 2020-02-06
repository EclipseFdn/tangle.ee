import React from 'react'
import Lottie from '@components/Lottie'

import animationData from './data/standingprogrammer.json'

const StandingProgrammer = () => {
  return (
    <>
      <div className="lottie">
        <Lottie width="100%" height="100%" data={animationData} loop />
      </div>
    </>
  )
}

export default StandingProgrammer
