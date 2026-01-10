import { useLocation } from 'react-router-dom'
import './../styles/Components.css'

function Navbar(){
  const location = useLocation();

  return(
    <>
      <nav className='navbar'>
        <ul className="navbar-list">
          <li className="navbar-element logo">PROJEKT&nbsp;<span style={{color: "var(--accent)"}}>BERLIN</span></li>
          <li className={`navbar-element ${location.pathname === "/" ? "selected" : ""}`}>O prezentacji</li>
          <li className={`navbar-element ${location.pathname === "/prezentacja" ? "selected" : ""}`}>Zobacz prezentację</li>
          <li className={`navbar-element ${location.pathname === "/galeria" ? "selected" : ""}`}>Galeria</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar