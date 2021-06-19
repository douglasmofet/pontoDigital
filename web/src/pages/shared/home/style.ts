import { warningDark } from './../../../assets/styles/colors';
import styled from 'styled-components';

export const Home = styled.div<any>`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2em;

  h1, strong {
    font-weight: bold;
  }

  strong {
    color: ${warningDark};
    font-size: 14px;
  }

  h1, p {
    margin-bottom: 0.5em;
  }

  p {
    max-width: 450px;
    margin: 2em 0em 2em 0em;
  }
`;

export const Form = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;

  @media (max-width: 700px) {
    max-width: 100%;
    display: block;
    h4 {
      display: none;
    }
    Button {
      margin-bottom: 1.5em;
    }
  }
`;