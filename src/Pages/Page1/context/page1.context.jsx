import { createContext, useContext, useState } from "react";


export const Page1context = createContext();

export const Page1Provider = ({ children }) => {
  const [page1ContextValue, setpage1ContextValue] = useState("");
  return (<Page1context.Provider value={{page1ContextValue, setpage1ContextValue}}>{children}</Page1context.Provider>);
};

export const usepage1context = () => {
  const context = useContext(Page1context);

  if( context === undefined) {
    throw new Error("page1Context debe ser usado con el page1Provider");
  }
  return context;
}


