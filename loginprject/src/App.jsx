import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Faculties from './pages/Faculties'
import Photo from './pages/Photo'
import About from './pages/About'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/photo' element ={<Photo/>}></Route>
          <Route path='/faculties' element ={<Faculties/>}></Route>
          <Route path='/signup' element ={<Signup/>}></Route>
          <Route path='/login' element ={<Login/>}></Route>
          <Route path='/about' element ={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
