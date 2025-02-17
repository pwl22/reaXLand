import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/problem', label: 'Problem' },
    { path: '/solution', label: 'Solution' },
    { path: '/contact', label: 'Contact Us' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            LeftMove
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${
                  location.pathname === path ? 'text-primary-600' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === path
                      ? 'bg-primary-50 text-primary-600'
                      : 'nav-link'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header