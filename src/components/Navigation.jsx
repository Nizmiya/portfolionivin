import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'videos', 'photos', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setActiveSection(sectionId) // Set active state immediately
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navigation')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { id: 'home', label: 'Home', section: 'hero' },
    { id: 'about', label: 'About', section: 'about' },
    { id: 'videos', label: 'Videos', section: 'videos' },
    { id: 'photos', label: 'Photos', section: 'photos' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        {/* Logo/Brand */}
        <div className="navigation__brand">
          <h2 onClick={() => scrollToSection('hero')}>
            Loganathan Niventhan
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="navigation__menu">
          {navItems.map((item) => (
            <li key={item.id} className="navigation__item">
              <button 
                onClick={() => scrollToSection(item.section)}
                className={`navigation__link ${activeSection === item.section ? 'navigation__link--active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`navigation__mobile ${isMenuOpen ? 'navigation__mobile--open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="navigation__mobile-menu">
            {navItems.map((item) => (
              <li key={item.id} className="navigation__mobile-item">
                <button 
                  onClick={() => scrollToSection(item.section)}
                  className={`navigation__mobile-link ${activeSection === item.section ? 'navigation__mobile-link--active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 