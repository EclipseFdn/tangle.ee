import React from 'react'
import styled from 'styled-components'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import NotFound from '@sections/NotFound'

const Error = () => {
  return (
    <Wrapper>
      <Header />
      <NotFound />
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
