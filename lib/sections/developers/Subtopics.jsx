import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Subtopics = ({ children }) => (
  <Wrapper>
    {children}

    <svg className="background" width="1376" height="206" viewBox="0 0 1376 206" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="320.856" cy="419.028" rx="1054.88" ry="418.868" fill="url(#developers_tree_bg1)" fillOpacity="0.2" />
      <defs>
        <linearGradient
          id="developers_tree_bg1"
          x1="-76.292"
          y1="407.692"
          x2="1241.1"
          y2="478.666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898ED4" />
          <stop offset="0.241" stopColor="#30C9E8" />
          <stop offset="0.725" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
    <svg className="background" width="1018" height="266" viewBox="0 0 1018 266" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="706.708" cy="419" rx="705.929" ry="419" fill="url(#paint0_linear)" fillOpacity="0.5" />
      <defs>
        <linearGradient id="paint0_linear" x1="377.096" y1="160.365" x2="1275.96" y2="550.578" gradientUnits="userSpaceOnUse">
          <stop stopColor="#898ED4" stopOpacity="0.41" />
          <stop offset="0.475" stopColor="#30C9E8" />
          <stop offset="0.886" stopColor="#65C0D1" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
        </linearGradient>
      </defs>
    </svg>
  </Wrapper>
)

Subtopics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  position: relative;
  flex-wrap: wrap;
  padding-bottom: 300px;

  svg.background {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0.3;
    &:nth-of-type(1) {
      left: 0;
    }
    &:nth-of-type(2) {
      right: -300px;
    }
    @media (max-width: 980px) {
      display: none;
    }
  }

  article {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin-bottom: 30px;

    > div,
    > h3 {
      width: 50%;

      @media (max-width: 1300px) {
        width: 60%;
      }

      @media (max-width: 980px) {
        width: 100%;
      }
    }

    > div {
      position: relative;
      padding: 0px 0px 0px 240px;
      @media (max-width: 980px) {
        padding: 140px 0px 0px 0px;
      }
    }

    .lottie {
      position: absolute;
      left: 0px;
      width: 240px;
      height: 240px;
      top: 50%;
      transform: translate(0, -60%);
      @media (max-width: 980px) {
        left: 0px;
        right: 0px;
        margin: 0 auto;
        transform: translate(0, -100%);
      }
    }

    @media (max-width: 1300px) {
      width: 100%;
    }

    @media (max-width: 980px) {
      width: 100%;
      margin-bottom: 70px;
      position: relative;
      padding-bottom: 40px;
      // &:first-of-type {
      //   margin-bottom: 0px;
      // }
      &:not(:last-of-type):after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 1px;
        width: 100px;
        background: #ff4b47;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 980px) {
    width: 100%;
    padding-bottom: 0;
  }
`

export default Subtopics
