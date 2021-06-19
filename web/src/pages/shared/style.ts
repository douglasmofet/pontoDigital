import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2em;

  h1, strong {
    font-weight: bold;
  }

  h1, p {
    margin-bottom: 0.5em;
  }

  p {
    max-width: 450px;
    margin: 2em 0em 2em 0em;
  }
`;

export const InputGroup = styled.div`
  label {
    margin-bottom: 1em;
  }
  input {
    display: block;
    margin: 0.5em 0em 1em 0em;
    width: 100%;
    padding: 0.5em
  }

`;

// export const Form = styled.div<any>`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 450px;

//   @media (max-width: 700px) {
//     max-width: 100%;
//     display: block;
//     h4 {
//       display: none;
//     }
//     Button {
//       margin-bottom: 1.5em;
//     }
//   }
// `;