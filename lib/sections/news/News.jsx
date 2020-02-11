import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const News = ({ children, className }) => (
  <Wrapper className={className || ''}>
    <article>{children}</article>
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="news-bg" x1="50%" y1="0" x2="50%" y2="10%" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3979B8" />
          <stop offset="1" stopColor="#65BFD1" />
        </linearGradient>
      </defs>
      <circle fill="url(#news-bg)" cx="250" cy="250" r="250" />
    </svg>
  </Wrapper>
)

News.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
News.defaultProps = {
  className: null
}

const Wrapper = styled.section`
  padding: 142px 0 126px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: -120px;

  @media (max-width: 980px) {
    padding-bottom: 60px;
  }

  > svg {
    position: absolute;
    width: 8000px;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  h2 {
    color: #fff;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;

    @media (max-width: 980px) {
      padding: 0 22px;
    }
  }

  .slick-list {
    overflow: visible;
  }

  .slick-slider {
    position: relative;
    z-index: 2;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 33.33%;
      height: calc(100% - 30px);
      width: 1px;
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      transform: translate(-15px, 0);

      @media (max-width: 980px) {
        display: none;
      }
    }
    &:after {
      left: 66.66%;
      transform: translate(15px, 0);
    }

    @media (min-width: 980px) {
      .slick-slide {
        li {
          position: relative;
          height: 100%;
          * {
            position: relative;
            z-index: 2;
          }
          &:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        &:hover li {
          &:after {
            background: linear-gradient(180deg, rgba(106, 153, 194, 0.7) 0%, rgba(128, 185, 207, 0.7) 100%);
            box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);
          }
        }

        &:nth-child(1) {
          li {
            padding-right: 66px;
          }
          &:hover li:after {
            left: -33px;
          }
        }
        &:nth-child(2) {
          li {
            padding: 0 34px;
          }
        }

        &:nth-child(3) {
          li {
            padding-left: 66px;
          }
          &:hover li:after {
            left: 33px;
          }
        }
      }
    }

    @media (max-width: 980px) {
      .slick-slide li {
        padding: 0 22px;
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
      color: #fff;
      z-index: 2;

      > div {
        float: right;
        margin-left: 10px;
      }

      @media (max-width: 980px) {
        position: relative;
        display: block;
        width: 240px;
        margin: 32px 0 0;
        left: 50%;
        width: 100%;
        max-width: 240px;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 980px) {
      padding: 0px;
    }
  }

  small {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    margin: 45px 0 15px;
  }

  h5 {
    color: #fff;
  }

  a {
    display: block;
    margin-bottom: 45px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
`

export default News
