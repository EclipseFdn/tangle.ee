import React from 'react'
import { withCookies, useCookies } from 'react-cookie'
import styled from 'styled-components'

const Disclaimer = () => {
  const COOKIE_NAME = 'tangle-ee-cookie'
  const [cookies, setCookie] = useCookies([COOKIE_NAME])

  const dissmiss = () => {
    setCookie(COOKIE_NAME, true, { path: '/' })
  }

  return !cookies[COOKIE_NAME] ? (
    <Wrapper>
      <span className="disclaimer-text">
        This website uses cookies to ensure you get the best experience on our website.&nbsp;
        <a className="disclaimer-link" href="https://www.iota.org/research/privacy-policy">
          Learn more
        </a>
      </span>
      <button type="button" onClick={dissmiss}>
        Dismiss
      </button>
    </Wrapper>
  ) : null
}

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 99999;
  box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.2);
  background: #fff;

  @media (max-width: 780px) {
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .disclaimer-text {
    font-size: 15px;
    white-space: normal;
    margin-right: 20px;
    @media (max-width: 780px) {
      margin-bottom: 20px;
    }
  }

  .disclaimer-link,
  .disclaimer-link:hover,
  .disclaimer-link:visited {
    color: #009fe3;
  }

  button {
    all: unset;
    line-height: 60px;
    background: #ff4b47;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    padding: 0 44px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #fff;
      box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.3);
    }
  }
`

export default withCookies(Disclaimer)
