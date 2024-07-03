import '../styles/progressBar.css'
import React from 'react'

const ProgressBar = ({bgcolor, completed}) => {

  return (
    <div className='container' >
      <div className='filler' >
        <span className='label' >{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
