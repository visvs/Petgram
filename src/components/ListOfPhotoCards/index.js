import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '../../customHooks/useGetPhoto';

export const ListOfPhotoCard = ({categoryID}) => {

  const { loading, error, data } = useGetPhotos(categoryID)
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
