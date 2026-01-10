import './styles/HomePage.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./sites/HomePage.jsx"
import Gallery from './sites/Gallery.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/galeria' element={<Gallery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
