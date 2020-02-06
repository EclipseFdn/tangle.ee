import React from 'react'
import Lottie from '@components/Lottie'
import styled from 'styled-components'

import bigTreeData from './data/growing_tree.json'
import smallTree1Data from './data/tree_1.json'
import smallTree2Data from './data/tree_2.json'
import smallTree3Data from './data/tree_3.json'
import womanWithCaneData from './data/woman_with_cane.json'

const GrowingTree = () => {
  return (
    <Wrapper className="growing-tree">
      <div className="lottie small-tree">
        <Lottie width="100%" height="100%" data={smallTree1Data} loop />
      </div>
      <div className="lottie small-tree">
        <Lottie width="100%" height="100%" data={smallTree2Data} loop />
      </div>
      <div className="lottie small-tree">
        <Lottie width="100%" height="100%" data={smallTree3Data} loop />
      </div>
      <div className="lottie big-tree">
        <Lottie width="100%" height="100%" data={bigTreeData} loop />
      </div>
      <div className="lottie woman">
        <Lottie width="100%" height="100%" data={womanWithCaneData} loop />
      </div>
    </Wrapper>
  )
}

export default GrowingTree

const Wrapper = styled.div`
  .lottie {
    &.big-tree {
      bottom: 0;
      width: 130%;
      top: inherit;
      position: absolute;
      left: 50%;
      margin: auto;
      transform: translate(-60%, 0);
    }
    &.woman {
      bottom: 0;
      width: 50%;
      top: inherit;
      position: absolute;
      left: 0;
      margin: auto;
      transform: translate(0%, 10%);
    }
    &.small-tree {
      &:nth-of-type(1) {
        position: absolute;
        bottom: 0;
        transform: translate(-50%, 0%);
        top: inherit;
        left: 0;
        width: 40%;
      }
      &:nth-of-type(2) {
        position: absolute;
        bottom: 0;
        transform: translate(50%, -60%);
        top: inherit;
        right: 0;
        width: 10%;
      }
      &:nth-of-type(3) {
        position: absolute;
        bottom: 0;
        transform: translate(0%, -35%);
        top: inherit;
        right: 0;
        width: 15%;
      }
    }
  }
`
