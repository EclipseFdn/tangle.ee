import React from 'react'
import Lottie from '@components/Lottie'

import data from './data/loader_blue.json'

const FileExplotion = () => {
  return (
    <>
      <div className="lottie">
        <Lottie className="g-opacity-1" width="100%" height="100%" data={data} loop />
      </div>
    </>
  )
}

export default FileExplotion
