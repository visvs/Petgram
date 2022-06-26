import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Home } from './pages/Home';

import { Route, BrowserRouter, Routes } from 'react-router-dom';//Rutas que tendra la aplicacion, puede usarse en cualquier sitio de la app

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailID = urlParams.get('detail')
  return (
    <BrowserRouter>
    <Logo/>
    <GlobalStyle/>
    {detailID 
    ? <PhotoCardWithQuery id={detailID}/>
  :

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pet/:id' element={<Home />} />
    </Routes>
  } 
  </BrowserRouter> 
  
  )
}
 