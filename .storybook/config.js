import React from 'react'
import { create } from '@storybook/theming'

import { addParameters, addDecorator, configure } from '@storybook/react'

import { withInfo, setDefaults } from '@storybook/addon-info'

import { configureViewport } from '@storybook/addon-viewport'

/**
 * Use webpack `require.context` to dynamically load stories
 */
const req = require.context('../src/', true, /.stories.tsx$/)

/**
 * Setup addon-info
 */
addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
    styles: {
      infoStory: {
        minHeight: '100px'
      },
      infoBody: {
        padding: '10px'
      }
    }
  })
)

/**
 * Setup options and theme
 */
addParameters({
  options: {
    theme: create({
      brandTitle: 'react-tiny-touch'
    }),
    isFullscreen: false,
    panelPosition: 'bottom'
  }
})

/**
 * Configure storybook files
 */
configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
