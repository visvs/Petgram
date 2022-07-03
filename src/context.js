import React ,{ createContext, useState } from "react";

export const Context = createContext();

export const Provider =({children})=>{
  const [logged, setLogged] = useState(()=>{
    return window.sessionStorage.getItem('token')
  });
  return (
    <Context.Provider value={
      {logged: logged, 
        authenticate : token => {
        setLogged(true);
        window.sessionStorage.setItem('token', token)
      }}}>
        {children}
    </Context.Provider>
  );
}
