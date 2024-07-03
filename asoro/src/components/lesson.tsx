import '../styles/lesson.css'
import { Link } from 'react-router-dom'

const Lesson = ({}) => {
  return (
    <Link to={'lesson'}>
      <div className="lesson" onClick={()=>{console.log('click')}}>
        <h2 className="title">Bawo Ni!</h2>
        <h3 className="description">Learn to say hello and introduce yourself</h3>
      </div>
    </Link>
  )
}

export default Lesson
