import React from 'react'
import styled from 'styled-components'

import Dandelion from '@animations/notfound/dandelion'
import Leaf from '@animations/notfound/leaf'
import GrowingTree from '@animations/about/growingtree/GrowingTree'

const NotFound = () => {
  return (
    <Wrapper>
      <svg className="background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 476">
        <path
          fill="url(#not_found_paint0_linear)"
          d="M2015.03-1650.2c363.22 319.11 344.87 924.263-41 1351.644-385.86 427.381-993.123 515.151-1356.35 196.041-363.226-319.111-344.874-924.265 40.993-1351.645S1651.8-1969.31 2015.03-1650.2z"
          opacity="0.85"
        />
        <ellipse cx="282.5" cy="-520" fill="url(#not_found_paint1_linear)" opacity="0.9" rx="1050.5" ry="776" />
        <defs>
          <linearGradient
            id="not_found_paint0_linear"
            x1="650"
            x2="1186.29"
            y1="-611.224"
            y2="-444.458"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3979B8" />
            <stop offset="1" stopColor="#65C0D1" />
          </linearGradient>
          <linearGradient
            id="not_found_paint1_linear"
            x1="-67"
            x2="1200.65"
            y1="-481"
            y2="-502.145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset="0.399" stopColor="#30C9E8" />
            <stop offset="0.886" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
          </linearGradient>
        </defs>
      </svg>
      <Dandelion />
      <Leaf className="first" />
      <Leaf className="second" />
      <Leaf className="third" />
      <article>
        <h1>
          Oops!
          <br />
          Sorry Page not found
        </h1>
        <h3>Don´t lose your Seed!</h3>
      </article>
      <svg className="background bottom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1340 562">
        <ellipse cx="1050.5" cy="647.839" fill="url(#not_found_paint2_linear)" fillOpacity="0.5" rx="1050.5" ry="647.839" />
        <defs>
          <linearGradient
            id="not_found_paint2_linear"
            x1="560"
            x2="1913.41"
            y1="247.949"
            y2="813.436"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" stopOpacity="0.41" />
            <stop offset="0.475" stopColor="#30C9E8" />
            <stop offset="0.886" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
          </linearGradient>
        </defs>
      </svg>

      <GrowingTree />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  max-height: 850px;
  min-height: 730px;

  @media (max-width: 1190px) {
    height: calc(100vh - 60px);
  }

  h3 {
    text-transform: none;
  }

  > svg.background {
    position: absolute;
    width: 100%;
    top: -80px;
    left: 0;
    z-index: -1;
    @media (max-width: 600px) {
      top: -10px;
    }
  }

  > svg.background.bottom {
    position: absolute;
    width: auto;
    height: 40vh;
    bottom: -80px;
    right: 0;
    top: inherit;
    left: inherit;
    opacity: 0.2;
    max-height: 500px;
  }

  .dandelion {
    width: 280px;
    position: absolute;
    top: 7%;
    right: 30%;
    z-index: -1;
    @media (max-width: 600px) {
      width: 180px;
      top: -1%;
      right: 5%;
    }
  }

  .leaf {
    position: absolute;
    z-index: -1;
    &.first {
      width: 100px;
      top: 10%;
      right: 20%;
      @media (max-width: 600px) {
        right: 60%;
      }
    }
    &.second {
      width: 50px;
      transform: rotate(-90deg);
      top: 80%;
      right: 13%;
    }
    &.third {
      width: 100px;
      transform: rotate(-90deg);
      top: 70%;
      right: 40%;
    }
  }

  .growing-tree {
    width: 150px;
    position: absolute;
    bottom: 20%;
    right: 20%;
    @media (max-width: 600px) {
      display: none;
    }
  }

  > article {
    width: 50%;

    @media (max-width: 1300px) {
      width: 60%;
    }

    @media (max-width: 980px) {
      width: 100%;
    }
  }
`

export default NotFound
