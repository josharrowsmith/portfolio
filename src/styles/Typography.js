import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/frenchfries.woff'

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  html {
    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
  }
  p, li {
    letter-spacing: 0.5px;
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 0.8rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    margin-bottom: 0.8rem;
  }
  a {
    color: var(--color-text);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
