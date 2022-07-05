import React, { useContext } from 'react';
import { Context } from '../context'; 
import { SubmitButton} from '../components/SubmitButton';
import {TitlePage} from '../components/SubmitButton/style';

const User = () => {
  const {removeAuth} = useContext(Context);
  return (
    <>
      <TitlePage> Usuario </TitlePage>
      <SubmitButton 
      onClick={removeAuth}
      >Cerrar sesión</SubmitButton>
    </>
  );
}

export  {User};
