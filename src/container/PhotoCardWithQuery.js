import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { gql, useQuery } from '@apollo/client'

const GET_SINGLE_PHOTO =gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

export const PhotoCardWithQuery = ({id})=> {

  const {loading, error, data} = useQuery(GET_SINGLE_PHOTO, {variables: {id}})

  {return loading ? (<h1>Cargando ...</h1>) : error ? (<h2>Internal error</h2>) :(<PhotoCard {...data.photo}/>) }
}
