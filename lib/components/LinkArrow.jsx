import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '@style/theme'

const LinkArrow = ({ children, reverse, to, target }) => {
  return (
    <Link href={to}>
      <Wrapper
        href={to}
        className={reverse ? ' reverse' : ''}
        target={target}
        rel={target === '_blank' ? 'noreferrer noopener' : ''}
      >
        {children}
        <div>
          <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.936v2.03h8.627l-3.662 3.596L6.5 11.997l6-5.971L6.5 0 5.085 1.576l3.542 3.36z" />
          </svg>
          <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.936v2.03h8.627l-3.662 3.596L6.5 11.997l6-5.971L6.5 0 5.085 1.576l3.542 3.36z" />
          </svg>
        </div>
      </Wrapper>
    </Link>
  )
}

LinkArrow.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  to: PropTypes.string.isRequired,
  target: PropTypes.string
}

LinkArrow.defaultProps = {
  reverse: false,
  target: '_self'
}

const Wrapper = styled.a`
  > div:not(.lottie) {
    display: inline-block;
    position: relative;
    width: 28px;
    height: 28px;
    border: 2px solid ${theme.colors.primary};
    border-radius: 28px;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      position: absolute;
      top: 6px;
      left: 6px;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      path {
        fill: ${theme.colors.primary};
      }
      &:first-of-type {
        transform: translate(-20px, 0);
        path {
          fill: #fff;
        }
      }
    }
  }

  &:hover > div:not(.lottie) {
    background: ${theme.colors.primary};
    svg:first-of-type {
      transform: translate(0, 0);
    }
    svg:last-of-type {
      transform: translate(18px, 0);
    }
  }

  &.reverse {
    div {
      border-color: #fff;
      svg {
        path {
          fill: #fff;
        }
        &:first-of-type {
          path {
            fill: #3d7eba;
          }
        }
      }
    }
    &:hover div:not(.lottie) {
      background: #fff;
    }
  }
`

export default LinkArrow
