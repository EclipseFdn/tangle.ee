import React from 'react'
import Parallax from 'react-rellax'
import Lottie from '@components/Lottie'

import animationData from './data/segmented_irinode.json'

const FileExplotion = () => {
  return (
    <>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" segments={[249, 421]} data={animationData} playWhenVisible loop />
        </Parallax>
      </div>
    </>
  )
}

export default FileExplotion
