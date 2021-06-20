import { mint, warning, warningDark, mintDark, dark } from './../../../assets/styles/colors';
import styled, { css } from 'styled-components';

export const Select = styled.select`
  height: 45px;

  padding: 0 16px;
  padding-left: 2em;
  padding-right: 2em;
  margin-top: 15px;
  margin-bottom: 5px;

  color: ${dark};
  
  width: auto;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
  }
`;
