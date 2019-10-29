import { addParameters, configure } from '@storybook/react'
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/dist/blocks'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { withStyledThemeProvider } from './decorators/withStyledThemeProvider'

addDecorator(withStyledThemeProvider)
addDecorator(withKnobs)

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    // theme: undefined,
    ci: true,
  },

  docs: {
    container: DocsContainer,
    page: DocsPage,
  },

  storySort: (a: any, b: any) => {
    return a[1].kind === b[1].kind
      ? 0
      : a[1].id.localeCompare(b[1].id, { numeric: true })
  },

  backgrounds: [
    { name: 'light', value: '#eeeeee' },
    { name: 'dark', value: '#222222' },
  ],
})

configure(
  [require.context('../stories', true, /\.(stories|story)\.[tj]sx?$/)],
  module,
)
