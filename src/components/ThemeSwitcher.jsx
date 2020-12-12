import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set theme based on context
  const [themeMode, setTheme] = useContext(ThemeContext);
  
  const handleThemeChange = (e) => {
    console.log("current Value: "+ themeMode.theme);
    if(themeMode.theme === THEME_TYPE.LIGHT) {
      setTheme({ theme:THEME_TYPE.DARK });
    }
    else {
      setTheme({ theme:THEME_TYPE.LIGHT });
    }
    console.log("new Value: "+ themeMode.theme);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          defaultChecked={themeMode.theme === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
