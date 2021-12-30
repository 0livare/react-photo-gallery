import path from 'path'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    format: 'es',
    dir: 'dist',
    sourcemap: true,
  },
  // Do not include any 3rd party libraries in the bundled code
  external: id => !id.startsWith('.') && !path.isAbsolute(id),
  plugins: [typescript()],
}
