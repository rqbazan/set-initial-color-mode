import * as React from 'react'

export const STORAGE_KEY = __COLOR_MODE_KEY__

export const ColorModes = {
  DARK: __DARK__,
  LIGHT: __LIGHT__,
}

export type ColorMode = typeof ColorModes[keyof typeof ColorModes]

export function useColorModeToggle() {
  const [colorMode, setColorMode] = React.useState<ColorMode>(() => {
    if (typeof localStorage === 'undefined') {
      return null
    }

    return localStorage.getItem(STORAGE_KEY) as ColorMode
  })

  React.useEffect(() => {
    if (colorMode) {
      localStorage.setItem(STORAGE_KEY, colorMode)
    }

    if (colorMode === ColorModes.DARK) {
      document.documentElement.classList.add(ColorModes.DARK)
    } else if (colorMode === ColorModes.LIGHT) {
      document.documentElement.classList.remove(ColorModes.DARK)
    }
  }, [colorMode])

  function onToggle() {
    setColorMode((current) => {
      return current === ColorModes.DARK ? ColorModes.LIGHT : ColorModes.DARK
    })
  }

  return { colorMode, onToggle }
}

export function getJsText() {
  return __BROWSER_OUTPUT__
}
