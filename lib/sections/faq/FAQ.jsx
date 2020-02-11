import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FAQ = ({ data }) => {
  const [open, setOpen] = useState(null)

  const renderFaqs = () => {
    return data.map(({ q, a }, index) => {
      return (
        <div className={`accordion ${index === open ? 'open' : ''}`} key={q}>
          <div
            className="title"
            onClick={() => setOpen(index !== open ? index : null)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={index}
          >
            <h3>{q}</h3>
            <div className="toggle" />
          </div>
          <div className="content">
            <p>{a}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <Wrapper>
      <svg className="background" width="1267" height="779" viewBox="0 0 1267 779" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.8" cx="886.696" cy="380" rx="380.264" ry="380" fill="url(#paint_faq_linear_1)" />
        <ellipse opacity="0.2" cx="380.344" cy="399" rx="380.264" ry="380" fill="url(#paint_faq_linear_2)" />
        <defs>
          <linearGradient
            id="paint_faq_linear_1"
            x1="760.182"
            y1="399.098"
            x2="1219.11"
            y2="393.439"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset="1" stopColor="#30C9E8" />
          </linearGradient>
          <linearGradient
            id="paint_faq_linear_2"
            x1="253.831"
            y1="418.098"
            x2="712.756"
            y2="412.439"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset="0.399054" stopColor="#30C9E8" />
            <stop offset="0.886435" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity="0.48" />
          </linearGradient>
        </defs>
      </svg>

      <article>
        <h1>
          <small>FAQ</small>
          Frequent questions
        </h1>
        <div className="accordions-wrapper">{renderFaqs()}</div>
      </article>
    </Wrapper>
  )
}

FAQ.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.object.isRequired
    })
  ).isRequired
}

const Wrapper = styled.section`
  background: linear-gradient(147.62deg, #3979b8 8.92%, #65c0d1 79.89%);
  padding: 100px 0;
  position: relative;

  svg.background {
    min-width: 1200px;
    height: auto;
    position: absolute;
    top: 30px;
    right: 0;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
  }
  h1 {
    color: #ffffff;
    padding: 0 40px;
    small {
      opacity: 0.3;
    }
    @media (max-width: 980px) {
      padding: 0;
    }
  }

  article {
    max-width: 900px;
    box-sizing: border-box;

    .accordions-wrapper {
      margin-top: 50px;

      @media (max-width: 980px) {
        margin-top: 20px;
      }

      .accordion {
        position: relative;
        z-index: 0;
        padding: 0px 40px;
        transition: all 0.3s ease-out;
        opacity: 0.7;

        &:after {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 0;
          background: #ffffff;
          opacity: 0.1;
          left: 0;
        }

        h3 {
          color: #ffffff;
          width: calc(100% - 50px);
          text-transform: inherit;
        }

        .title {
          position: relative;
          padding: 30px 0px 0px;
          cursor: pointer;
        }

        .content {
          max-height: 0;
          transition: all 0.3s ease-out;
          overflow: hidden;
          box-sizing: border-box;

          &:before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            z-index: -1;
            background: transparent;
            box-shadow: none;
            transition: all 0.3s ease-out;
          }

          p {
            color: #ffffff;
            margin: 0;
            opacity: 0;
            transition: all 0.3s ease-out;
            padding: 0px 0px 50px 0px;

            a {
              color: #fff;
              text-decoration: underline;
            }
          }
        }

        .toggle {
          position: absolute;
          width: 38px;
          height: 38px;
          border-top: 2px solid #ffffff;
          top: 42px;
          right: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          z-index: 2;
        }

        .toggle:before {
          display: block;
          content: '';
          width: 100%;
          height: 2px;
          background: #ffffff;
          position: absolute;
          left: 0px;
          top: -2px;
          transition: all 0.2s ease-out;
          transform: rotate(90deg);
        }

        &.open {
          margin: 40px 0px;
          opacity: 1;
          &:after {
            visibility: hidden;
          }
          .content {
            max-height: 500px;
            transition: all 0.3s ease-out;

            &:before {
              background: linear-gradient(180deg, #6a99c2 0%, #80b9cf 100%);
              opacity: 0.7;
              box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
            }

            p {
              opacity: 1;
            }
          }
          .toggle:before {
            transform: rotate(0);
          }
        }
      }
    }
  }
`

export default FAQ
