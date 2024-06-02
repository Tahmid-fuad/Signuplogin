// src/App.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Faculties from './pages/Faculties';
import Photo from './pages/Photo';
import About from './pages/About';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import ProtectedRoute from './pages/ProtectedRoute';
import Azadsir from './pages/faculty/Azadsir';
import Jahidsir from './pages/faculty/Jahidsir';
import Saifulsir from './pages/faculty/Saifulsir';
import Piyassir from './pages/faculty/Piyassir';
import Anissir from './pages/faculty/Anissir';
import Mamunsir from './pages/faculty/Mamunsir';
import Tayebamaam from './pages/faculty/Tayebamaam';
import Khadijamaam from './pages/faculty/Khadijamaam';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/faculties' element={<Faculties />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/azadsir' element={<Azadsir />} />
          <Route path='/Jahidsir' element={<Jahidsir />} />
          <Route path='/Saifulsir' element={<Saifulsir />} />
          <Route path='/Piyassir' element={<Piyassir />} />
          <Route path='/Anissir' element={<Anissir />} />
          <Route path='/Mamunsir' element={<Mamunsir />} />
          <Route path='/Tayebamaam' element={<Tayebamaam />} />
          <Route path='/Khadijamaam' element={<Khadijamaam/>} />
          
           

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path='/admin' element={<Admin />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path='/teacher' element={<Teacher />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path='/student' element={<Student />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
