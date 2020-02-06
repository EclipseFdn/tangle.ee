import React, { useRef } from 'react'
import Parallax from 'react-rellax'
import Lottie from 'react-lottie'

import layer1Data from './data/layer-01.json'
import layer2Data from './data/layer-02.json'
import layer3Data from './data/layer-03.json'
import layer4Data from './data/layer-04.json'

const Programmer = () => {
  const anim2 = useRef(null)
  const anim3 = useRef(useRef)

  const options1 = {
    loop: true,
    animationData: layer1Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options2 = {
    loop: true,
    animationData: layer2Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options3 = {
    loop: true,
    animationData: layer3Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options4 = {
    loop: true,
    animationData: layer4Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <div className="lottie">
        <Parallax speed={0.2} percentage={0}>
          <Lottie width="410" height="410" options={options4} loop />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={0.3} percentage={0}>
          <Lottie
            width="410"
            ref={anim3}
            eventListeners={[
              {
                eventName: 'DOMLoaded',
                callback: () => anim3.current.anim.setSpeed(0.5)
              }
            ]}
            height="410"
            options={options3}
            loop
          />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={0.7} percentage={0}>
          <Lottie
            width="410"
            speed={0}
            height="410"
            ref={anim2}
            eventListeners={[
              {
                eventName: 'DOMLoaded',
                callback: () => anim2.current.anim.setSpeed(0.5)
              }
            ]}
            options={options2}
            loop
          />
        </Parallax>
      </div>
      <div className="lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="410" height="410" options={options1} loop />
        </Parallax>
      </div>
    </>
  )
}

export default Programmer
