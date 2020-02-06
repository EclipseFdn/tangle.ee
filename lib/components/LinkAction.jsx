import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@style/theme'

const LinkAction = ({ children, to }) => <Wrapper href={to}>{children}</Wrapper>

LinkAction.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

const Wrapper = styled.a`
  display: inline-block;
  line-height: 60px;
  background: ${theme.colors.action};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  padding: 0 44px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 20px;
  text-align: center;

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    display: table;
    padding: 0 20px;
    width: 100%;
    max-width: 320px;
  }

  &:hover {
    color: #fff;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.3);
  }
`

export default LinkAction
