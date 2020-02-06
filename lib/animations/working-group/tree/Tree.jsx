import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import layer1Data from './data/tree_1.json'
import layer2Data from './data/tree_2.json'
import layer3Data from './data/tree_3.json'
import layer4Data from './data/tree_organisation.json'

const FileExplotion = () => {
  const options1 = {
    loop: true,
    animationData: layer1Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options2 = {
    loop: true,
    animationData: layer2Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options3 = {
    loop: true,
    animationData: layer3Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const options4 = {
    loop: true,
    animationData: layer4Data,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper className="animated">
      <svg id="grassland" width="1440" height="642" fill="none">
        <mask id="a" maskUnits="userSpaceOnUse" x="-76" y="0" width="1516" height="642">
          <path fill="#EAF6F8" fillOpacity=".2" d="M-76 0h1516v641.753H-76z" />
        </mask>
        <g mask="url(#a)">
          <ellipse cx="1135.22" cy="554.091" rx="1105.94" ry="501.511" fill="url(#orgs_topics_tree1)" fillOpacity=".5" />
          <ellipse cx="266.679" cy="626.221" rx="1105.94" ry="501.511" fill="url(#orgs_topics_tree2)" fillOpacity=".2" />
        </g>
        <defs>
          <linearGradient
            id="orgs_topics_tree1"
            x1="618.833"
            y1="244.525"
            x2="1883.95"
            y2="963.388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" stopOpacity=".41" />
            <stop offset=".475" stopColor="#30C9E8" />
            <stop offset=".886" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity=".48" />
          </linearGradient>
          <linearGradient
            id="orgs_topics_tree2"
            x1="-149.694"
            y1="612.649"
            x2="1232.41"
            y2="677.849"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#898ED4" />
            <stop offset=".241" stopColor="#30C9E8" />
            <stop offset=".725" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity=".02" />
          </linearGradient>
        </defs>
      </svg>
      <div className="lottie">
        <Lottie width="410" height="410" options={options3} loop />
      </div>
      <div className="lottie">
        <Lottie width="410" speed={0} height="410" options={options2} loop />
      </div>
      <div className="lottie">
        <Lottie width="111" height="181" options={options1} loop />
      </div>
      <div className="lottie">
        <Lottie width="410" speed={0} height="410" options={options4} loop />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 1px;
  z-index: 3;
  height: 350px;
  right: 0;
  bottom: -450px;

  /* @media (max-width: 700px) {
    display: none;
  } */

  > svg {
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0;
    right: 0;

    ellipse:nth-of-type(1) {
      opacity: 0.2;
    }
    ellipse:nth-of-type(2) {
      opacity: 0.5;
    }
  }

  &.animated {
    margin: 0px auto;

    .lottie {
      position: absolute;

      &:nth-of-type(1) {
        width: 30px;
        right: 15%;
        bottom: 167px;
      }

      &:nth-of-type(2) {
        width: 42px;
        right: 16%;
        bottom: 162px;
      }

      &:nth-of-type(3) {
        width: 112px;
        right: 24%;
        bottom: 155px;
      }

      &:nth-of-type(4) {
        width: 100px;
        right: 21%;
        bottom: 110px;
      }
    }
  }
`

export default FileExplotion
