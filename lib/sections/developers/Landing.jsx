import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Landing = ({ children }) => (
  <Wrapper>
    <svg viewBox="0 0 1440 807" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="a" d="M0 0h1440v813H0z" />
        <linearGradient x1="83.365%" y1="102.513%" x2="143.708%" y2="101.769%" id="difference-1">
          <stop stopColor="#898ED4" offset="0%" />
          <stop stopColor="#30C9E8" offset="39.9%" />
          <stop stopColor="#65C0D1" offset="88.6%" />
          <stop stopColor="#65C0D1" stopOpacity=".48" offset="100%" />
        </linearGradient>
        <linearGradient x1="80.937%" y1="32.605%" x2="50.141%" y2="31.998%" id="difference-2">
          <stop stopColor="#3979B8" offset="0%" />
          <stop stopColor="#65C0D1" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M2430.5 0C3010.675 0 3481 470.325 3481 1050.5S3010.675 2101 2430.5 2101 1380 1630.675 1380 1050.5 1850.325 0 2430.5 0z"
        fill="url(#difference-1)"
        opacity=".9"
        transform="translate(-1324 -2019)"
      />
      <path
        d="M528.304 2730.503C25.83 2449.412-148.14 1817.332 139.74 1318.712 427.616 820.09 1068.327 643.75 1570.804 924.84c502.478 281.09 676.445 913.171 388.567 1411.791-287.878 498.62-928.589 674.962-1431.067 393.872z"
        fill="url(#difference-2)"
        opacity=".85"
        transform="translate(-1324 -2019)"
      />
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
    background: url('static/images/190226_long_tree_03.svg');
    background-repeat: no-repeat;
    background-size: auto 90%;
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

  > article {
    display: flex;
    flex-direction: row-reverse;

    article {
      width: 50%;

      h3{
        margin-bottom: 100px;
      }

      @media (max-width: 1300px) {
        width: 60%;
      }

      @media (max-width: 980px) {
        width: 100%;

        h3{
          margin-bottom: 32px;
        }
      }
    }
  }

  > svg {
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;

    @media (max-width: 980px) {
      width: 200%;
      left: 0;
    }
  }
`

export default Landing
