import React from 'react';
import { Button } from './buttonStyles';

const ButtonComponent = ({ children, to }) => {
  return <Button to={to}>{children}</Button>;
};

export default ButtonComponent;
