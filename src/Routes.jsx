import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Notfound from './pages/NotFound';
import Hall from './pages/Hall';

// import PrivateRoute from './privateRoute.js';
// import { render } from "react-dom";


const AllRoutesApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/hall' element={<Hall />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoutesApp;