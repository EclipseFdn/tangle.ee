import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tree from '@animations/index/tree/Tree'

const Progress = ({ children }) => (
  <Wrapper>
    <Tree />
    <article>
      <div>{children}</div>
    </article>
  </Wrapper>
)

Progress.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  position: relative;
  padding: 236px 0 50px;
  overflow: hidden;

  @media (max-width: 980px) {
    padding-bottom: 450px;
  }

  article {
    > div {
      margin: 0 0 0 auto;
      width: 450px;
      padding: 0;

      @media (max-width: 980px) {
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  .cta {
    margin-top: 25px;
  }

  .illustration-progress {
    position: absolute;
    top: -5%;
    left: 0%;
    width: 50%;
    height: 100%;

    > div {
      position: absolute;
      top: 0px;
      left: 0%;
      width: 100%;
      height: 100%;

      &:first-of-type {
        svg {
          width: 100%;
          max-width: 780px;
        }
      }
    }

    .lottie {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 120%;
    }

    @media (max-width: 980px) {
      width: 100%;
      left: 0px;
      top: -1%;
      height: 100%;

      > div:first-of-type {
        position: absolute;
        bottom: -10%;
        top: auto;
        left: -15%;
        width: 100vw;
        height: 100vw;
        max-width: 500px;
        max-height: 500px;
        overflow: hidden;
        svg {
          width: 100%;
          max-width: 390px;
        }
      }
    }
  }
`

export default Progress
