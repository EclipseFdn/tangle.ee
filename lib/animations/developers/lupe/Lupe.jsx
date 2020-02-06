import React from 'react'
import Lottie from 'react-lottie'

import animationData from './data/lupe.json'

const Lupe = () => {
  const options = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="lottie">
      <Lottie width="100%" speed={0.5} height="100%" options={options} loop />
    </div>
  )
}

export default Lupe
