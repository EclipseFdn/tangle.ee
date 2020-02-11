import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Topics = ({ children }) => (
  <Wrapper>
    {children}
    <div className="decoration-1" />
    <div className="decoration-2" />
  </Wrapper>
)

Topics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding: 0;
  position: relative;

  @media (max-width: 980px) {
    padding: 0px;
    overflow: hidden;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    position: relative;
    z-index: 2;

    h1 {
      margin-bottom: 20px;
    }
    h6 {
      margin-bottom: 60px;
    }
    h2 {
      margin-top: 80px;
    }
    .topic-wrapper {
      margin-bottom: 40px;
    }

    @media (max-width: 980px) {
      display: block;
      margin-bottom: 40px;
    }

    aside,
    > div {
      flex-grow: 1;
      flex-basis: 0;
      z-index: 1;
    }

    aside {
      transform: translate(0, 20%);
      > .animated {
        @media (max-width: 980px) {
          width: 250px;
        }
      }
    }

    > div {
      padding: 60px 0;

      @media (max-width: 1190px) {
        padding: 0;
        margin-bottom: 130px;
      }
    }
    .team-animation .lottie {
      width: 200%;
      position: absolute;
      top: inherit;
      transform: translate(-40px, -490px);
      @media (max-width: 980px) {
        bottom: -60px;
        right: 50%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
  .decoration-1 {
    position: absolute;
    width: 911px;
    height: 961px;
    right: -500px;
    bottom: -300px;
    border-radius: 50%;
    background: linear-gradient(37.37deg, #898ed4 33.55%, #30c9e8 48.71%, rgba(101, 192, 209, 0.02) 96.41%);
    z-index: -1;
    @media (max-width: 980px) {
      bottom: -600px;
    }
  }
  .decoration-2 {
    position: absolute;
    width: 146px;
    height: 146px;
    right: -60px;
    top: -70px;
    border-radius: 50%;
    background: linear-gradient(89.29deg, #898ed4 33.54%, #30c9e8 93.15%);
    mix-blend-mode: normal;
    opacity: 0.8;
    @media (max-width: 980px) {
      top: inherit;
      bottom: 260px;
    }
  }
`

export default Topics
