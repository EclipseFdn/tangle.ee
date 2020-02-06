import React, { useEffect, useRef, useState } from 'react'
import Slick from 'react-slick'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

const Slider = ({ children, settings }) => {
  const sliderSettings = {
    ...settings,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />
  }
  const slickRef = useRef(null)
  const size = useWindowSize()
  useEffect(() => {
    if (size.width < 630) {
      slickRef.current.slickPrev()
      setTimeout(() => {
        slickRef.current.slickNext()
      }, 200)
    }
  }, [])
  return (
    <Wrapper>
      <Slick ref={slickRef} {...sliderSettings}>
        {children}
      </Slick>
    </Wrapper>
  )
}

const CustomArrow = ({ className, style, onClick, type }) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      {type === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27">
          <path
            fill="#009FE3"
            fillRule="evenodd"
            d="M8.503 14.09l.226-.234-.226.233 4.539 4.672.696-.717-4.008-4.126h9.17v-1H9.64l3.402-3.501-.697-.717-4.539 4.672.697.717z"
            clipRule="evenodd"
          />
          <path
            fill="#009FE3"
            d="M8.73 13.856l-.36-.348.86-.884v1.232h-.5zm-.227.233l.359.348-.359.37-.358-.37.358-.348zm.226-.233h.5v.203l-.141.146-.359-.349zm-.226.233l-.358.348-.339-.348.339-.348.358.348zm4.539 4.672l.358.349-.358.369-.359-.37.359-.348zm.696-.717l.359-.348.338.348-.338.348-.359-.348zM9.73 13.918l-.358.348-.824-.848H9.73v.5zm9.17 0h.5v.5h-.5v-.5zm0-1v-.5h.5v.5h-.5zm-9.26 0v.5H8.459l.824-.848.359.348zm3.402-3.501l.358-.348.339.348-.339.348-.358-.348zm-.697-.717l-.359-.349.359-.369.358.37-.358.348zm-4.539 4.672l-.358.348-.339-.348.339-.349.358.349zm1.282.833l-.226.232-.717-.696.226-.233.717.697zm-.859-.349h1-1zm.859.349l-.226.232-.717-.696.226-.233.717.697zm-.226-.464l4.538 4.672-.717.697-4.538-4.672.717-.697zm3.821 4.672l.697-.717.717.696-.697.718-.717-.697zm.697-.02l-4.008-4.127.717-.697 4.008 4.127-.717.696zm5.52-3.975H9.73v-1h9.17v1zm.5-1.5v1h-1v-1h1zm-9.76-.5h9.26v1H9.64v-1zm3.76-2.653L10 13.266l-.718-.697 3.401-3.5.717.696zm-.697-1.414l.697.718-.717.696-.697-.717.717-.697zm-5.255 4.672l4.538-4.672.717.697-4.538 4.672-.717-.697zm.697 1.415l-.697-.718.717-.697.697.718-.717.697z"
          />
          <circle r="12.5" stroke="#009FE3" strokeWidth="2" transform="matrix(-1 0 0 1 13.5 13.5)" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27">
          <path
            fill="#009FE3"
            fillRule="evenodd"
            d="M18.497 14.09l-.226-.234.226.233-4.539 4.672-.696-.717 4.008-4.126H8.1v-1h9.26l-3.402-3.501.697-.717 4.539 4.672-.697.717z"
            clipRule="evenodd"
          />
          <path
            fill="#009FE3"
            d="M18.27 13.856l.36-.348-.86-.884v1.232h.5zm.227.233l-.359.348.359.37.358-.37-.358-.348zm-.226-.233h-.5v.203l.141.146.359-.349zm.226.233l.358.348.339-.348-.338-.348-.36.348zm-4.539 4.672l-.358.349.358.369.359-.37-.359-.348zm-.696-.717l-.359-.348-.338.348.338.348.359-.348zm4.008-4.126l.358.348.824-.848H17.27v.5zm-9.17 0h-.5v.5h.5v-.5zm0-1v-.5h-.5v.5h.5zm9.26 0v.5h1.182l-.824-.848-.359.348zm-3.402-3.501l-.358-.348-.339.348.339.348.358-.348zm.697-.717l.359-.349-.359-.369-.358.37.358.348zm4.539 4.672l.358.348.339-.348-.339-.349-.358.349zm-1.282.833l.226.232.717-.696-.226-.233-.717.697zm.859-.349h-1 1zm-.859.349l.226.232.717-.696-.226-.233-.717.697zm.226-.464L13.6 18.413l.717.697 4.538-4.672-.717-.697zm-3.821 4.672l-.697-.717-.717.696.697.718.717-.697zm-.697-.02l4.008-4.127-.717-.697-4.008 4.127.717.696zM8.1 14.417h9.17v-1H8.1v1zm-.5-1.5v1h1v-1h-1zm9.76-.5H8.1v1h9.26v-1zM13.6 9.765l3.4 3.501.718-.697-3.401-3.5-.717.696zm.697-1.414l-.697.718.717.696.697-.717-.717-.697zm5.255 4.672l-4.538-4.672-.717.697 4.538 4.672.717-.697zm-.697 1.415l.697-.718-.717-.697-.697.718.717.697z"
          />
          <circle cx="13.5" cy="13.5" r="12.5" stroke="#009FE3" strokeWidth="2" />
        </svg>
      )}
    </div>
  )
}

CustomArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.shape().isRequired
}

const Wrapper = styled.div`
  width: 120vw;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -10%);
  top: 330px;
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;

    margin: 0;
    padding: 0;
    svg {
      @media (max-width: 640px) {
        display: none !important;
      }
    }
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-arrow {
    position: absolute;
    right: 50%;
    left: 50%;
    margin: 0 auto;
    z-index: 10;
    width: 27px;
    height: 27px;
    &:hover {
      cursor: pointer;
    }
    svg {
    }
    &.slick-prev {
      transform: translate(-330px, 140px);
    }
    &.slick-next {
      transform: translate(330px, -170px);
    }
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    position: relative;
    opacity: 1;
    transition: all 1s ease;
    &:not(.slick-current):not(.slick-center) {
      transform: translateY(200px);
      & > div > div {
        opacity: 0;
      }
      & > div:before {
        width: 220px;
        height: 220px;
        opacity: 0.3;
      }
    }
    h2 {
      color: #fff;
      margin-bottom: 10px;
    }
    h4 {
      color: #fff;
    }
    p {
      padding-left: 20px;
      border-left: 3px solid #fff;
      color: #fff;
    }

    & > div {
      width: 320px;
      margin: 0 auto;
      &:before {
        transition: all 1s ease;
        width: 520px;
        height: 520px;
        background: linear-gradient(139.21deg, #3979b8 8.92%, #65c0d1 79.89%);
        mix-blend-mode: normal;
        opacity: 0.6;
        content: '';
        border-radius: 50%;
        right: 0;
        z-index: -1;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(150deg);
        @media (max-width: 640px) {
          width: 460px;
          height: 460px;
        }
      }
      > div:before {
        background: linear-gradient(139.21deg, #3979b8 8.92%, #65c0d1 79.89%);
        transition: all 1s ease;
        width: 520px;
        height: 520px;
        mix-blend-mode: normal;
        opacity: 0.6;
        content: '';
        border-radius: 50%;
        right: 0;
        z-index: -1;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-42%, -56%) rotate(150deg);
        @media (max-width: 640px) {
          width: 460px;
          height: 460px;
        }
      }
    }
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
    min-height: 310px;
    text-align: left;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;

    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    display: grid !important;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
    /* max-width: 90vw; */
    height: 300px;
    margin: 0 auto;
    justify-items: center;
    align-items: center;
    max-width: 100vw;
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
    @media (max-width: 980px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0;
      height: 110px;
      max-width: 220px;
      top: 60px;
      img {
        display: none;
      }
      div {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
    li {
      display: inline-block;
      background: #fff;
      border-radius: 10px;
      transition: box-shadow 0.2s ease-out;
      position: relative;
      border-radius: 10px;
      width: 100%;
      height: 160px;
      position: relative;
      display: flex;
      @media (max-width: 640px) {
        background: #c4c4c4;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: inline-block;
        &.slick-active {
          background: #ff4b47;
        }
      }
      &.slick-active {
        img {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
      &:hover {
        box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);
        img {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
      button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        background: none;
      }
      img {
        filter: grayscale(100%);
        opacity: 0.4;
        transition: opacity 0.2s ease-out, filter 0.2s ease-out;
        width: auto;
        max-width: 80%;
        max-height: 70%;
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`

export default Slider
