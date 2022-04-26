// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'QuipClient'
  },
  external: ['axios'],
  plugins: [typescript()]
};