import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@style/theme'

const Topics = ({ children }) => (
  <Wrapper>
    <svg className="section-background" width="377.953" height="1243.337" viewBox="0 0 100 328.966">
      <defs>
        <clipPath id="a">
          <path d="M-39.979-76.893h377.797v1243.498H-39.979z" fill="#334549" strokeWidth="1.011" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.26458 0 0 .26458 10.845 20.302)" fill="none">
        <path
          d="M127.518 79.408c259 227.543 280.782 620.426 48.652 877.528-232.13 257.11-630.268 281.07-889.268 53.53-258.999-227.544-280.782-620.428-48.652-877.532 232.13-257.104 630.268-281.068 889.268-53.526z"
          opacity=".05"
          fill="#009fe3"
        />
        <path
          d="M75.027 137.548c226.654 199.125 245.716 542.943 42.577 767.938-203.14 224.994-551.557 245.964-778.211 46.842-226.654-199.126-245.716-542.944-42.576-767.939 203.14-224.995 551.556-245.967 778.21-46.841z"
          opacity=".05"
          fill="#009fe3"
        />
      </g>
    </svg>
    <svg
      className="section-background"
      id="section-bg_absolute_positioned"
      width="1219"
      height="1282"
      viewBox="0 0 1219 1282"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="640.176"
        cy="641.075"
        r="639.918"
        transform="rotate(-105.812 640.176 641.075)"
        fill="url(#tech_topics_bigcircle_bg)"
      />
      <defs>
        <linearGradient
          id="tech_topics_bigcircle_bg"
          x1="421.185"
          y1="845.584"
          x2="1080.06"
          y2="-64.4128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898ED4" />
          <stop offset="0.241159" stopColor="#30C9E8" />
          <stop offset="1" stopColor="#65C0D1" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>

    {children}
  </Wrapper>
)

Topics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding-top: 0;
  position: relative;
  margin-bottom: 500px;

  @media (max-width: 980px) {
    margin-bottom: 350px;
  }

  svg.section-background:nth-child(1) {
    position: absolute;
    top: 200px;
    left: 0;
    @media (max-width: 980px) {
      display: none;
    }
  }

  svg.section-background:nth-child(2) {
    position: absolute;
    top: 39%;
    right: 0;
    width: 74%;
    height: auto;
    opacity: 0.2;
    @media (max-width: 980px) {
      display: none;
    }
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-of-type(even) {
      display: flex;
      flex-direction: row-reverse;
      text-align: right;

      .resources {
        @media (min-width: 980px) {
          justify-content: flex-end;
        }
        a {
          margin-right: inherit;
          margin-left: 30px;
        }
      }

      @media (max-width: 980px) {
        text-align: left;
      }
    }

    @media (max-width: 980px) {
      &,
      &:nth-of-type(even),
      &:nth-of-type(odd) {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 40px;
        position: relative;
        padding-bottom: 40px;
        flex-direction: row;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 1px;
          width: 100px;
          background: ${theme.colors.action};
          margin: 0 auto;
        }
      }
    }

    aside,
    > div {
      flex-grow: 1;
      flex-basis: 0;
      @media (max-width: 980px) {
        flex: 1 0 100%;
      }
    }
  }
`

export default Topics
