import styled, { createGlobalStyle } from 'styled-components';
import BgDesktopLight from './assets/images/bg-desktop-light.jpg';
import BgDesktopDark from './assets/images/bg-desktop-dark.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  :root {
    --c-blue-400: hsl(220, 98%, 61%);
    --c-blue-700: hsl(235, 19%, 35%);
    --c-blue-800: hsl(235, 24%, 19%);
    --c-blue-900: hsl(235, 21%, 11%);

    --c-white-100: hsl(0, 0%, 98%);
    --c-white-200: hsl(236, 33%, 92%);
    --c-white-300: hsl(234, 39%, 85%);
    --c-white-400: hsl(233, 11%, 84%);

    --c-gray-500: hsl(236, 9%, 61%);
    --c-gray-600: hsl(234, 11%, 52%);
    --c-gray-700: hsl(233, 14%, 35%);
    --c-gray-800: hsl(237, 14%, 26%);

    --c-gradient-background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --c-focus-shadow: hsla(211, 100%, 50%, 0.3);
  }

  body {
    width: 100%;
    min-height: 100vh;
    background: url(${({ theme }) => (theme.id === 'light') ? BgDesktopLight : BgDesktopDark});
    background-color: ${({ theme }) => theme.bodybackground};
    background-repeat: no-repeat;
    background-position: top center;
    font-family: 'Josefin Sans', sans-serif;
    
    @media only screen and (min-width: 1440px) {
      background-size: 100% auto;
    }
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: min(540px, 90%);
    height: 100vh;
  }
`

export const themes = {
  light: {
    id: 'light',
    bodybackground: 'var(--c-white-200)',
    mainBackground: 'var(--c-white-100)',
    text: 'var(--c-blue-700)',
    textMuted: 'var(--c-gray-500)',
    border: 'var(--c-white-400)',
    borderActive: 'var(--c-gray-500)',
  },
  dark: {
    id: 'dark',
    bodybackground: 'var(--c-blue-900)',
    mainBackground: 'var(--c-blue-800)',
    text: 'var(--c-white-200)',
    textMuted: 'var(--c-gray-600)',
    border: 'var(--c-gray-700)',
    borderActive: 'var(--c-gray-600)'
  }
}