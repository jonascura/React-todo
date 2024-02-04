import React from 'react'
import { useState } from 'react'

// styles
import styles from './ThemeSwitcher.module.css'

// icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
  const [ theme, setTheme ] = useState('light');
  const [ isColorPicking, setIsColorPicking ] = useState(false);

  const handleThemeBtn = () => setTheme(theme === 'light' ? 'dark' : 'light')
  
  return (
    <aside
      className={styles.wrapper}
      //  style
    >
      {
        isColorPicking
        ? ( // if true
          <>
          <button className='btn'><MoonIcon /></button>
          <input type='range' />
          </>
        ) 
        : ( // if false
          <div className={styles.btns}>
            <button 
              className='btn'
              aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
              role='switch'
              onClick={handleThemeBtn}
            >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className='btn'><SwatchIcon /></button>
          </div>
        ) 
      }
    </aside>
  )
}

export default ThemeSwitcher;