import { spawn } from 'child_process'
import * as fs from 'fs/promises'

const isImageFileName = name => name.endsWith('.avif') || name.endsWith('.webp')

const convertAsPromise = (...args) => {
	return new Promise((resolve, reject) => {
		try {
			const process = spawn('convert', args, { stdio: 'inherit' })
			process.addListener('exit', exitCode => {
				if (exitCode === 0) resolve()
				else reject('convert exit code was ' + exitCode)
			})
		} catch (e) {
			reject(e)
		}
	})
}

const handleProjectHighlights = async () => {
	const sourceRoot = 'src/lib/src/project-highlights'
	const destinationRoot = 'src/lib/g'
	const files = await fs.readdir(sourceRoot)
	await fs.mkdir(destinationRoot, { recursive: true })
	await Promise.all(
		files
			.filter(isImageFileName)
			.flatMap(name => [
				convertAsPromise(
					`${sourceRoot}/${name}`,
					'-resize',
					'33.3333%',
					`${destinationRoot}/${name.replace('.webp', '.s.webp')}`,
				),
				convertAsPromise(
					`${sourceRoot}/${name}`,
					'-resize',
					'50%',
					`${destinationRoot}/${name.replace('.webp', '.m.webp')}`,
				),
			]),
	)
}

const handleAuto = async () => {
	const letters = ['s', 'm', 'w']

	const sourceRoot = 'src/lib/src/auto'
	const destinationRoot = 'src/lib/g'
	const entries = await fs.readdir(sourceRoot, { withFileTypes: true })

	await Promise.all(
		entries.flatMap(async entry => {
			if (!entry.isDirectory()) throw new Error(`Invalid entry ${sourceRoot}/${entry.name}`)
			const values = entry.name.split(',').map(value => parseFloat(value))
			if (values.some(e => isNaN(e)))
				throw new Error(`Invalid entry values inside ${sourceRoot}/${entry.name}`)
			if (values.length >= letters.length)
				throw new Error(`Too many resizes inside ${sourceRoot}/${entry.name}`)

			const files = await fs.readdir(`${sourceRoot}/${entry.name}`)
			return files
				.filter(isImageFileName)
				.flatMap(name =>
					values.map((value, index) =>
						convertAsPromise(
							`${sourceRoot}/${entry.name}/${name}`,
							'-resize',
							`${value * 100}%`,
							`${destinationRoot}/${name.replace('.', `.${letters[index]}.`)}`,
						),
					),
				)
		}),
	)
}

await Promise.all([handleProjectHighlights(), handleAuto()])
