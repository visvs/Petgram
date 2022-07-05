import React from 'react';
import { getListOfFavs } from '../container/GetFavorites';
import { Layout } from '../components/Layout';

const Favs = () => {
  return (
    <>
    <Layout title={`Tus favoritos`} subtitle={'Aqui puedes encontrar tus favoritos'}>      
      {getListOfFavs()}
    </Layout>
    </>
  )
}

export  {Favs};
