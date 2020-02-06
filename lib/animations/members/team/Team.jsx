import React from 'react'
import Lottie from '@components/Lottie'
import styled from 'styled-components'

import team from './data/team.json'

const Team = () => {
  return (
    <Wrapper className="team-animation">
      <div className="lottie small-tree">
        <Lottie width="100%" height="100%" data={team} loop />
      </div>
    </Wrapper>
  )
}

export default Team

const Wrapper = styled.div`
  .lottie {
  }
`
