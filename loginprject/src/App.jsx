import Signup from './Signup'
import Login from './Login'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Faculties from './pages/Faculties'
import Photo from './pages/Photo'
import About from './pages/About'
import Login1 from './Login1'
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
          <Route path='/login1' element ={<Login1/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
