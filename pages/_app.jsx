import React from 'react'
import App from 'next/app'
import initReactFastclick from 'react-fastclick'
import NProgress from 'nprogress'
import Router from 'next/router'
import styled from 'styled-components'

import GlobalStyle from '@style/global'
import Disclaimer from '@components/Disclaimer'
import Loader from '@animations/loader/Loader'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class Eclipse extends App {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
      global.document.getElementsByTagName('body')[0].className = 'loaded'
    }, 1500)

    initReactFastclick()
  }

  render() {
    const { Component } = this.props

    return (
      <>
        <GlobalStyle />
        <Spinner className={`${this.state.loading ? 'show' : 'hide'} spinner-wrapper`}>
          <Loader />
        </Spinner>
        <Component />
        <Disclaimer />
      </>
    )
  }
}

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100000;
  background: white;
  visibility: visible;
  opacity: 1;
  transition: all 0.6s;
  &.hide {
    visibility: hidden;
    opacity: 0;
    transition: all 0.6s;
  }
  .lottie {
    width: 100%;
    max-width: 200px;
  }
`

export default Eclipse
