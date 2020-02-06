import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Parallax from 'react-rellax'
import styled from 'styled-components'

import LinkAction from '@components/LinkAction'
import theme from '@style/theme'

const Distribution = ({ title, data, actionLink }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <Wrapper className="distribution">
      <svg width="920" height="920" viewBox="0 0 920 920" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8" filter="url(#filter0_f)">
          <circle cx="460" cy="460" r="380" fill="url(#distribution_linear_1)" />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0"
            y="0"
            width="920"
            height="920"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="distribution_linear_1"
            x1="333.574"
            y1="479.098"
            x2="792.182"
            y2="473.447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset="1" stopColor="#30C9E8" />
          </linearGradient>
        </defs>
      </svg>

      <article>
        <h2>{title}</h2>
        <Parallax speed={1.5} percentage={0}>
          <div className="distribution-wrapper">
            {data.map((item, index) => (
              <div onMouseLeave={() => setHovered(null)} className={`card ${hovered === index ? 'open' : ''}`} key={item.title}>
                <p className="quote">{item.quote}</p>
                <p className="bold blue title">{item.title}</p>
                <Picture className="img" onMouseEnter={() => setHovered(index)} backgroundURL={item.img} />
              </div>
            ))}
          </div>
        </Parallax>
      </article>
      {actionLink && (
        <article>
          <LinkAction to={actionLink.to}>{actionLink.label}</LinkAction>
        </article>
      )}
    </Wrapper>
  )
}

Distribution.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
  actionLink: PropTypes.shape().isRequired
}

const Picture = styled.div`
  background: url(${(props) => props.backgroundURL}) no-repeat 0% 0%;
  background-size: cover;
  border-radius: 50%;
`

const Wrapper = styled.section`
  padding: 80px 0;
  position: relative;

  article:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  svg {
    z-index: -1;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .distribution-wrapper {
    position: relative;
    min-height: 900px;

    @media (max-width: 980px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-top: 40px;
      align-items: center;
    }

    .card {
      width: 100%;
      max-width: 530px;
      border-radius: 10px;
      padding: 30px 60px 30px 219px;
      display: flex;
      align-items: center;
      position: relative;
      flex-direction: row;
      flex-wrap: wrap;
      min-height: 230px;
      position: absolute;
      transition: all 0.3s ease-in;

      &:nth-child(1) {
        left: 13%;
        top: 10%;
        z-index: 1;
      }
      &:nth-child(2) {
        left: 36%;
        top: 15%;
        z-index: 2;
      }
      &:nth-child(3) {
        left: 70%;
        top: 13%;
        z-index: 3;
      }
      &:nth-child(4) {
        left: 0;
        top: 49%;
        z-index: 1;
      }
      &:nth-child(5) {
        left: 31%;
        top: 50%;
        z-index: 2;
      }
      &:nth-child(6) {
        left: 10%;
        top: 83%;
        z-index: 1;
      }

      @media (max-width: 1450px) {
        &:nth-child(1) {
          left: 3%;
        }
        &:nth-child(2) {
          left: 26%;
        }
        &:nth-child(3) {
          left: 50%;
        }
      }

      @media (max-width: 980px) {
        position: relative;
        margin: 20px 0;
        z-index: 1 !important;
        &:nth-child(even) {
          left: 14%;
          right: inherit;
        }
        &:nth-child(odd) {
          left: -14%;
          right: inherit;
        }
      }

      @media (max-width: 600px) {
        position: relative;
        margin: 20px 0;
        padding: 219px 30px 30px 30px;
        &:nth-child(even),
        &:nth-child(odd) {
          left: 0%;
        }
      }

      .img {
        position: absolute;
        top: 50%;
        left: 36px;
        height: auto;
        transform: translate(0, -50%);
        width: 151px;
        height: 151px;
        @media (max-width: 600px) {
          right: 50%;
          left: 50%;
          transform: translate(-50%, 0);
          top: 40px;
        }
      }

      p {
        &.title {
          margin: 0;
          color: ${theme.colors.primary};
          font-family: 'Raleway', sans-serif;
          font-weight: bold;
        }
      }

      & {
        z-index: 0;
        p {
          opacity: 0;
          transition: all 0.3s ease-in;
        }
      }

      &.open {
        background: #fff;
        box-shadow: 0px 36px 58px rgba(0, 0, 0, 0.2);
        z-index: 10;
        transition: background 0.3s ease-in, box-shadow 0.3s ease-in;

        p {
          opacity: 1;
          transition: all 0.3s ease-in;
        }
      }

      @media (max-width: 980px) {
        background: #fff;
        box-shadow: 0px 36px 58px rgba(0, 0, 0, 0.2);
        z-index: 10;
        transition: none;

        p {
          opacity: 1;
          transition: none;
        }
      }
    }
  }
`

export default Distribution
