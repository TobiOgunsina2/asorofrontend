import React from 'react'
import '../styles/header.css'

const Header = ({bgColor, completed}) => {
  return (
    <div className='container'>
      <div style={{width: `${completed}%`, backgroundColor: bgColor}} className='filler'>
        <span className='label'>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default Header
