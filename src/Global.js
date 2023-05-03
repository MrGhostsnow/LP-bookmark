import { createGlobalStyle } from 'styled-components';
import RubikFont from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${RubikFont}
  body {
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyle;