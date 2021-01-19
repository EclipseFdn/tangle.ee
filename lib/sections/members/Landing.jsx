import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DownerHand from '@animations/members/downerhand/DownerHand'
import UpperHand from '@animations/members/upperhand/UpperHand'

const Landing = ({ children }) => (
  <Wrapper>
    <article>{children}</article>
    <svg className="background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1004 418">
      <ellipse fill="url(#members_paint0_linear)" opacity="0.9" rx="1050.5" ry="776" transform="matrix(-1 0 0 1 -46.5 -358)" />
      <defs>
        <linearGradient id="members_paint0_linear" x1="0" x2="900" y1="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" />
          <stop offset="0.399" stopColor="#30C9E8" />
          <stop offset="0.886" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
        </linearGradient>
      </defs>
    </svg>
    <svg className="background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 262">
      <path
        fill="url(#members_paint1_linear)"
        d="M1659.03-1478.2c363.22 319.11 344.87 924.263-41 1351.644-385.86 427.381-993.123 515.151-1356.35 196.04-363.226-319.11-344.874-924.261 40.993-1351.644 385.866-427.38 993.127-515.15 1356.357-196.04z"
        opacity="0.85"
      />
      <defs>
        <linearGradient id="members_paint1_linear" x1="0" x2="900" y1="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3979B8" />
          <stop offset="1" stopColor="#65C0D1" />
        </linearGradient>
      </defs>
    </svg>
    <DownerHand />
    <UpperHand />
    <div className="decoration-1" />
    <div className="decoration-2" />
  </Wrapper>
)

Landing.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(180deg, #fff 0%, #eff4f8 100%);
  position: relative;
  min-height: 945px;
  display: flex;
  background-color: #f2f8fa;

  &:after {
    background: #ffffff;
    height: 50px;
    width: 100%;
    border-radius: 100% 100% 100% 0% / 100% 100% 0% 0%;
    display: inline-block;
    content: '';
    position: absolute;
    bottom: 0px;
  }

  p {
    max-width: 380px;
  }

  svg.background {
    position: absolute;
    top: -250px;
    left: 0;
    width: 60%;
    min-width: 400px;
    z-index: -10;
    + svg.background {
      top: 0;
      width: 400px;
      left: inherit;
      right: 0;
    }
    @media (max-width: 980px) {
    }
  }

  .hand {
    position: absolute;
    width: 700px;
    left: 50%;
    top: -20%;
    z-index: -2;
    transform: scaleY(-1);
    + .hand {
      bottom: -200px;
      left: -300px;
      right: inherit;
    }

    &.back {
      z-index: -3;
    }
  }

  h1 {
    margin-bottom: 20px;
  }

  & > article article {
    height: 100%;
    & div.absolute-positioned {
      position: absolute;
      top: 260px;
      @media (max-width: 980px) {
        top: 90px;
      }
    }
    & a.absolute-positioned {
      position: absolute;
      bottom: 140px;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 980px) {
    padding-top: 95px;
    height: 805px;
    min-height: inherit;

    article {
      /* max-width: 520px; */
      text-align: center;
      h1,
      p {
        text-align: left;
      }
    }

    .hand {
      width: 380px;
      top: -120px;
      left: inherit;
      right: -80px;
      + .hand {
        display: none;
      }
    }
  }
  @media (max-width: 980px) {
    padding-top: 135px;
    height: inherit;
    min-height: 805px;
  }
  .decoration-1 {
    position: absolute;
    width: 80px;
    height: 80px;
    right: 10%;
    top: 270px;
    background: #ff4b47;
    border-radius: 50%;
    @media (max-width: 980px) {
      display: none;
    }
  }
  .decoration-2 {
    position: absolute;
    width: 22px;
    height: 22px;
    right: 40px;
    bottom: 230px;
    background: #ff4b47;
    border-radius: 50%;
    @media (max-width: 980px) {
      display: none;
    }
  }
`

export default Landing
