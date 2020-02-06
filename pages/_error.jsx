import React from 'react'
import styled from 'styled-components'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import NotFound from '@sections/NotFound'
import News from '@sections/news/News'

import Slider from '@components/Slider'

const Error = () => {
  const blogSlider = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }
  return (
    <Wrapper>
      <Header />
      <NotFound />
      <News className="news">
        <h2>Latest News</h2>
        <Slider settings={blogSlider}>
          <li>
            <small>12.01.19</small>
            <h5>Tangle EE v1.1 has Been Released</h5>
            <p>
              Tangle EE provides a meeting point for outside talent and expertise across organisations and environments by
              lowering barriers to participation. This collaboration expands the pool of ideas and solutions, creating a sum
              greater than its parts.
            </p>
            <a href="/">Read more</a>
          </li>
          <li>
            <small>13.01.19</small>
            <h5>IRI Community Specification Review</h5>
            <p>
              Tangle EE provides a meeting point for outside talent and expertise across organisations and environments by
              lowering barriers to participation. This collaboration expands the pool of ideas and solutions, creating a sum
              greater than its parts.
            </p>
            <a href="/">Read more</a>
          </li>
          <li>
            <small>14.01.19</small>
            <h5>Eclipse Trinity Has Been Released</h5>
            <p>
              Tangle EE provides a meeting point for outside talent and expertise across organisations and environments by
              lowering barriers to participation. This collaboration expands the pool of ideas and solutions, creating a sum
              greater than its parts.
            </p>
            <a href="/">Read more</a>
          </li>
        </Slider>
      </News>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .news {
    margin-top: 0px;
    background: linear-gradient(154.95deg, #3979b8 8.92%, #65c0d1 79.89%);

    > svg {
      display: none;
    }
  }
`

export default Error
