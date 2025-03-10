'use client'
import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'light' : false
    }
    return false
  })

  const checkboxRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isDarkMode
    }
  }, [isDarkMode])

  return (
    <div className="theme-toggle-container">
      <label className="theme-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} ref={checkboxRef} />
        <span className="slider">
          <FaSun className={`fas icon sun-icon ${!isDarkMode ? 'hidden' : ''}`} />
          <FaMoon className={`fas icon moon-icon ${isDarkMode ? 'hidden' : ''}`} />
        </span>
      </label>
    </div>
  )
}

export default ThemeToggle
