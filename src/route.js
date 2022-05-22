import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/register/register';



const AllRoutesApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoutesApp;