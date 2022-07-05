import React  from 'react';
import { useInputValue } from '../../customHooks/useInputValue';
import { Input, Button, Form} from './style';
import {SubmitButton} from '../SubmitButton'

const UserForm = ({disabled, onSubmit}) => {
  const email = useInputValue('');
  const password  = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({email: email.value, password: password.value})
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' type='email' value={email.value} onChange={email.onChange }/>
        <Input disabled={disabled} placeholder='Password' type='password' {...password}/>
        <SubmitButton disabled={disabled}>Iniciar sesión</SubmitButton>
      </Form>           
    </>
  );
}

export {UserForm};
