import path from 'path'
import fs from 'fs'
import { uglify } from 'rollup-plugin-uglify'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

const definitions = replace({
  preventAssignment: true,
  __COLOR_MODE_KEY__: `'color-mode'`,
  __DARK__: `'dark'`,
  __LIGHT__: `'light'`,
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
