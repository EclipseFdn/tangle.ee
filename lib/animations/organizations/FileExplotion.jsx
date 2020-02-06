import React from 'react'
import Parallax from 'react-rellax'
import Lottie from '@components/Lottie'

import TopicWrapper from './TopicWrapper'

import layer1Data from './data/filexplosion_layer01.json'
import layer2Data from './data/filexplosion_layer02.json'
import layer3Data from './data/filexplosion_layer03.json'

const FileExplotion = () => {
  return (
    <TopicWrapper className="animated left">
      <div className="lottie">
        <Parallax speed={0.2} percentage={0}>
          <Lottie width="100%" height="100%" data={layer3Data} playWhenVisible />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={0.7} percentage={0}>
          <Lottie width="100%" height="100%" data={layer2Data} playWhenVisible />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" data={layer1Data} loop />
        </Parallax>
      </div>
    </TopicWrapper>
  )
}

export default FileExplotion
