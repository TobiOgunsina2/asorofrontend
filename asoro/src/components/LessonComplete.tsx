import React from 'react'
import { Link } from 'react-router-dom'

const LessonComplete = () => {
  return (
    <div>
      <h1>Lesson Complete</h1>
      <div className="bronze-points">
        <p>Bronze</p>
        <p>+10</p>
      </div>
      <div className="score">
        <p>Score</p>
        <p>100%</p>
      </div>
      <footer className="lesson-footer">
        <Link to='/'><button>Continue</button></Link>
      </footer>
    </div>
  )
}

export default LessonComplete
