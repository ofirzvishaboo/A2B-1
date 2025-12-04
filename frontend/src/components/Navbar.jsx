import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">A2B</a>
        </div>
        <button
          className={`navbar-burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#features" className="navbar-link" onClick={closeMenu}>Features</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={closeMenu}>Services</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

