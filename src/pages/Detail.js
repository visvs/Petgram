import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import {useParams } from 'react-router-dom';


const Detail =() =>{
  const {detailID} = useParams();
  return (<PhotoCardWithQuery id={detailID}/>)
}


export {Detail}
