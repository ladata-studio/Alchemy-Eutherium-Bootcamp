import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-variant-ligatures: no-contextual;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #070b0d;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #a3a7ac;
  }
`;

export const Scroll = styled.div`
  background-clip: text;
  -webkit-background-clip: text;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: none;

    &-track {
      background: none;
    }

    &-thumb {
      border: none;
      border-radius: 8px;
      background-color: inherit;
    }

    &-button {
      display: none;
    }
  }
`;
