import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {

  // Dark Mode
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ?
    localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  )
}

export default App
