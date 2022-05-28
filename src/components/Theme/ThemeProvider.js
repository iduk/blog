import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import styled from 'styled-components'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null)
  const initialTheme = () => localStorage.getItem('ThemeColor')

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' || null ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('ThemeColor', theme)

    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
      console.log('Light Mode')
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      console.log('Dark Mode')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {/* <ThemeSwitch /> */}
    </ThemeContext.Provider>
  )
}

// switch button
function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <SwitchBox>
      <div className="d-grid">
        <button
          className={`btn p-2 rounded-full ${theme ? 'bg-light' : 'bg-dark'}`}
          onClick={toggleTheme}
        >
          {theme ? 'Light Mode 🌈' : 'Dark Mode 🌙'}
        </button>
      </div>
    </SwitchBox>
  )
}

const SwitchBox = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`
