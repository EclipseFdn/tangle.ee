import React from 'react'
import Parallax from 'react-rellax'
import Lottie from '@components/Lottie'
import styled from 'styled-components'

import mainTree from './data/code_tree_main.json'
import leftTree from './data/tree_left.json'
import rightTrees from './data/trees_right.json'

const CodeTree = () => {
  return (
    <Wrapper>
      <div className="rightTrees lottie">
        <Parallax speed={0.2} percentage={0}>
          <Lottie width="100%" height="100%" data={rightTrees} loop />
        </Parallax>
      </div>
      <div className="leftTree lottie">
        <Parallax speed={0.7} percentage={0}>
          <Lottie width="100%" height="100%" data={leftTree} loop />
        </Parallax>
      </div>
      <div className="mainTree lottie">
        <Parallax speed={1.5} percentage={0}>
          <Lottie width="100%" height="100%" data={mainTree} loop />
        </Parallax>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .lottie {
    &.mainTree {
      width: 640px;
      right: 0;
      left: 50%;
      transform: translate(-60%, -40%);
      @media (max-width: 980px) {
        width: 100%;
        min-width: 330px;
        right: 0;
        left: 50%;
        transform: translate(-60%, -50%);
      }
    }
    &.rightTrees {
      right: 0;
      bottom: 0;
      width: 90px;
      transform: translate(-60%, 80%);
      @media (max-width: 980px) {
        width: 50px;
        transform: translate(-120px, 130px);
      }
      @media (max-width: 420px) {
        transform: translate(-50px, 60px);
      }
    }
    &.leftTree {
      left: 0;
      bottom: 0;
      width: 140px;
      transform: translate(-10%, 80%);
      @media (max-width: 980px) {
        width: 70px;
        transform: translate(70px, 80px);
      }
      @media (max-width: 420px) {
        transform: translate(20px, 50px);
      }
    }
  }
`

export default CodeTree
