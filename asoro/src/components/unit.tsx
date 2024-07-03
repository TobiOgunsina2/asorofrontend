import Lesson from "./lesson"
import '../styles/unit.css'

const Unit = () => {
  return (
      <div className="unit">
          <h2>Unit 1: Introductions</h2>
          <progress></progress>
          {/* Import api and generate lsit of lessons*/}
          <Lesson />
    </div>
  )
}

export default Unit
