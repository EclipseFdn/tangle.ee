import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Slider from '@components/Slider'
import LinkArrow from '@components/LinkArrow'

// slider config
const newsSlider = {
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
}

const News = ({ children, className }) => {
  const [events, setEvents] = useState(null)
  const [news, setNews] = useState(null)

  useEffect(() => {
    fetch('https://newsroom.eclipse.org/api/news?parameters%5Bpublish_to%5D=tangle_ee')
      .then((data) => data.json())
      .then((result) => setNews(result.news))

    fetch('https://newsroom.eclipse.org/api/events?parameters%5Bpublish_to%5D=tangle_ee')
      .then((data) => data.json())
      .then((result) => setEvents(result.events))
  }, [])

  const renderedNews =
    news && news.length
      ? news
          .filter((newItem, i) => {
            return (events && i > 1) || i > 2 ? false : true
          })
          .map(({ date, title, body, link }, i) => {
            const jsDate = new Date(Date.parse(date))
            const formattedDate = `${jsDate.getDate()}.${jsDate.getMonth()}.${jsDate.getFullYear()}`
            return (
              <li className="newItem" key={i}>
                <small>{formattedDate}</small>
                <h5>{title}</h5>
                <p>{body}</p>
                <a target="_blank" href={link}>
                  Read more
                </a>
              </li>
            )
          })
      : ''

  const renderedEvent =
    events &&
    events.length &&
    events
      .filter((event, index) => index === 0)
      .map(({ date, title, description, infoLink }, i) => {
        const jsDate = new Date(Date.parse(date))
        const formattedDate = `${jsDate.getDate()}.${jsDate.getMonth()}.${jsDate.getFullYear()}`
        return (
          <li className="eventItem" key={i}>
            <small>{formattedDate}</small>
            <h5>{title}</h5>
            <p>{description}</p>
            <a target="_blank" href={infoLink}>
              Read more
            </a>
          </li>
        )
      })

  return (
    <Wrapper className={className || ''}>
      <article>
        <div className="news-heading">
          <h2>Latest News</h2>
          <LinkArrow target="_blank" arrowPosition="start" reverse to="https://newsroom.eclipse.org/audience/tangle_ee/news">
            See all
          </LinkArrow>
        </div>
        <Slider settings={newsSlider}>{renderedNews}</Slider>
      </article>
      <article className="no-slider">
        {renderedEvent && (
          <div className="events-heading">
            <div>
              <h2>Latest News</h2>
              <LinkArrow target="_blank" arrowPosition="start" reverse to="https://newsroom.eclipse.org/audience/tangle_ee/news">
                See all
              </LinkArrow>
            </div>
            <div>
              <h2>Latest Events</h2>
              <LinkArrow target="_blank" arrowPosition="start" reverse to="https://events.eclipse.org/">
                See all
              </LinkArrow>
            </div>
          </div>
        )}
        <div>
          {renderedNews}
          {renderedEvent}
        </div>
      </article>
      <Backgrounds>
        <div className="big-circle"></div>
        <div className="big-left-circle"></div>
        <div className="big-right-circle"></div>
        <div className="litle-light-left-circle"></div>
        <div className="litle-light-right-circle"></div>
      </Backgrounds>
    </Wrapper>
  )
}

News.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
News.defaultProps = {
  className: null,
}

const Backgrounds = styled.div`
  overflow: visible;
  position: absolute;
  height: 1000px;
  width: 100%;
  top: 30px;

  @media (min-width: 980px) {
    top: 10px;
  }

  div {
    position: absolute;
    mix-blend-mode: normal;
  }

  .big-circle {
    left: -934px;
    width: 3200px;
    height: 1500px;
    background: linear-gradient(139.21deg, #3979b8 33.92%, #65c0d1 69.89%);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  .big-left-circle {
    width: 760px;
    height: 760px;
    left: -110px;
    top: 120px;
    background: linear-gradient(89.29deg, #898ed4 33.54%, #30c9e8 57.33%, #65c0d1 86.38%, rgba(101, 192, 209, 0.48) 93.15%);
    mix-blend-mode: normal;
    opacity: 0.2;
    border-radius: 50%;

    @media (max-width: 980px) {
      top: 150px;
    }
  }

  .big-right-circle {
    border-radius: 50%;
    width: 729px;
    height: 694px;
    right: -150px;
    top: 40px;
    background: linear-gradient(90deg, #5184c1 0%, #30c9e8 100%);
    opacity: 1;

    @media (max-width: 980px) {
      top: -10px;
    }
  }

  .litle-light-left-circle {
    width: 156px;
    height: 156px;
    right: calc(5% + 140px);
    bottom: 170px;
    background: #ffffff;
    opacity: 0.05;
    border-radius: 50%;
  }

  .litle-light-right-circle {
    width: 194px;
    height: 194px;
    right: 5%;
    bottom: 100px;
    background: #ffffff;
    opacity: 0.05;
    border-radius: 50%;
  }
`

const Wrapper = styled.section`
  padding: 142px 0 126px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: -120px;

  @media (max-width: 980px) {
    padding-bottom: 60px;
  }

  > svg {
    position: absolute;
    width: 8000px;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  h2 {
    color: #fff;
    margin-bottom: 28px;
    position: relative;
    z-index: 2;
  }

  .news-heading,
  .events-heading {
    @media (max-width: 980px) {
      padding: 0 22px;
    }
  }

  .slick-list {
    overflow: visible;
  }

  .slick-slider {
    position: relative;
    z-index: 2;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 33.33%;
      height: calc(100% - 30px);
      width: 1px;
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      transform: translate(-15px, 0);

      @media (max-width: 980px) {
        display: none;
      }
    }
    &:after {
      left: 66.66%;
      transform: translate(15px, 0);
    }

    a {
      font-weight: bold;
    }

    @media (min-width: 980px) {
      .slick-slide {
        li {
          position: relative;
          height: 100%;
          * {
            position: relative;
            z-index: 2;
          }
          &:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        &:hover li {
          &:after {
            background: linear-gradient(180deg, rgba(106, 153, 194, 0.7) 0%, rgba(128, 185, 207, 0.7) 100%);
            box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);
          }
        }

        &:nth-child(1) {
          li {
            padding-right: 66px;
          }
          &:hover li:after {
            left: -33px;
          }
        }
        &:nth-child(2) {
          li {
            padding: 0 34px;
          }
        }

        &:nth-child(3) {
          li {
            padding-left: 66px;
          }
          &:hover li:after {
            left: 33px;
          }
        }
      }
    }

    @media (max-width: 980px) {
      .slick-slide li {
        padding: 0 22px;
      }
    }
  }
  article {
    position: relative;

    &:not(.no-slider) {
      .news-heading {
        @media (min-width: 980px) {
          display: none;
        }
        a {
          position: relative;
          z-index: 2;
          font-size: 20px;
          margin-bottom: 5px;

          @media (min-width: 980px) {
            margin-bottom: 30px;
          }
        }
      }
    }

    > div:not(.events-heading):not(.news-heading) > a {
      position: absolute;
      font-family: 'Raleway', sans-serif;
      top: 12px;
      right: 80px;
      line-height: 27px;
      color: #fff;
      z-index: 2;

      > div {
        float: right;
        margin-left: 10px;
      }

      @media (max-width: 980px) {
        position: relative;
        display: block;
        width: 240px;
        margin: 32px 0 0;
        left: 50%;
        width: 100%;
        max-width: 240px;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 980px) {
      padding: 0px;
    }

    @media (min-width: 980px) {
      .slick-slider {
        display: none;
      }
    }

    &.no-slider {
      z-index: 2;

      @media (min-width: 980px) {
        .slick-slider {
          display: none;
        }
      }

      > div:not(.events-heading) {
        display: flex;
        justify-content: space-between;

        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 15px;
          left: 33.333%;
          height: calc(100% - 30px);
          width: 1px;
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          transform: translate(-15px, 0);

          @media (max-width: 980px) {
            display: none;
          }
        }
        &:after {
          left: 66.66%;
          transform: translate(15px, 0);
        }
        position: relative;
      }

      .events-heading {
        position: relative;
        display: flex;
        justify-content: space-between;

        > div {
          position: relative;
          a {
            position: relative;
            z-index: 2;
            font-size: 20px;
            margin-bottom: 5px;

            @media (min-width: 980px) {
              margin-bottom: 30px;
            }
          }
        }

        /* hide latest news on mobile */
        > div:nth-child(1) {
          flex: 2;
          @media (max-width: 980px) {
            display: none;
          }
        }

        > div:nth-child(2) {
          flex: 1;

          @media (min-width: 980px) {
            margin-left: 212px;
          }
        }
      }

      /* hide newItem in mobile */
      .newItem {
        display: none;
      }

      @media (min-width: 980px) {
        .newItem {
          display: block;
        }

        li {
          flex: 1;
          position: relative;
          height: 100%;
          padding: 0 35px;
          * {
            position: relative;
            z-index: 2;
          }
          &:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          &:hover {
            &:after {
              background: linear-gradient(180deg, rgba(106, 153, 194, 0.7) 0%, rgba(128, 185, 207, 0.7) 100%);
              box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.2);
            }
          }

          &:nth-child(1) {
            transform: translateX(-35px);
          }

          &:nth-child(3) {
            transform: translateX(35px);
          }

          a {
            font-weight: bold;
          }
        }
      }
      @media (max-width: 980px) {
        margin-top: 50px;

        li {
          padding: 0 22px;
          width: 100%;

          a {
            font-weight: bold;
          }
        }
      }
    }
  }

  small {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    margin: 45px 0 15px;
  }

  h5 {
    color: #fff;
  }

  a {
    display: block;
    margin-bottom: 45px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
`

export default News
