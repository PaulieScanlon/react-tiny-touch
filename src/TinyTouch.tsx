/* tslint:disable */
import * as React from 'react'
import { useState } from 'react'
/* tslint:enable */

export type TTouch = () => React.ReactElement

export const TinyTouch: React.SFC = ({ children }) => {
  const [touch, setTouch] = useState(false)

  if ('ontouchstart' in window && !touch) {
    setTouch(true)
  }

  if (typeof children === 'function') {
    return children(touch)
  }

  return touch ? children : null
}
