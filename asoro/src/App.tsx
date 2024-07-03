import LessonPage from './components/LessonPage'
import Home from './components/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/lesson',
    element: <LessonPage/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
