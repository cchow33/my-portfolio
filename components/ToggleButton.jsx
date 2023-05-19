import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

export const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          class="text-[#e9756b] font-black pb-[10%] sm:[10px]] "
        >
          <BsSun />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          class="text-[#e9756b] font-black pb-[10%] sm:[10px]] "
        >
          <MdDarkMode />
        </button>
      );
    }
  };

  return (
    <div>
      <button>{renderThemeChanger(theme)}</button>
    </div>
  );
};
