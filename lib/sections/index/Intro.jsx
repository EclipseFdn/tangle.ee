import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AnimationAtom from '@animations/index/Atom'
import DownerHand from '@animations/index/downerhand/DownerHand'
import UpperHand from '@animations/index/upperhand/UpperHand'
import Particles from '@animations/index/particles/Particles'

const Intro = ({ children }) => (
  <Wrapper>
    <article>{children}</article>
    <svg className="background" width="1440" height="971" viewBox="0 0 1440 971" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="488.5" cy="34" rx="1050.5" ry="776" fill="url(#intro_background_1)" />
      <ellipse
        opacity="0.62"
        rx="1042.58"
        ry="875.441"
        transform="matrix(0.670138 -0.742237 0.751256 0.660011 1782.35 -381.357)"
        fill="url(#intro_background_2)"
      />
      <defs>
        <linearGradient id="intro_background_1" x1="94" y1="73" x2="1406.24" y2="41.3629" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" />
          <stop offset="0.399054" stopColor="#30C9E8" />
          <stop offset="0.886435" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
        </linearGradient>
        <linearGradient
          id="intro_background_2"
          x1="403.538"
          y1="558.496"
          x2="636.766"
          y2="1066.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3979B8" />
          <stop offset="1" stopColor="#65C0D1" />
        </linearGradient>
      </defs>
    </svg>
    <Particles />
    <AnimationAtom />
    <DownerHand />
    <UpperHand />
  </Wrapper>
)

Intro.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(180deg, #fff 0%, #eff4f8 100%);
  position: relative;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 850px;
  min-height: 730px;

  @media (max-width: 1190px) {
    height: calc(100vh - 60px);
  }

  article,
  > img {
    position: relative;
    z-index: 2;
  }

  h1 {
    max-width: 470px;
    /* override global h1 for this section */
    color: #ffffff;
    @media (max-width: 980px) {
      font-size: 35px;
      line-height: 41px;
    }
  }

  p {
    max-width: 380px;
  }

  svg.background {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    min-width: 1380px;
    z-index: -10;
    @media (max-width: 980px) {
      min-height: 130%;
      top: -20px;
      left: inherit;
      right: 0;
    }
  }

  .particles {
    position: absolute;
    top: 53%;
    left: 50%;
    z-index: -2;
    transform: translate(-49%, -40%);
    @media (max-width: 980px) {
      transform: translate(-73%, -94%);
    }
  }

  .hand {
    position: absolute;
    width: 700px;
    left: 50%;
    top: 70%;
    z-index: 1;
    transform: translate(100px, -100px);
    + .hand {
      top: 0;
      transform: scale(-1) translate(-10px, -320px);
    }

    &.back {
      z-index: -3;
    }
  }

  .atom {
    z-index: -2;
  }

  @media (max-width: 980px) {
    padding-top: 135px;
    height: 865px;

    article {
      max-width: 520px;
      text-align: center;
      h1,
      p {
        text-align: left;
      }
    }

    .hand {
      width: 380px;
      top: 0px;
      transform: rotate(-10deg) translate(-50%, 110px);
      + .hand {
        display: none;
      }
    }
  }
`

export default Intro
