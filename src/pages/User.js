import React, { useContext } from 'react';
import { Context } from '../context'; 
import { SubmitButton} from '../components/SubmitButton';
import { Layout } from '../components/Layout';
const User = () => {
  const {removeAuth} = useContext(Context);
  return (
    <Layout title={'Usuario'}>
      <SubmitButton 
      onClick={removeAuth}
      >Cerrar sesión</SubmitButton>
    </Layout>
  );
}

export  {User};
