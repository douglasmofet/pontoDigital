import styled from 'styled-components';

export const EntranceStyle = styled.div`
  /* width: 400px; */
  max-width: 100%;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
  }

`;

export const Table = styled.table`
  max-width: 100%;
  width: 100%;
  border: 1px solid grey;

  td, th {
    padding:10px;
  }
  /* th:first-child{
    text-align: left;
  } */

  td {
    text-align: center;
  }
`;