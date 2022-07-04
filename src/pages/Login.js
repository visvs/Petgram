import React, {useContext, useState} from 'react';
import { Context } from '../context';
import { UserForm } from '../components/UserForm';
import { Image, Title , Text, Ancla, Error} from '../components/UserForm/style';
import LoginImage from 'images/pet.png'
import SignUpImage from 'images/animals.png'
import { RegisterMutation } from '../container/RegistrerMutation';
import { LoginMutation } from '../container/LoginMutation';

const Login = () => {
  const [registerPage, setResigerPage] = useState(false)
  const { mutation, mutationLoading, mutationError } = RegisterMutation();
  const { loginMutation, LoginLoading, LoginError } = LoginMutation();
  const {logged ,authenticate} = useContext(Context);

  const onSubmitRegister = ({email, password}) => {
    mutation({
      variables: {
        input: { email, password }
      }, 
      onCompleted : ({signup}) => {
        authenticate(signup)
      }
    })   
  }
  const onSubmitLogin = ({email, password}) => {
    loginMutation({
      variables: {
        input: { email, password }
      }, 
      onCompleted : ({login})=> {
        authenticate(login)
      }
    })   
  }
  const RegisterForm = (
    <>
      <UserForm disabled={mutationLoading} onSubmit={onSubmitRegister}/>
      {mutationError && ( <Error>{mutationError.message}</Error>)}
    </>
  )
  const LoginForm = (
    <>
      <UserForm disabled={LoginLoading} onSubmit={onSubmitLogin}/>
      <Text>¿Aún no tienes una cuenta? <Ancla onClick={()=> setResigerPage(!registerPage)}>Registrarse</Ancla></Text>)
      {LoginError && ( <Error>{LoginError.message}</Error>)}
    </>
  )
  return (    
    <>
      <Title>{!registerPage ? 'Iniciar sesión' : 'Registrarse'}</Title>
      <Image src={registerPage ? SignUpImage : LoginImage}/>
      {registerPage ? RegisterForm : LoginForm}
    </>
  );
}

export  {Login};
