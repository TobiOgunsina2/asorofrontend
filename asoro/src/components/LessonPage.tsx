import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {lessonComponents} from '../components/Lesson Types/importComponents'
import LessonComplete from './LessonComplete'

const LessonPage = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    let slideStack = [...lessonComponents]//Change to API call to get lesson plan
    const changeLessonComponent = () => {
        console.log(slideNumber)
        setSlideNumber(slideNumber+1)
           
            
    }

  return (
    slideNumber>7/*Change to slide number from API */?
        <LessonComplete/>:
    <div>
      <progress></progress>
      <Link to={'/'}><button>X</button></Link>
      
      {slideStack[slideNumber]()}

      <footer className="lesson-footer">
        <button onClick={()=>changeLessonComponent()}>Continue</button>
      </footer>
    </div>
  )
}

export default LessonPage
