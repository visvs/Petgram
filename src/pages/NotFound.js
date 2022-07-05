import React from 'react';
import notFoundImage from 'images/not_found.gif'
import { TitlePage, ImageNotFound } from '../components/SubmitButton/style';
export const NotFound = () => {
  return (
    <>
      <TitlePage> Not found u.u </TitlePage>
      <ImageNotFound src={notFoundImage}/>
    </>
  );
}


