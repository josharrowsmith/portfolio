import { createGlobalStyle } from 'styled-components'

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
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
    background-image: #000;
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
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
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(----blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`

export default GlobalStyles
