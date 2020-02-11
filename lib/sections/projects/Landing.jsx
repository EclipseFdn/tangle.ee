import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Landing = ({ children }) => (
  <Wrapper>
    <svg className="background" width="514" height="1386" viewBox="0 0 514 1386" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        opacity="0.9"
        rx="1050.5"
        ry="776"
        transform="matrix(-0.680204 0.733023 0.733023 0.680204 -399.62 451.879)"
        fill="url(#technolgies_landing_bg1)"
      />
      <defs>
        <linearGradient id="technolgies_landing_bg1" x1="0" y1="0" x2="1000" y2="1000" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" />
          <stop offset="0.399054" stopColor="#30C9E8" />
          <stop offset="0.886435" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
        </linearGradient>
      </defs>
    </svg>
    <svg className="background" width="1440" height="240" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.85"
        d="M1489.03 -1500.2C1852.25 -1181.09 1833.9 -575.937 1448.03 -148.556C1062.17 278.825 454.907 366.595 91.6803 47.4846C-271.546 -271.626 -253.194 -876.777 132.673 -1304.16C518.539 -1731.54 1125.8 -1819.31 1489.03 -1500.2Z"
        fill="url(#technolgies_landing_bg2)"
      />
      <defs>
        <linearGradient
          id="technolgies_landing_bg2"
          x1="124"
          y1="-461.224"
          x2="660.289"
          y2="-294.458"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3979B8" />
          <stop offset="1" stopColor="#65C0D1" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      className="background mobile"
      width="357"
      height="237"
      viewBox="0 0 357 237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse opacity="0.9" rx="420.5" ry="310.5" transform="matrix(-1 0 0 1 -63.5 -73.5)" fill="url(#technologies_bg_mobile)" />
      <defs>
        <linearGradient id="technologies_bg_mobile" x1="0" y1="0" x2="600" y2="317.638" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" />
          <stop offset="0.399054" stopColor="#30C9E8" />
          <stop offset="0.886435" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
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
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1190px) {
    min-height: calc(100vh - 60px);
  }

  @media (max-width: 980px) {
    background: url('/images/floating_man.svg');
    background-repeat: no-repeat;
    background-size: auto 70%;
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
    left: 0;
    z-index: -1;
  }

  svg.background:nth-child(1) {
    max-width: 460px;
    height: 120%;
    @media (max-width: 980px) {
      display: none;
    }
  }

  svg.background:nth-child(2) {
    max-width: 160%;
    height: 170px;
    top: -50px;
    @media (max-width: 980px) {
      display: none;
    }
  }

  svg.background.mobile {
    position: absolute;
    top: 0px;
    left: -50px;
    height: 80px;
    z-index: -1;
    display: none;

    @media (max-width: 980px) {
      display: block;
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
    display: flex;
    flex-direction: row-reverse;
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
