import { themeColor, themeFontSize, themeFontWeight } from './theme'

export type ThemeColor = typeof themeColor
export type ThemeFontSize = typeof themeFontSize
export type ThemeFontWeight = typeof themeFontWeight

export type ValidColor = keyof ThemeColor
export type ValidFontSize = keyof ThemeFontSize
export type ValidFontWeight = keyof ThemeFontWeight

export interface Theme {
  readonly colors: ThemeColor
  readonly fonts: ThemeFontSize
  readonly weights: ThemeFontWeight
}

export type WithTheme<P> = P & { theme: Theme }
