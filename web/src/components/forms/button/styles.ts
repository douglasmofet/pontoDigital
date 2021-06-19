import { mint, warning, warningDark, mintDark, dark } from './../../../assets/styles/colors';
import styled, { css } from 'styled-components';

interface ButtonProps {
  cta?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${mint};
  height: 45px;
  border-radius: 10px;
  border: 0;

  padding: 0 16px;
  padding-left: 2em;
  padding-right: 2em;

  color: ${dark};
  
  width: auto;
  font-weight: 500;
  transition: background-color 0.2s;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
  }

  &.active,
  &:hover {
    background-color: ${mintDark};
  }

  ${props =>
    props.cta &&
    css`
      background-color: ${warning};
      &:hover {
      background-color: ${warningDark};
    `}
`;
