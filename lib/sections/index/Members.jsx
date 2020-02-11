import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@style/theme'

const Members = ({ children }) => (
  <Wrapper>
    <article>{children}</article>
    <svg viewBox="0 0 1439 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1439 18.9705V30H-1V15.9864C177.254 6.10553 422.845 0 694 0C991.494 0 1258.22 7.34918 1439 18.9705Z" />
    </svg>
  </Wrapper>
)

Members.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  background: linear-gradient(180deg, #eff4f8 0%, #f5fafb 100%);
  padding-bottom: 90px;
  position: relative;

  @media (max-width: 980px) {
    padding-bottom: 50px;
  }

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    @media (max-width: 980px) {
      margin-bottom: 35px;
    }
  }

  .video {
    position: relative;
    margin: 0 auto;
    padding: 75px 0;
    width: 100%;
    max-width: 670px;

    > div {
      display: block;
      position: relative;
      width: 100%;
      padding-top: 56.25%;
    }

    iframe {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    &:before {
      content: '';
      position: absolute;
      width: 366px;
      height: 366px;
      top: -10px;
      left: -160px;
      border-radius: 50%;
      background: linear-gradient(89.29deg, #898ed4 33.54%, #30c9e8 57.33%, #65c0d1 86.38%, rgba(101, 192, 209, 0.48) 93.15%);
      mix-blend-mode: normal;
      opacity: 0.7;

      @media (max-width: 980px) {
        width: 200px;
        height: 200px;
        top: 30px;
        left: -70px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 185px;
      height: 185px;
      bottom: 30px;
      right: 90px;
      border-radius: 50%;
      z-index: -1;
      background: linear-gradient(89.29deg, #898ed4 33.54%, #30c9e8 57.33%, #65c0d1 86.38%, rgba(101, 192, 209, 0.48) 93.15%);
      mix-blend-mode: normal;
      opacity: 0.6;

      @media (max-width: 980px) {
        width: 100px;
        height: 100px;
        bottom: 40px;
        right: 30px;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;

    @media (max-width: 980px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
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

    li {
      background: #fff;
      border-radius: 10px;
      transition: box-shadow 0.2s ease-out;
      width: 100%;
      height: 160px;
      position: relative;

      a {
        width: 100%;
        height: 100%;
      }

      &:hover {
        box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);

        img {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
    }
  }

  h2 > a,
  article > a {
    padding-top: 4px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 27px;
    color: ${theme.colors.primary};

    > div {
      float: right;
      margin-left: 10px;
    }

    @media (max-width: 980px) {
      display: none;
    }
  }

  article > a {
    position: static;
    display: none;
    width: 240px;
    margin: 0 auto;

    @media (max-width: 980px) {
      display: block;
    }
  }

  > svg {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    path {
      fill: #fff;
    }
  }
`

export default Members
