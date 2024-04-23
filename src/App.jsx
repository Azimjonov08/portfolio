import './App.scss'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Work from './pages/Work/Work'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    </>
  )
}

export default App
