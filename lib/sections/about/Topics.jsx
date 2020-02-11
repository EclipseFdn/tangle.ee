import React from 'react'
import Parallax from 'react-rellax'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Topics = ({ children }) => (
  <Wrapper>
    {children}
    <Parallax percentage={0} speed={0.8}>
      <svg className="background" width="657" height="815" viewBox="0 0 657 815" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="214.5" cy="442.5" r="442.5" fill="#EEF9FB" />
      </svg>
    </Parallax>
  </Wrapper>
)

Topics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding: 60px 0;
  position: relative;

  @media (max-width: 980px) {
    padding: 0px;
  }

  svg.background {
    position: absolute;
    left: 0;
    bottom: -100px;
    width: 480px;
    transform: translate(-10%, 10%);

    @media (max-width: 980px) {
      bottom: -220px;
      width: 400px;
    }
  }

  article {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    position: relative;
    z-index: 2;

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
  }
`

export default Topics
