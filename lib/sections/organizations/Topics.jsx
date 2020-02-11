import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Topics = ({ children }) => <Wrapper>{children}</Wrapper>

Topics.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  padding-top: 0;

  @media (max-width: 980px) {
    margin-bottom: -50px;
  }

  article {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 980px) {
      display: block;
      margin-bottom: 0px;
    }

    aside,
    > div {
      flex-grow: 1;
      flex-basis: 0;
    }
    > div {
      @media (max-width: 980px) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
`

export default Topics
