import * as fs from 'fs/promises'
import { minify } from 'html-minifier'

const minificationOptions = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	preserveLineBreaks: false,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
	removeEmptyElements: false, // breaks svg if true
}

const handleDirectory = async path => {
	const entries = await fs.readdir(path, { withFileTypes: true })

	await Promise.all(
		entries.map(async entry => {
			if (entry.isDirectory()) return await handleDirectory(path + '/' + entry.name)

			if (entry.name.endsWith('.html') && entry.isFile()) {
				const fullPath = path + '/' + entry.name

				const originalContent = await fs.readFile(fullPath, { encoding: 'utf-8' })
				const minifiedContent = minify(originalContent, minificationOptions)
				const withAbsolutePaths = minifiedContent.replaceAll(/\.\.\/(\.\.\/)+_app/g, '/_app')

				await fs.writeFile(fullPath, withAbsolutePaths, { encoding: 'utf-8' })
			}
		}),
	)
}

handleDirectory('build')
