import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'

export default [
	// browser-friendly UMD build
	{
		input: 'babel/main.js',
		output: {
			name: 'photoswipeReact',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `react`
      commonjs(), // so Rollup can convert `react` to an ES module
      postcss(), // so .css files can be imported
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'babel/main.js',
		external: ['react'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
    ],
    plugins: [
      postcss(),
    ]
	}
]
