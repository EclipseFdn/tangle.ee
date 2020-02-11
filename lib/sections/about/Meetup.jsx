import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Meetup = ({ children }) => (
  <Wrapper>
    <svg className="background" width="515" height="463" viewBox="0 0 515 463" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.8" cx="135" cy="83" r="380" fill="url(#meetup_paint_linear1)" fillOpacity="0.4" />
      <defs>
        <linearGradient
          id="meetup_paint_linear1"
          x1="8.5745"
          y1="102.098"
          x2="467.182"
          y2="96.4471"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898ED4" />
          <stop offset="1" stopColor="#30C9E8" />
        </linearGradient>
      </defs>
    </svg>
    <article>{children}</article>
  </Wrapper>
)

Meetup.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  background: linear-gradient(158.72deg, #3979b8 8.92%, #65c0d1 79.89%);
  padding: 100px 0;
  position: relative;

  svg.background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 50%;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    @media (max-width: 980px) {
      display: block;
    }

    > div,
    > aside {
      flex-grow: 1;
      flex-basis: 0;
      z-index: 1;
      position: relative;
    }
    h1 {
      color: #ffffff;
      small {
        opacity: 0.3;
      }
      @media (max-width: 980px) {
        padding: 0;
      }
    }
    p {
      color: #ffffff;
    }

    .animated {
      max-width: 600px;
      @media (max-width: 980px) {
        width: 100%;
      }
    }
  }
`

export default Meetup
