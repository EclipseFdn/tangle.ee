import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Topics = ({ children }) => <Wrapper>{children}</Wrapper>

Topics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding-top: 60px;
  background: #fff;

  article {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 80px;
    position: relative;
    z-index: 2;

    @media (max-width: 980px) {
      display: block;
      margin-bottom: 40px;

      &:not(:last-of-type):after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 1px;
        width: 100px;
        background: #ff4b47;
        margin: 0 auto;
      }

      &:nth-of-type(3) {
        margin-bottom: -90px;
      }
    }

    aside,
    > div {
      flex-grow: 1;
      flex-basis: 0;
      z-index: 1;
    }

    aside {
      max-width: 100%;
    }

    @media (max-width: 980px) {
      aside {
        max-width: 100%;
      }
    }

    > div {
      padding: 60px 0;
      max-width: 460px;

      a {
        margin-bottom: 60px;
      }

      @media (max-width: 1190px) {
        max-width: none;
        padding: 0;
      }

      p:last-of-type {
        @media (max-width: 980px) {
          margin-bottom: 30px;
        }
      }
    }

    &:nth-child(even) {
      flex-direction: row;
      justify-content: flex-start;

      div {
        padding-right: 20px;

        @media (max-width: 1190px) {
          text-align: left;
          padding-right: 0px;
        }
      }
    }

    .animated {
      &:last-of-type {
      }
    }
  }
`

export default Topics
