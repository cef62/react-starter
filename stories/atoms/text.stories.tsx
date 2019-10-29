import * as React from 'react'
import { radios, text, boolean, select, object } from '@storybook/addon-knobs'

// import { theme, Text } from '../../src'
import { theme } from '@theme'
import { Text } from '@atoms'

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export const SimpleText = () => {
  return <Text>I am a text!</Text>
}
SimpleText.story = {
  name: 'Simple Text',
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export const TextWeight = () => {
  return (
    <>
      <Text weight="$light">I am a light text!</Text>
      <Text weight="$regular">I am a regular text!</Text>
      <Text weight="$bold">I am a bold text!</Text>
    </>
  )
}
TextWeight.story = {
  name: 'Custom Weight',
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export const ItalicText = () => {
  return <Text italic>I am an italic text!</Text>
}
ItalicText.story = {
  name: 'Italic',
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export const ColoredText = () => {
  return (
    <>
      <Text color="$outrageousRed">I am an outrageously red text!</Text>
      <Text color="$sailBlue">I am a sailor blue text!</Text>
      <Text color="$darkOrange">I am a dark orange red text!</Text>
    </>
  )
}
ColoredText.story = {
  name: 'Custom color',
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const optionsGroup = 'KnobText'

const selectColors = Object.keys(theme.colors).reduce((res, id) => {
  res[id.slice(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2')] = id
  return res
}, {})

const selectWeight = Object.keys(theme.weights).reduce((res, id) => {
  res[id.slice(1)] = id
  return res
}, {})

const selectSize = Object.keys(theme.fonts)
  .filter(key => !key.startsWith('$h'))
  .reduce((res, id) => {
    res[id.slice(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2')] = id
    return res
  }, {})

const selectAs = {
  p: 'p',
  span: 'span',
  div: 'div',
} as const

export const KnobText = () => {
  return (
    <Text
      italic={boolean('Italic', false, optionsGroup)}
      color={select('Color', selectColors, '$pureBlack', optionsGroup)}
      weight={radios('Font weight', selectWeight, '$regular', optionsGroup)}
      size={select('Font size', selectSize, '$l', optionsGroup)}
      as={radios('DOM primitive', selectAs, 'p', optionsGroup)}
      style={object('Inline style', { margin: 10 }, optionsGroup)}
    >
      {text('Text', 'I am a configurable example, try me!', optionsGroup)}
    </Text>
  )
}
KnobText.story = {
  name: 'Configurable example',
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export default {
  title: 'Text',
  parameters: {
    // notes: 'Main Component notes',
    componentSubtitle: 'Simple Text Labels',
  },
}
