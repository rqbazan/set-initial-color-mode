import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'out/index.js',
    format: 'iife',
    name: '__dmf',
  },
  plugins: [uglify()],
}
