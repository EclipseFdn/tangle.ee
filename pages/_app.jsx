import React from 'react'
import App from 'next/app'
import initReactFastclick from 'react-fastclick'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

import GlobalStyle from '@style/global'
import Disclaimer from '@components/Disclaimer'
import Loader from '@animations/loader/Loader'

import 'swiper/css/swiper.css'

import { GA_TRACKING_ID } from '../lib/gtag'

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
        <Head>
          <title>Tangle EE - Eclipse Working Group</title>
          <meta
            name="description"
            content="Tangle EE is a working group collaboration with the Eclipse Foundation. It provides a governed environment for organizations and contributors to develop new ideas and applications using IOTA technologies."
          />
          <meta name="twitter:card" value="summary" />
          <meta property="og:title" content="Tangle EE - Eclipse Working Group" />
          <meta property="og:type" content="video.other" />
          <meta property="og:url" content="https://tangle.ee" />
          <meta property="og:image" content="https://tangle.ee/images/tangleEE.png" />
          <meta
            property="og:description"
            content="Tangle EE is a working group collaboration with the Eclipse Foundation. It provides a governed environment for organizations and contributors to develop new ideas and applications using IOTA technologies."
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
`
            }}
          />
        </Head>
        <GlobalStyle />
        <Spinner className={`${this.state.loading ? 'show' : 'hide'} spinner-wrapper`}>
          <Loader />
        </Spinner>
        <div className="motherwrapper">
          <Component />
        </div>
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
