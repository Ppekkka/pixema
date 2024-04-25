import { createGlobalStyle } from "styled-components";
import Exo2 from "src/fonts/Exo2.woff";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${Exo2}) format('woff'),
}
`;

export default FontStyles;
