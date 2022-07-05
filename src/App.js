import React, {useContext} from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import {User} from './pages/User';
import {  Login } from './pages/Login';
import {Favs} from './pages/Favs';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
//Rutas que tendra la aplicacion, puede usarse en cualquier sitio de la app
import { Route, BrowserRouter, Routes , Navigate} from 'react-router-dom';
import { Context } from './context';
import { NotFound } from './pages/NotFound';

export const App = () => {

  const {logged} = useContext(Context);

  const urlParams = new window.URLSearchParams(window.location.search);
  //const detailID = urlParams.get('detail')
  return (
    <BrowserRouter>
    <Logo/>
    <GlobalStyle/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pet/:id' element={<Home />} />
      <Route path='/detail/:detailID' element={<Detail/>} />
      <Route path='/user' element={logged ? <User/> :<Navigate replace to='/login' />} />
      <Route path='/favs' element={logged ? <Favs/> :<Navigate replace to='/login' />} />
      <Route path='/login' element={!logged ? <Login /> : <Navigate replace to='/' />} />
      <Route path='*' element={<NotFound />} />
    </Routes>  
    <NavBar/>
  </BrowserRouter> 
  
  )
}
 