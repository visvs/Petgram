import React from 'react'
import { Button} from '../UserForm/style';
export const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}
