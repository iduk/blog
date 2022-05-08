import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import styled from 'styled-components'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    const currentTheme =
      window.localStorage.getItem('theme') || systemPrefersDark.matches
    // ? 'dark'
    // : 'light'

    if (theme === 'dark') {
      setMode('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setMode('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  useEffect(() => {
    const currentTheme =
      window.localStorage.getItem('theme') || systemPrefersDark.matches

    if (currentTheme === 'dark') {
      setMode('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      if (!currentTheme) {
        toggleTheme === true
      }
    } else {
      setMode('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitch />
      {children}
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
          className={`btn py-1 px-3 rounded-full ${
            theme === 'dark' ? 'bg-light text-black' : 'bg-dark text-white'
          }`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode 🌈' : 'Dark Mode 🌙'}
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
