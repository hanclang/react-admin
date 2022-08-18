import React from 'react'

export const CollapsedContext = React.createContext({
  collapsed: true,
  setCollapsed: (collapsed: boolean) => {},
})