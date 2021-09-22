import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --black: #000000;
    --fontLarge: 2rem;
    --fontMed: 1.5rem;
    --fontSmall: 1rem;
    --alive: #67db67;
    --dead: #faeaea;
    --seaGreen: darkSeaGreen;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    }
  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      /* color: var(--white); */
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      /* color: var(--white); */
    }

    p {
      font-size: 1rem;
      /* color: var(--white); */
    }
  }
`;
