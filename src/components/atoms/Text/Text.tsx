import * as React from 'react'
import styled from 'styled-components'

import { WithTheme } from '@theme'
import { Props } from './typings'

type ThemedProps = WithTheme<Props>

const getColor = ({ color, theme }: ThemedProps): string => {
  return !!color ? theme.colors[color] : 'currentColor'
}

const getFontSize = ({ size, theme }: ThemedProps): string => {
  return !!size ? theme.fonts[size] : 'inherit'
}

const getFontWeight = ({ weight, theme }: ThemedProps): number | string => {
  return !!weight ? theme.weights[weight] : 'inherit'
}

const getItalic = ({ italic }: ThemedProps): string => {
  return !!italic ? 'italic' : 'normal'
}

const p = styled.p<Props>``
const TextPrimitive = styled(p).attrs<Props>(() => ({
  className: 'o-atom-text',
}))`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  font-style: ${getItalic};

  &:disabled {
    opacity: 0.6;
  }
`
TextPrimitive.displayName = 'Text'

export const Text = (props: Props) => {
  const { children = '', as = 'p', className = '', style, ...p } = props

  return (
    <TextPrimitive {...p} as={as} style={style} className={className}>
      {children}
    </TextPrimitive>
  )
}
