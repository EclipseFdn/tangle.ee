import React from 'react'
import Slick from 'react-slick'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Slider = ({ children, settings }) => {
  return (
    <Wrapper>
      <Slick {...settings}>{children}</Slick>
    </Wrapper>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.shape().isRequired
}

const Wrapper = styled.div`
  /* Slider */
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

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
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
    text-align: center;
    padding: 0 20px;
    li {
      display: inline-block;
      button {
        display: block;
        overflow: hidden;
        width: 8px;
        height: 8px;
        background: #fff;
        text-indent: -50px;
        margin: 4px;
        border-radius: 100%;
        cursor: pointer;
      }

      &.slick-active button {
        background: #ff4b47;
      }
    }
  }
`

export default Slider
