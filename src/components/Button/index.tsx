import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName }) => {
    return (
      <Container>
        <button>{buttonName}</button>
      </Container>
    );
  };

export default Button;