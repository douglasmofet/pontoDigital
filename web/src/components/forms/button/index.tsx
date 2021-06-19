import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  cta?: boolean;
  path?: string;
};

const Button: React.FC<ButtonProps> = ({ children, loading, path, ...rest }) => {
  const _children = path
      ? <Link to={path}>{children}</Link>
      : children;

  const content = <Container type="button" {...rest}>
                    {loading ? 'Carregando...' : _children}
                  </Container>

  const _content = path
        ? <Link to={path}>{content}</Link>
        : content;

  return _content;
};

export default Button;