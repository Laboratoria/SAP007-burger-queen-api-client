import { Attendance } from "./pages/Attendance"
import { Client } from "./pages/Client"
import { Home } from "./pages/Home"
import { Kitchen } from "./pages/Kitchen"
import { Footer } from "./layout/Footer"
import { Navbar } from "./components/Navbar"


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Attendance' element={<Attendance />} />
          <Route path='/Client' element={<Client />} />
          <Route path='/Kitchen' element={<Kitchen />} />
        </Routes>
        <Navbar />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
