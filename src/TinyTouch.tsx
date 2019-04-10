import React, { useState } from 'react'

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
