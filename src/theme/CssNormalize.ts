import { createGlobalStyle } from 'styled-components'

export const CssNormalize = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Source Sans Pro', sans-serif;
      letter-spacing: 0.008em;
    }
  `
