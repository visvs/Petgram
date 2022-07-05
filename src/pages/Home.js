import React from 'react';
import { ListOfCategories } from '../components/ListOfCategory';
import { ListOfPhotoCard } from '../components/ListOfPhotoCards';
import {useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
const Home = () => {
  let {id} = useParams()
  const defaulID = 1;  
  id = parseInt(id)
  return (
    <Layout title={'App de fotos de mascotas'} subtitle={'En petgram puedes encontrar fotos de mascotas muy chulas'}>
      
      <ListOfCategories />
      <ListOfPhotoCard categoryID={id != null ? id : defaulID} />
    </Layout>
  );
}

export {Home};
