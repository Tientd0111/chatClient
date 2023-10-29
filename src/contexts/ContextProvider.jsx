import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
   userProfile: false,
   notification: false,
};

export const ContextProvider = ({ children }) => {
   const [currentMode, setCurrentMode] = useState("light");
   const [themeSettings, setThemeSettings] = useState(false);
   const [isClicked, setIsClicked] = useState(initialState);

   const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
   };
   const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true })
   };

   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider
         value={{
            setIsClicked,
            initialState,
            isClicked,
            handleClick,
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
