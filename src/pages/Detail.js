import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import {useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';

const Detail =() =>{
  const {detailID} = useParams();
  return (
    <Layout title={`Fotografía ${detailID}`}>
      <PhotoCardWithQuery id={detailID}/>
    </Layout>
  )
}


export {Detail}
