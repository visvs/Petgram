import React from 'react';
import { getListOfFavs } from '../container/GetFavorites';
import { TitlePage } from '../components/SubmitButton/style';
const Favs = () => {
  return (
    <>
      <TitlePage> Favoritos </TitlePage>
      {getListOfFavs()}
    </>
  )
}

export  {Favs};
