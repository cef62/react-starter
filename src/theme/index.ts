import { themeColor, themeFontSize, themeFontWeight } from './theme'
import { Theme } from './typings'

export * from './typings'
export * from './CssNormalize'

export const theme: Theme = {
  colors: themeColor,
  fonts: themeFontSize,
  weights: themeFontWeight,
} as const
