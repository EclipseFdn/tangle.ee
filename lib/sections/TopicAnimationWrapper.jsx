import styled from 'styled-components'

const TopicAnimationWrapper = styled.div`
  position: relative;
  position: relative;
  width: 100%;
  margin-right: 100px;
  max-width: 460px;

  @media (max-width: 980px) {
    width: 100%;
  }

  &:before {
    content: '';
    display: block;
    padding-top: 100%; /* initial ratio of 1:1*/
  }

  &.animated {
    margin: 0px auto;

    @media (max-width: 980px) {
      text-align: left;
    }

    .lottie {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);

      > div {
        transform: translate3d(0, 0, 0) !important;
      }

      @media (max-width: 980px) {
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
      }
    }

    &.left {
      .lottie {
        left: 0;
        right: 0px;
      }
    }
  }
`

export default TopicAnimationWrapper
