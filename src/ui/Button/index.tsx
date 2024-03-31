import * as React from 'react';
import { Button as PButton, type ButtonProps } from 'react-native-paper';

const Button = (props: ButtonProps) => {
  return <PButton {...props}>{props.children}</PButton>;
};

export default Button;
