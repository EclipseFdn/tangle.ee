import React from 'react'
import Parallax from 'react-rellax'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Circle = ({ children }) => (
  <Wrapper>
    <Parallax centered className="background" percentage={0} speed={0.2}>
      <svg xmlns="http://www.w3.org/2000/svg" width="998.455" height="879.563" fill="none">
        <defs>
          <linearGradient id="a" x1="144.053" y1="535.509" x2="411.17" y2="598.263" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3979B8" />
            <stop offset="1" stopColor="#65C0D1" />
          </linearGradient>
          <linearGradient
            xlinkHref="#a"
            id="orgs_circle_bg_1"
            gradientUnits="userSpaceOnUse"
            x1="144.053"
            y1="535.509"
            x2="411.17"
            y2="598.263"
            gradientTransform="translate(106.36 -.09)"
          />
        </defs>
        <path
          d="M849.426 111.143c183.707 161.396 199.788 439.37 35.918 620.872-163.872 181.502-445.641 197.802-629.35 36.406-183.708-161.396-199.79-439.37-35.917-620.872 163.87-181.503 445.64-197.802 629.349-36.406z"
          opacity=".85"
          fill="url(#orgs_circle_bg_1)"
        />
      </svg>
    </Parallax>
    <Parallax centered className="background" percentage={0} speed={3}>
      <svg width="998.455" height="879.563" fill="none">
        <path
          d="M517.048 320.55c127.53 112.04 138.257 305.495 23.956 432.093C426.704 879.24 230.662 891.04 103.13 779-24.4 666.96-35.126 473.503 79.174 346.905c114.3-126.597 310.343-138.397 437.874-26.356z"
          opacity=".2"
          fill="#009fe3"
        />
        <defs id="defs2">
          <linearGradient id="orgs_circle_bg_2" x1="144.053" y1="535.509" x2="411.17" y2="598.263" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3979B8" id="stop4" />
            <stop offset="1" stopColor="#65C0D1" id="stop6" />
          </linearGradient>
        </defs>
      </svg>
    </Parallax>
    <Parallax centered className="background" percentage={0} speed={2}>
      <svg width="998.455" height="879.563" fill="none">
        <path
          d="M444.983 351.429c40.93 35.957 44.371 98.043 7.688 138.672-36.682 40.63-99.598 44.417-140.527 8.46-40.928-35.959-44.37-98.044-7.688-138.674 36.682-40.629 99.598-44.416 140.527-8.458z"
          opacity=".2"
          fill="#ff4b47"
        />
        <defs id="defs3">
          <linearGradient id="orgs_circle_bg_2" x1="144.053" y1="535.509" x2="411.17" y2="598.263" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3979B8" id="stop4" />
            <stop offset="1" stopColor="#65C0D1" id="stop6" />
          </linearGradient>
        </defs>
      </svg>
    </Parallax>
    {children}
  </Wrapper>
)

Circle.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding-top: 0;
  position: relative;
  margin-bottom: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 110px);

  @media (min-width: 1500px) {
    min-height: inherit;
    height: calc(100vh - 110px);
    max-height: 1000px;
  }

  @media (max-width: 700px) {
    margin-bottom: 140px;
    margin-top: 30px;

    div.background {
      top: 0;
    }
  }

  div.background {
    position: absolute;

    &:nth-of-type(1) {
      z-index: -1;
    }
    &:nth-of-type(2) {
      z-index: -2;
    }
    &:nth-of-type(3) {
      z-index: -3;
    }

    svg g {
      min-width: 900px;
    }
  }

  article {
    @media (max-width: 700px) {
      position: relative;
      top: 80px;
    }
    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .break {
        flex-basis: 100%;
        height: 0;
      }

      div.react-reveal {
        margin: 0 0 30px 0;

        &:first-of-type {
          margin-bottom: 110px;
          @media (max-width: 1275px) {
            margin-bottom: 30px;
          }
        }

        &:nth-of-type(even) {
          margin-left: auto;
          @media (max-width: 1275px) {
            margin-left: inherit;
          }
        }
      }
    }
  }
`

export default Circle
