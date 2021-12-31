import path from 'path'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default {
  input: ['src/index.ts'],
  output: {
    format: 'es',
    dir: 'dist',
    sourcemap: true,
  },
  // Do not include any 3rd party libraries in the bundled code
  external: id => !id.startsWith('.') && !path.isAbsolute(id),
  plugins: [
    typescript(),
    copy({
      targets: [
        {
          src: 'node_modules/photoswipe/dist/photoswipe.css',
          dest: 'dist',
        },
        {
          src: 'src/photoswipe-react.css',
          dest: 'dist',
        },
      ],
    }),
  ],
}
