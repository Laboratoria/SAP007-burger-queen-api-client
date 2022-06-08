import { Home } from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HallAttendance from "./pages/HallAttendance"
import HallKitchen from "./pages/HallKitchen"
import { Client } from "./pages/Client"

import { PrivatePages } from "./services/PrivatePages"
import { Footer } from "./layout/Footer"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

export function App() {
  return (
    <Router>
      <img className="background" src={require('./images/BackgroundHeroes.jpg')} alt="imagem-heroes" />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Client' element={<Client />} />
        <Route path='HallAttendance' element={<PrivatePages redirectTo='/'>
          <HallAttendance /> </PrivatePages>} />
        <Route path='HallKitchen' element={<PrivatePages redirectTo='/'>
          <HallKitchen /> </PrivatePages>} />
        <Route path='/' element={<Navigate replace to='/' />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
