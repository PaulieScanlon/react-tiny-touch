import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TinyTouch, TTouch } from './TinyTouch'

const stories = storiesOf('TinyTouch', module)

stories.add(
  'usage',
  () => (
    <TinyTouch>
      <div>TinyTouch: hasTouch = true</div>
    </TinyTouch>
  ),
  {
    info: 'If ontouchstart is detected children are rendered'
  }
)
stories.add(
  'hasTouch',
  () => (
    <TinyTouch>
      {(hasTouch: TTouch) =>
        hasTouch ? (
          <div>TinyTouch: hasTouch = true</div>
        ) : (
          <div>TinyTouch: hasTouch = false</div>
        )
      }
    </TinyTouch>
  ),
  {
    info: 'Use hasTouch to conditionally render children'
  }
)
