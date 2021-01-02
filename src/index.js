function getInitialColorMode() {
  const persistedColorPreference = localStorage.getItem('color-mode')

  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  if (hasPersistedPreference) {
    return persistedColorPreference
  }

  const mql = matchMedia('(prefers-color-scheme: dark)')

  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return 'light'
}

const colorMode = getInitialColorMode()

if (colorMode === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.setItem('color-mode', colorMode)
