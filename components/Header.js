import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const isHomePage = router.pathname === '/'

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link href="/">
            <h1>Appify Intelligence</h1>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <li><a href="#services">Services</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#products">Products</a></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><a href="#contact">Contact</a></li>
            </>
          ) : (
            <>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#expertise">Expertise</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/case-studies" className={router.pathname === '/case-studies' ? 'active' : ''}>Case Studies</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </>
          )}
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