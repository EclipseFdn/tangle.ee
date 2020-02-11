import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Principles = ({ children }) => (
  <Wrapper>
    <article>
      {children}
      <img alt="" src="/images/principles.svg" />
    </article>
  </Wrapper>
)

Principles.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  margin-top: -80px;
  min-height: 900px;
  background: #fff;
  padding: 230px 0 250px;
  position: relative;
  overflow: hidden;

  @media (max-width: 980px) {
    padding-bottom: 150px;
  }

  h2 {
    color: #fff;
    position: relative;
    z-index: 2;
  }

  h4 {
    @media (max-width: 980px) {
      display: flex;
      align-items: center;
      padding-left: 90px;
      min-height: 85px;
    }
  }

  article > img {
    position: absolute;
    top: 0px;
    left: 50%;
    width: 140vw;
    min-width: 1660px;
    transform: translate(-55%, 0);
  }

  ul {
    position: relative;
    z-index: 2;
  }

  li {
    background: #fff;
    padding: 42px 40px 22px 160px;
    width: 45%;
    margin: 0 0 0 auto;
    box-shadow: 0px 36px 58px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position: relative;
    &:nth-child(even) {
      margin: -120px 0 0 0;
    }

    img {
      position: absolute;
      left: 40px;
      width: 75px;
      @media (max-width: 1190px) {
        width: 60px;
        top: 45px;
      }
    }

    @media (max-width: 1190px) {
      width: 48%;
    }

    @media (max-width: 980px) {
      width: 100%;
      margin-bottom: 40px;
      padding: 32px;

      &:nth-child(even) {
        margin: 0 0 40px;
      }
    }
  }
`

export default Principles
