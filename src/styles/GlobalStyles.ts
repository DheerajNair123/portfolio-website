import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${Theme.fonts.primary};
    line-height: 1.6;
    background: ${Theme.colors.background};
    color: ${Theme.colors.text};
    overflow-x: hidden;
  }

  ::selection {
    background: ${Theme.colors.primary};
    color: ${Theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${Theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Theme.colors.primaryHover};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }
`;
