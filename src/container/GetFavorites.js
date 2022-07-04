import React, {useContext} from 'react';
import { useQuery , gql} from '@apollo/client';
import { ListOfFavs } from '../components/listOfFavs';
import { Context } from '../context';

const GET_FAVS=gql`
query getFavs{
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}`

const getFavsFromQuery = ()=>{
  const {data, loading, error} = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  });
  return {data, loading, error};
}

export const getListOfFavs = ()=>{
  const {removeAuth} = useContext(Context);
  const {data, loading, error} = getFavsFromQuery();
  if(loading) return <p>Cargando ...</p>
  if(error){
    removeAuth();    
    return <p>{`Error: ${error}`}</p>
  }
  const {favs} = data

  return <ListOfFavs favs={favs} />
}
