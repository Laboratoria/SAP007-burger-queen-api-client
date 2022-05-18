import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Kitchen from './pages/Kitchen'
import Hall from './pages/Hall'
import Footer from './components/layout/Footer'
import Register from './pages/Register'
import Container from './components/layout/Container'


function App() {

  return (
    <Router>
      <Container customClass="min-height">
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Hall" element={<Hall/>}></Route>
      <Route path="/Kitchen" element={<Kitchen/>}></Route>
    </Routes>
    <Footer/>
    </Container>
  </Router>
  )
}

export default App;
