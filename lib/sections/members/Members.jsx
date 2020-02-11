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
  padding: 40px 0 90px;
  position: relative;
  background: #fff;

  @media (max-width: 980px) {
    padding-bottom: 50px;
  }

  h1 {
    margin-bottom: 20px;
  }
  h6 {
    margin-bottom: 60px;

    @media (max-width: 980px) {
      margin-bottom: 35px;
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
      width: 100%;
      height: 160px;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.1);

      a {
        width: 100%;
        height: 100%;
        display: block;
      }

      &:hover {
        img {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
    }
  }

  article {
    position: relative;
    > a {
      position: absolute;
      font-family: 'Raleway', sans-serif;
      font-size: 20px;
      top: 12px;
      right: 80px;
      line-height: 27px;
      color: ${theme.colors.primary};

      > div {
        float: right;
        margin-left: 10px;
      }

      @media (max-width: 980px) {
        position: static;
        display: block;
        width: 240px;
        margin: 0 auto;
      }
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
