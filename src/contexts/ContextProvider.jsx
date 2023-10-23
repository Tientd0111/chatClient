import React, { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
   const [currentMode, setCurrentMode] = useState("light");
   const [themeSettings, setThemeSettings] = useState(false);
   useEffect(()=>{
      localStorage.setItem("themeMode", currentMode);
   },[currentMode])

   console.log(currentMode)
   const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
   };


   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider
         value={{
            currentMode,
            setCurrentMode,
            setMode,
            themeSettings,
            setThemeSettings,
         }}
      >
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => useContext(StateContext);
