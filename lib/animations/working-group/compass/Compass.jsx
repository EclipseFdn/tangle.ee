import React from 'react'
import Parallax from 'react-rellax'
import Lottie from 'react-lottie'

import animationData from './data/compass.json'

const Compass = () => {
  const options1 = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" options={options1} loop />
        </Parallax>
      </div>
    </>
  )
}

export default Compass
