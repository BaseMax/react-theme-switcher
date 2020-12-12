// import React from "react";
import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";
import {ThemeContext, ThemeProvider} from "./providers/ThemeProvider";

const StyleTag = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  console.log(themeMode.theme);
  return (
    <Helmet>
      <style>{Styles(themeMode.theme)}</style>
    </Helmet>
  );
};

function App() {

  return (
    <ThemeProvider>
      <div>
        <StyleTag />
        <NameBox />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
