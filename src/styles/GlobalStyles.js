import { createGlobalStyle } from 'styled-components'

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

export const COLORS = {
  text: {
    light: '#000',
    dark: '#fff',
  },
  background: {
    light: '#fff',
    dark: '#000',
  },
  logo: {
    light: 'invert(0%)',
    dark: 'invert(100%)',
  },
}

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #2d2dff;
  }
  html {
    --size: 40px;
    @media(max-width: 900px) {
      --size: 20px;
    }
    --borderSize: calc(var(--size) / 2);
    box-sizing: border-box;
    border: var(--borderSize) solid var(--color-background);
    font-size: 10px;
    position: relative;
  }

  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    user-select: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 2rem;
    background: var(--color-background);
    color: var(--color-text);
    min-height: calc(100vh - 40px);
    overflow-x: hidden;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    border: 0;
    padding: 0.6rem 1rem;
    cursor: pointer;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
  img {
    color: var(--color-text);
    fill: currentColor;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-text) var(--color-background);
  }
  body::-webkit-scrollbar-track {
    background: var(--color-background);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-text) ;
    border-radius: 6px;
    border: 3px solid var(--color-background);
  }

`

export default GlobalStyles
