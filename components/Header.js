import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>Appify Intelligence</h1>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#services">Services</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}