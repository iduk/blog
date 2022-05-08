import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import styled from 'styled-components'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState()
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

  const setMode = (theme) => {
    window.localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const toggleTheme = () => {
    const currentTheme =
      window.localStorage.getItem('theme') || systemPrefersDark.matches

    if (currentTheme === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  useEffect(() => {
    const currentTheme =
      window.localStorage.getItem('theme') || systemPrefersDark.matches

    if (currentTheme === 'light') {
      setMode('light')
      document.documentElement.setAttribute('data-theme', 'light')
      if (currentTheme) {
        toggleTheme === true
      }
    } else {
      setMode('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
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
          className={`btn p-2 rounded-full ${
            theme === 'dark' ? 'bg-light' : 'bg-dark'
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
