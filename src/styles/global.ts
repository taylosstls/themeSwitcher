import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    line-height: 21px;
    font-family: sans-serif;
    transition: background .3s;
    -webkit-font-smoothing: antialiased;
  }

`;
