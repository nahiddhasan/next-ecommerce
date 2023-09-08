"use client";


import { createContext, useState } from 'react';

export const ThemeContex = createContext();

export const  ThemeProvider =({children})=> {
  const [mode, setMode] = useState("dark");

  const toggle = ()=> {
    setMode((prev)=> (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContex.Provider value={{ mode, toggle }}>
      <div className={`${mode} `}>
      {children}
      </div>
    </ThemeContex.Provider>
  );
}
