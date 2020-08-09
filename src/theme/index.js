import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#1db954',
    secondary: '#5b5773',
    white: '#fff',
    black: '#000',
    lightGrey: '#B3B3B3',
    grey: '#383838',
    darkGrey: '#040404',
    text: '#444',
  },
  spacing: {
    space01: '2px',
    space02: '4px',
    space03: '8px',
    space04: '12px',
    space05: '16px',
    space06: '24px',
    space07: '32px',
    space08: '40px',
    space09: '48px',
    space10: '64px',
    space11: '96px',
  },
  borderRadius: '99px',
  gradient: {
    purple: 'linear-gradient(transparent, rgba(0, 0, 0, 1)) #5b5773',
  },
  animation: '0.15s',
  boxShadow: '0 4px 60px rgba(0,0,0,.5)',
};

export const GlobalStyle = createGlobalStyle`
  body::-webkit-scrollbar {
    display: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
  }
`;

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  dekstop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};
