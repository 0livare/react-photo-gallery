import path from 'path'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

export default {
  input: ['src/index.ts'],
  output: [
    {
      format: 'es',
      file: pkg.module,
    },
    {
      format: 'cjs',
      dir: 'dist',
    },
  ],
  // Do not include any 3rd party libraries in the bundled code
  external: id => !id.startsWith('.') && !path.isAbsolute(id),
  plugins: [
    typescript(),
    copy({
      targets: [
        {
          src: '../node_modules/photoswipe/dist/photoswipe.css',
          dest: 'dist',
        },
        {
          src: '../node_modules/photoswipe/dist/default-skin/*',
          dest: 'dist',
        },
        {
          src: 'src/*.css',
          dest: 'dist',
        },
      ],
    }),
  ],
}
