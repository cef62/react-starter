import { CSSProperties } from 'react'
import { ValidColor, ValidFontWeight, ValidFontSize } from '@theme'

export interface Props {
  className?: string
  style?: CSSProperties
  as?: 'p' | 'span' | 'div'
  italic?: boolean
  color?: ValidColor
  size?: ValidFontSize
  weight?: ValidFontWeight
  children?: string
}
