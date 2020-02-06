import { createGlobalStyle } from 'styled-components'

import theme from '@style/theme'

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: 400;
    box-sizing: border-box;
    list-style: none;
    outline: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background: #f4fbfd;
    color: #595968;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: hidden;
    &.loaded{
      overflow: inherit;
    }
  }

  main {
    display: block;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1920px;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  .lottie {
    pointer-events: none;
  }

  section{
    z-index: 0;
  }

  section > article,
  section .forcearticle,
  footer > article {
    margin: 0 auto;
    width: 100%;
    max-width: 1340px;
    padding: 0 80px;

    @media (max-width: 600px) {
      padding: 0 22px;
    }
  }

  footer > article + article{
    @media (max-width: 600px) {
      position: relative;
      bottom: 20px;
      text-align: center;
    }
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Inter-Regular.woff2') format('woff2'), url('/fonts/Inter-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Inter-Bold.woff2') format('woff2'), url('/fonts/Inter-Bold.woff') format('woff');
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-feature-settings: "liga" 0;
  }

  h1 {
    font-size: 52px;
    line-height: 61px;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 28px;

    @media (max-width: 980px) {
      font-size: 28px;
      line-height: 31px;
    }
  }

  h2{
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 35px;

    @media (max-width: 980px) {
      font-size: 24px;
      margin-bottom: 25px;
    }
  }

  h1,
  h2{
    small {
      display: block;
      font-size: 16px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
      letter-spacing: 8px;
      margin-bottom: 20px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 28px;
    color: ${theme.colors.secondary};
    margin-bottom: 32px;

    @media (max-width: 980px) {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }

  h4,
  h5 {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 500;
    color: ${theme.colors.primary};
  }

  h6 {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 300;
    color: ${theme.colors.primary};
  }

  // h6 {
  //   color: #2f6193;
  // }

  p {
    font-size: 14px;
    line-height: 25px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px;
  }

  small,
  a {
    font-family: 'Inter', sans-serif;
  }

  a {
    color: #595968;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &.action-color{
      color: ${theme.colors.action};
    }
  }

  ul.bullet-list {
    font-size: 14px;
    line-height: 25px;
    font-family: 'Inter', sans-serif;
    padding: 10px 0 0px 20px;
    text-align: left;

    li {
      margin-left: 10px;
      list-style-type: circle;
    }
  }

  // custom CSS classes
  .semi-bold{
    font-weight: 600;
  }

  .bold{
    font-weight: 700;
  }

  a.action-button{

  }
`

export default GlobalStyle
