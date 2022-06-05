import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .p1{
    margin: 10px;
    padding: 100px !important;
  }
`;
 
export default GlobalStyle;