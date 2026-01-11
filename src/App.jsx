import './styles/HomePage.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./sites/HomePage.jsx"
import Gallery from './sites/Gallery.jsx'
import Navbar from './components/Navbar.jsx'
import GalleryDetails from './sites/GalleryDetails.jsx'
import Presentation from './sites/Presentation.jsx'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/galeria/:id' element={<GalleryDetails />} />
          <Route path='/prezentacja' element={<Presentation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
