import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Landing = ({ children }) => (
  <Wrapper>
    <svg className="background" width="1141" height="211" viewBox="0 0 1141 211" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse opacity="0.9" rx="1050.5" ry="776" transform="matrix(-1 0 0 1 90.5 -565)" fill="url(#community_linear_1)" />
      <defs>
        <linearGradient id="community_linear_1" x1="0" y1="0" x2="1000" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" />
          <stop offset="0.399054" stopColor="#30C9E8" />
          <stop offset="0.886435" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
        </linearGradient>
      </defs>
    </svg>
    <svg className="background" width="597" height="1072" viewBox="0 0 597 1072" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.85"
        d="M1659.03 -668.199C2022.25 -349.088 2003.9 256.063 1618.03 683.444C1232.17 1110.82 624.907 1198.6 261.68 879.485C-101.546 560.374 -83.1936 -44.7772 302.673 -472.158C688.539 -899.539 1295.8 -987.31 1659.03 -668.199Z"
        fill="url(#community_linear_2)"
      />
      <defs>
        <linearGradient id="community_linear_2" x1="294" y1="370.776" x2="830.289" y2="537.542" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3979B8" />
          <stop offset="1" stopColor="#65C0D1" />
        </linearGradient>
      </defs>
    </svg>

    <article>{children}</article>
  </Wrapper>
)

Landing.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1190px) {
    min-height: calc(100vh - 60px);
  }

  @media (max-width: 980px) {
    background: url('/images/woman_in_hand.svg');
    background-repeat: no-repeat;
    background-size: auto 150%;
    padding-top: 100px;
    padding-bottom: 110px;
    background-position: right 50%;
    margin-bottom: 40px;
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
  }

  svg.background {
    position: absolute;
    top: 0;
    z-index: -1;
  }

  svg.background:nth-of-type(1) {
    left: 0;
    max-width: 830px;
    height: 120px;

    @media (max-width: 980px) {
      left: inherit;
      right: 0;
      max-width: 100%;
      height: 70px;
    }
  }

  svg.background:nth-of-type(2) {
    height: 120%;
    max-width: 40%;
    right: 0;
    left: inherit;

    @media (max-width: 980px) {
      left: -30%;
      right: inherit;
      transform: scaleX(-1);
      max-width: 100%;
      height: 120px;
    }
  }

  svg#responsive-bg {
    display: none;
    position: absolute;
    width: 100%;
    height: auto;
    right: 0;
    bottom: 0;

    @media (max-width: 980px) {
      display: block;
    }
  }

  > article {
    article {
      width: 50%;

      @media (max-width: 1300px) {
        width: 60%;
      }

      @media (max-width: 980px) {
        width: 100%;
      }
    }
  }
`

export default Landing
