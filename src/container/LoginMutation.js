import React from 'react';
import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation signup($input:UserCredentials!){
    login(input:$input)
  } 
`;

export const LoginMutation = () =>{
  const [loginMutation, { loading: LoginLoading, error: LoginError }] = useMutation(LOGIN)
  return { loginMutation, LoginLoading, LoginError }
}
