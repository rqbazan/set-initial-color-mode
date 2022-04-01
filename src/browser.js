function getInitialColorMode() {
  const persistedColorPreference = localStorage.getItem(__COLOR_MODE_KEY__)

  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  if (hasPersistedPreference) {
    return persistedColorPreference
  }

  const mql = matchMedia('(prefers-color-scheme: dark)')

  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? __DARK__ : __LIGHT__
  }

  return __LIGHT__
}

const colorMode = getInitialColorMode()

if (colorMode === __DARK__) {
  document.documentElement.classList.add(__DARK__)
} else {
  document.documentElement.classList.remove(__DARK__)
}

localStorage.setItem(__COLOR_MODE_KEY__, colorMode)
