import React from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

export const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme() 
  
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme

    if(currentTheme === "dark"){
      return (
        <BsSun className="mt-[2%] w-7 h-7 text-yellow-200 fixed" role="button" onClick={() => setTheme('light')}/>
      )
    }

    else{
      return (
        <MdDarkMode className="w-7 h-7 text-gray-900 fixed" role="button"
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
