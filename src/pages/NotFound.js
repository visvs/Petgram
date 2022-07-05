import React from 'react';
import notFoundImage from 'images/not_found.gif'
import { ImageNotFound } from '../components/SubmitButton/style';
import { TitlePage } from '../components/Layout/style';
export const NotFound = () => {
  return (
    <>
      <TitlePage> Not found u.u </TitlePage>
      <ImageNotFound src={notFoundImage}/>
    </>
  );
}


