import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { ListOfPhotoCard } from './components/ListOfPhotoCards';
import { GlobalStyle } from './GlobalStyles';


export const App = () => (
  <>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCard/>
  </>
  )
