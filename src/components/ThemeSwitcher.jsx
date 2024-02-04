import React from 'react'
import { useState } from 'react'

// styles
import styles from './ThemeSwitcher.module.css'

// icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [ hue, setHue ] = useState('240')
  const [ theme, setTheme ] = useState('light');
  const [ isColorPicking, setIsColorPicking ] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--_hue', hue)
  }, [hue])

  return (
    <aside
      className={styles.wrapper}
      //  style
    >
      {
        isColorPicking
        ? ( // if true
          <>
          <button 
            className={`btn ${styles.close}`}
            aria-label='Close color picking mode'
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </button>
          <input 
            className={styles.picker}
            type='range'
            min='0'
            max='360'
            aria-label='Change color to theme slider'
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
          </>
        ) 
        : ( // if false
          <div className={styles.btns}>
            <button 
              className='btn'
              aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
              role='switch'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button 
              className='btn'
              aria-label='Enable color picking mode'
              onClick={() => setIsColorPicking(true)}
            >
              <SwatchIcon />
            </button>
          </div>
        ) 
      }
    </aside>
  )
}

export default ThemeSwitcher;