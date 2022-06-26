import React from 'react';
import { ListOfCategories } from '../components/ListOfCategory';
import { ListOfPhotoCard } from '../components/ListOfPhotoCards';
import {useParams } from 'react-router-dom';


const Home = () => {
  let {id} = useParams()
  const defaulID = 1;  
  id = parseInt(id)
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryID={id != null ? id : defaulID} />
    </>
  );
}

export {Home};
