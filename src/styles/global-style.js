import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body{
    background-color: #ffffff;
    font-family: Noto Sans CJK KR;
    height: 100%;
    max-height: 100%;
}
  
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover{
    cursor:pointer;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button{
    cursor:pointer;
  }

  button:focus{
    outline : none;
  }

  
  ol, ul, li {
    list-style: none;
  }

`;

export default GlobalStyle;
