import React from 'react'
import Parallax from 'react-rellax'
import Lottie from '@components/Lottie'

import layer1Data from './data/layer_1.json'
import layer2Data from './data/layer_2.json'
import layer3Data from './data/layer_3.json'
import layer4Data from './data/layer_4.json'
import layer5Data from './data/layer_5.json'

const FileExplotion = () => {
  return (
    <>
      <div className="lottie">
        <Parallax speed={1} percentage={0}>
          <Lottie className="g-opacity-1" width="100%" height="100%" data={layer5Data} loop />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={0.5} percentage={0}>
          <Lottie width="100%" height="100%" data={layer4Data} loop />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={0.2} percentage={0}>
          <Lottie width="100%" height="100%" data={layer3Data} loop />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={3} percentage={0}>
          <Lottie width="100%" height="100%" data={layer2Data} loop />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" data={layer1Data} loop />
        </Parallax>
      </div>
    </>
  )
}

export default FileExplotion
