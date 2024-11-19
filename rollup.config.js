import fs from 'node:fs'
import path from 'node:path'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'

const definitions = replace({
  preventAssignment: true,
  __COLOR_MODE_KEY__: `'color-mode'`,
  __DARK__: `'dark'`,
  __LIGHT__: `'light'`,
  __CUSTOM_EVENT_NAME__: `'colorModeChange'`,
  __BROWSER_OUTPUT__: () => {
    const outputPath = path.resolve('./dist/browser.js')
    return JSON.stringify(fs.readFileSync(outputPath).toString())
  },
})

const configs = [
  {
    input: 'src/browser.js',
    output: {
      file: 'dist/browser.js',
      format: 'iife',
      name: '__dmf',
    },
    plugins: [uglify(), definitions],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        file: 'dist/index.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/index.js',
      },
    ],
    external: ['react'],
    plugins: [typescript(), definitions],
  },
]

export default configs
