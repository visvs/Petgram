import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { ListOfPhotoCard } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';

export const App = () => (
  <>
    <Logo/>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCard/>
  </>
  )
