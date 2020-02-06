import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'
import VisibilitySensor from 'react-visibility-sensor'

/**
 * lottie-web wrapper
 */
const Lottie = ({ data, height, loop = false, paused, segments, width, onEnd, playWhenVisible }) => {
  const container = useRef(null)
  const [animation, setAnimation] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const onVisibilityChange = (visible) => setIsVisible(visible)

  useEffect(() => {
    if (!animation) {
      return
    }
    if (paused) {
      animation.stop()
    } else {
      animation.play()
    }
  }, [paused])

  useEffect(() => {
    if (playWhenVisible && animation && isVisible) {
      if (segments) {
        animation.playSegments(segments)
      } else {
        animation.play()
      }
    }
  }, [isVisible])

  useEffect(() => {
    const options = {
      container: container.current,
      renderer: 'svg',
      animationData: data,
      loop,
      autoplay: !paused && !playWhenVisible
    }
    const loadedAnimation = lottie.loadAnimation(options)

    if (segments && !playWhenVisible) {
      loadedAnimation.playSegments(segments)
    }

    if (typeof onEnd === 'function') {
      loadedAnimation.addEventListener('complete', onEnd)
    }

    setAnimation(loadedAnimation)

    return () => {
      loadedAnimation.destroy()
    }
  }, [])

  const style = {
    width: `${width}`,
    height: `${height}`,
    overflow: 'hidden',
    margin: '0 auto',
    outline: 'none'
  }

  return playWhenVisible ? (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div ref={container} style={style} />
    </VisibilitySensor>
  ) : (
    <div ref={container} style={style} />
  )
}

Lottie.propTypes = {
  /** Animation data */
  data: PropTypes.shape().isRequired,
  /** Animation height */
  height: PropTypes.string.isRequired,
  /** Should animation be looped */
  loop: PropTypes.bool,
  /** Animation end callback */
  onEnd: PropTypes.func,
  /** Is animation paused */
  paused: PropTypes.bool,
  /** Animation width */
  width: PropTypes.string.isRequired,
  /* Animation segment played after first loop */
  segments: PropTypes.shape(),
  /* Play animation only when appears on screen */
  playWhenVisible: PropTypes.bool
}

Lottie.defaultProps = {
  loop: false,
  onEnd: null,
  paused: false,
  segments: null,
  playWhenVisible: false
}

export default Lottie
