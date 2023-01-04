import React from 'react';
import { Button } from './buttonStyles';

const ButtonComponent = ({ children }) => {
  return <Button href="#">{children}</Button>;
};

export default ButtonComponent;
