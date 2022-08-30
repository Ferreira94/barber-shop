import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primary};
    }
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme["gray-800"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Josefin Slab', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
`;
