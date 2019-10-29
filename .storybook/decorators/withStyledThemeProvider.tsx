import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme, CssNormalize } from '../../src/theme'

export const withStyledThemeProvider = storyFn => (
  <>
    <CssNormalize />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
)
