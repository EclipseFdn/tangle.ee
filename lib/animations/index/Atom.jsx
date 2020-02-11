import React from 'react'
import styled, { keyframes } from 'styled-components'

const Atom = () => {
  return (
    <Wrapper className="atom">
      <div className="nucleus">
        {[0, 1, 2, 3, 4, 5, 6].map((n) => (
          <span key={n} />
        ))}
      </div>
      <div className="cloud">
        <span />
      </div>
    </Wrapper>
  )
}

const pulsate = keyframes`
	0% {
		transform: translateZ(-180px) scale(0, 0);
		opacity: 0;
	}
	25% {
		transform: translateZ(-90px) scale(0.75, 0.75);
		opacity: 0.2;
	}
	50% {
		transform: translateZ(0) scale(1, 1);
		opacity: 0.4;
	}
	75% {
		transform: translateZ(90px) scale(0.75, 0.75);
		opacity: 0.2;
	}
	100% {
		transform: translateZ(180px) scale(0, 0);
		opacity: 0;
	}
`

const pulsateMobile = keyframes`
	0% {
		transform: translateZ(-110px) scale(0, 0);
		opacity: 0;
	}
	25% {
		transform: translateZ(-60px) scale(0.75, 0.75);
		opacity: 0.2;
	}
	50% {
		transform: translateZ(0) scale(1, 1);
		opacity: 0.4;
	}
	75% {
		transform: translateZ(60px) scale(0.75, 0.75);
		opacity: 0.2;
	}
	100% {
		transform: translateZ(110px) scale(0, 0);
		opacity: 0;
	}
`

const Wrapper = styled.div`
  width: 680px;
  height: 680px;
  position: absolute;
  top: 53%;
  left: 50%;
  z-index: 3;
  background: radial-gradient(323px at 50% 50%, #21e5f0 0%, rgba(33, 229, 240, 0) 100%);
  transform: translate(0%, -65%);

  .nucleus {
    position: absolute;
    width: 340px;
    height: 340px;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform-origin: center center;
    transform: rotateX(-20deg) rotateZ(15deg) rotateY(45deg) translate(-100%, -60%);

    span {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: linear-gradient(90deg, #2333de 0.01%, #21e5f0 48.62%, #ffffff 100%);
      opacity: 0.4;
      transform-style: preserve-3d;
      animation: ${pulsate} 30s linear infinite reverse;
      transform: translateZ(-100px) scale(0, 0);

      &:nth-child(1) {
        animation-delay: -5s;
      }
      &:nth-child(2) {
        animation-delay: -10s;
      }
      &:nth-child(3) {
        animation-delay: -15s;
      }
      &:nth-child(4) {
        animation-delay: -20s;
      }
      &:nth-child(5) {
        animation-delay: -25s;
      }
      &:nth-child(6) {
        animation-delay: -30s;
      }
    }
  }

  @media (max-width: 980px) {
    width: 320px;
    height: 320px;
    background: radial-gradient(150px at 50% 50%, #21e5f0 0%, rgba(33, 229, 240, 0) 100%);
    transform: translate(-50%, -50px);
    top: 0px;

    .nucleus {
      width: 170px;
      height: 170px;

      span {
        animation: ${pulsateMobile} 30s linear infinite reverse;
      }
    }
  }
`

export default Atom
