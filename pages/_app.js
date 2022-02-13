import 'tailwindcss/tailwind.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '/public/assets/css/marketplace.css'

import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext()

export default function MyApp({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState(false)

  useEffect(() => {
    let theme = localStorage.getItem("dark-mode")
    if(theme === null) theme = true
    
    console.log("local storage " + theme)
    setTimeout(() => {
      toggleThemeMode(theme)
    }, 1000);
  }, [])

  function toggleThemeMode(mode) {
    localStorage.setItem("dark-mode", mode)
    setThemeMode(mode)
    mode ? document.body.classList.remove('dark') : document.body.classList.add('dark')
  }

  return (
    <ThemeContext.Provider value={{ themeMode:themeMode, toggleThemeMode:toggleThemeMode }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
