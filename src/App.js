import React from 'react';
import { ListOfCategories } from './components/ListOfCategory';
import { ListOfPhotoCard } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailID = urlParams.get('detail')
  return (
    <>
    <Logo/>
    <GlobalStyle/>
    {detailID 
    ? <PhotoCardWithQuery id={detailID}/>
  : <>
   <ListOfCategories/>
    <ListOfPhotoCard categoryID={1} />
  </>} 

   
  </>
  
  )
}
 