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
import Error from './pages/error';

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
          <Route path='*' element={<Error />} />
          

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
