import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NGO Foundation</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link to="/award" className="hover:text-yellow-300">Award</Link>
          <Link to="/education" className="hover:text-yellow-300">Education</Link>
          <Link to="/health" className="hover:text-yellow-300">Health</Link>
          <Link to="/tree-plantation" className="hover:text-yellow-300">Tree Plantation</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </div>

        {/* Mobile hamburger button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <Link to="/" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gallery" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/award" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Award</Link>
          <Link to="/education" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/health" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Health</Link>
          <Link to="/tree-plantation" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Tree Plantation</Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}

