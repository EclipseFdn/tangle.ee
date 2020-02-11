import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Parallax from 'react-rellax'
import styled from 'styled-components'

import theme from '@style/theme'

import Footer from '@sections/Footer'
import Climber from '@animations/index/climber/Climber'

const SlidingFooter = ({ children }) => {
  const footer = useRef()
  const footerInner = useRef()

  const updateFooter = () => {
    const footerHeight = footerInner.current ? footerInner.current.el : null

    if (footer.current && footerHeight) {
      const offset = Math.min(parseInt(footer.current.childNodes[0].style.transform.split(',')[1], 10), 0)
      footer.current.style.height = `${footerHeight.clientHeight + offset}px`
    }
  }

  return (
    <Wrapper ref={footer}>
      <Parallax ref={footerInner} onMove={updateFooter} speed={6} percentage={0}>
        <section className="join">
          <div>
            <article>{children}</article>
            <Climber />
          </div>
        </section>
        <Footer />
      </Parallax>
    </Wrapper>
  )
}

SlidingFooter.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.section`
  pointer-events: none;
  overflow: hidden;

  > div {
    position: absolute;
    width: 100%;
  }

  article,
  footer {
    pointer-events: all;
  }

  .join {
    position: relative;
    height: 880px;
    background: linear-gradient(-180deg, rgba(255, 255, 255, 0) 40%, #65bfd0 41%);
    pointer-events: none;

    @media (max-width: 980px) {
      height: auto;
      background: linear-gradient(-180deg, rgba(255, 255, 255, 0) 10%, #65bfd0 11%);
      padding-bottom: 20px;
    }

    > div {
      padding: 300px 0 0;
      position: relative;
    }

    article {
      position: relative;
      z-index: 2;
      margin: 0 auto;
      width: 100%;
      max-width: 1340px;
      padding: 0 80px;

      @media (max-width: 980px) {
        padding: 0 21px;
      }
    }

    h2 {
      color: #fff;
      margin-bottom: 85px;
      small {
        opacity: 0.5;
      }
    }

    nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 120px;

      @media (max-width: 980px) {
        display: block;
      }

      a {
        display: block;
        position: relative;
        background: #fff;
        box-shadow: 0px 36px 58px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 74px 100px 74px 240px;

        @media (max-width: 1190px) {
          padding: 190px 26px 74px 26px;
          margin-bottom: 42px;
        }

        strong {
          display: block;
          font-family: 'Raleway', sans-serif;
          font-size: 24px;
          color: ${theme.colors.primary};
          margin-bottom: 28px;
        }

        small {
          font-size: 14px;
          line-height: 27px;
        }

        > div {
          position: absolute;
          bottom: 18px;
          right: 18px;
        }
      }

      .lottie,
      img {
        position: absolute;
        top: 50%;
        left: 18px;
        width: 210px;
        height: 210px;
        transform: translate(0, -40%);

        @media (max-width: 1190px) {
          top: 25px;
          left: 50%;
          height: 165px;
          width: auto;
          transform: translate(-50%, 0);
        }
      }
    }
  }
`

export default SlidingFooter
