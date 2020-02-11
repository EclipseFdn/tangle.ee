import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeaderLink from '@components/HeaderLink'

import theme from '@style/theme'

const Header = () => {
  const [open, toggle] = useState(false)

  return (
    <Wrapper className={open ? 'open' : ''}>
      <Link href="/">
        <a href="/">
          <img alt="" src="/images/tangle-ee.svg" />
        </a>
      </Link>
      <div>
        <nav>
          <HeaderLink activeClassName="active" href="/">
            <a href="/">Home</a>
          </HeaderLink>
          <HeaderLink activeClassName="active" href="/organizations">
            <a href="/organizations">For Organizations</a>
          </HeaderLink>
          <HeaderLink activeClassName="active" href="/developers">
            <a href="/developers">For Developers</a>
          </HeaderLink>
          <HeaderLink activeClassName="active" href="/projects">
            <a href="/projects">Projects</a>
          </HeaderLink>
          <HeaderLink activeClassName="active" href="/members">
            <a href="/members">Members</a>
          </HeaderLink>
          <HeaderLink activeClassName="active" href="/about">
            <a href="/about">About IOTA</a>
          </HeaderLink>
          <a href="mailto:tangle-ee@iota.org">Contact</a>
          <div className="social">
            <a href="https://www.facebook.com/TheIOTAFoundation/" target="_blank" rel="noreferrer noopener">
              <img alt="facebook" src="/images/facebook-square.svg" />
            </a>
            <a href="https://www.instagram.com/iotafoundation/" target="_blank" rel="noreferrer noopener">
              <img alt="twitter" src="/images/twitter-square.svg" />
            </a>
            <a href="https://www.linkedin.com/company/iotafoundation/" target="_blank" rel="noreferrer noopener">
              <img alt="linkedin" src="/images/linkedin.svg" />
            </a>
          </div>
        </nav>
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="url(#menu-bg)" fillOpacity=".7" />
          <defs>
            <linearGradient id="menu-bg" x1="133.46" y1="210.052" x2="374.832" y2="207.077" gradientUnits="userSpaceOnUse">
              <stop stopColor="#007BD6" />
              <stop offset=".399" stopColor="#30C9E8" />
              <stop offset=".886" stopColor="#65C0D1" />
              <stop offset="1" stopColor="#65C0D1" stopOpacity=".48" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <button type="button" className="toggle" onClick={() => toggle(!open)}>
        <span />
        <span />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 10px 57.5575px rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  z-index: 120;

  img {
    margin-left: 32px;
    cursor: pointer;
  }

  nav {
    height: 110px;
    display: flex;
    a {
      position: relative;
      display: block;
      font-family: 'Raleway', sans-serif;
      font-size: 16px;
      height: 110px;
      color: #2f6193;
      padding: 46px 20px 0;
      transition: padding 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      &:before {
        content: '';
        height: 3px;
        position: absolute;
        bottom: 0px;
        left: 50%;
        background: ${theme.colors.action};
        width: 0%;
        transform: translate(-50%, 0);
        transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover,
      &.active {
        color: #2f6193;
        &:before {
          width: calc(100% - 20px);
        }
      }
      @media (min-width: 980px) {
        &:last-of-type {
          background: ${theme.colors.primary};
          color: #fff;
          padding: 47px 40px 0;
          margin-left: 20px;
          &:before {
            background: #fff;
          }
          &:hover {
            &:before {
              display: none;
            }
          }
        }
      }
    }
  }

  button,
  svg,
  .social {
    display: none;
  }

  @media (max-width: 1190px) {
    img {
      width: 225px;
    }
    nav {
      height: 70px;
      a {
        padding: 0 14px;
        font-size: 14px;
        height: 70px;
        line-height: 70px;
        white-space: nowrap;
        &:last-of-type {
          padding: 0 32px;
          margin-left: 6px;
        }
      }
    }
  }

  @media (max-width: 980px) {
    padding: 13px 0;

    img {
      margin-left: 10px;
      width: 210px;
    }

    nav {
      display: block;
      position: relative;
      z-index: 2;
      padding: 60px 7% 0;
      a {
        display: block;
        color: #fff;
        font-weight: 600;
        font-size: 31px;
        line-height: 66px;
        height: auto;
        padding-left: 40px;
        &:last-child {
          margin-left: 0px;
          padding-left: 40px;
          background: none;
          color: #fff;
        }
        &:before,
        &:after {
          display: none;
        }
      }
    }

    button {
      display: block;
      position: fixed;
      top: 10px;
      right: 30px;
      width: 40px;
      height: 40px;
      z-index: 99;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
      background: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      cursor: pointer;

      span,
      &:before,
      &:after {
        content: '';
        display: block;
        height: 3px;
        width: 25px;
        position: absolute;
        top: 20px;
        right: 10px;
        background: #2f6193;
        border-radius: 6px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      span:last-of-type {
        transform: scale(1, 0) rotate(90deg);
      }
      &:before {
        top: 13px;
        left: 5px;
      }
      &:after {
        top: 27px;
        width: 15px;
      }
    }

    > div {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background: rgba(213, 244, 251, 0.6);
      z-index: 98;
      transition: opacity 0.2s ease-out;
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    }

    svg {
      display: block;
      height: 250vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-75%, -75%);
      transition: all 1.2s cubic-bezier(0, 0, 0.2, 1);
    }

    .social {
      display: block;
      position: absolute;
      top: 80px;
      left: 40px;
      a {
        width: 24px;
        height: 24px;
        position: relative;
        padding: 0 !important;
        margin: 0;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0;
      }
    }

    &.open {
      button {
        span,
        &:before,
        &:after {
          background: #fff;
        }

        span:last-of-type {
          transform: scale(1, 1) rotate(90deg);
        }
        &:before,
        &:after {
          width: 0px;
          opacity: 0;
        }
        &:before {
          left: 0px;
        }
        &:after {
          right: 5px;
        }
        transform: rotate(-135deg);
      }

      svg {
        transform: translate(-45%, -80%);
      }

      > div {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  @media (max-width: 700px) {
    nav {
      a {
        font-size: 25px;
        line-height: 46px;
      }
      .social {
        top: 73px;
        left: 24px;
      }
    }
  }
`

export default Header
