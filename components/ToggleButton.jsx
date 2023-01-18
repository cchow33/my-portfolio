import React from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

export const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme() 
  
  const renderThemeChanger = () => {

    const currentTheme = theme === "system" ? systemTheme : theme

    if(currentTheme === "dark"){
      return (
        <MdOutlineLightMode className="w-10 h-10 text-yellow-500" role="button" onClick={() => setTheme('light')}/>
      )
    }

    else{
      return (
        <MdDarkMode className="w-10 h-10 text-gray-900" role="button"
        onClick={() => setTheme('dark')}/>
      )
    }
  }

  return (
    <div>
      <button>
        {renderThemeChanger(theme)}
      </button>
    </div>
  )
}
