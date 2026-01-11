import { useLocation, useNavigate } from 'react-router-dom'
import './../styles/Components.css'

function Navbar(){
  const location = useLocation();
  const navigate = useNavigate();

  return(
    <>
      <nav className='navbar'>
        <ul className="navbar-list">
          <li className="navbar-element logo">PROJEKT&nbsp;<span style={{color: "var(--accent)"}}>BERLIN</span></li>
          <li className={`navbar-element ${location.pathname === "/" ? "selected" : ""}`} onClick={() => navigate("/")}>O prezentacji</li>
          <li className={`navbar-element ${location.pathname.startsWith("/prezentacja") ? "selected" : ""}`} onClick={() => navigate("/prezentacja")}>Zobacz prezentację</li>
          <li className={`navbar-element ${location.pathname.startsWith("/galeria") ? "selected" : ""}`} onClick={() => navigate("/galeria")}>Galeria</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar 