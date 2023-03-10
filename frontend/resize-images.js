import { spawn } from 'child_process'
import * as fs from 'fs/promises'

const usedDestinationPaths = new Set()

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

const handleAuto = async () => {
	const sourceRoot = 'src/lib/src/auto'
	const destinationRoot = 'src/lib/g'

	await fs.mkdir(destinationRoot, { recursive: true })
	const entries = await fs.readdir(sourceRoot, { withFileTypes: true })

	await Promise.all(
		entries.flatMap(async entry => {
			if (!entry.isDirectory()) throw new Error(`Invalid entry ${sourceRoot}/${entry.name}`)

			const values = entry.name
				.split(',')
				.map(value => [parseFloat(value), value.match(/[a-z]+$/)[0]])

			if (values.some(e => isNaN(e[0]) || !e[1]))
				throw new Error(`Invalid entry values inside ${sourceRoot}/${entry.name}`)

			const files = await fs.readdir(`${sourceRoot}/${entry.name}`)
			return files.filter(isImageFileName).flatMap(name =>
				values.map(([value, letter]) => {
					const newName = name.replace(/\.([a-z]+)$/, `.${letter}.$1`)
					const destinationPath = `${destinationRoot}/${newName}`

					if (usedDestinationPaths.has(destinationPath))
						throw new Error(`Name conflict detected, file with name "${newName}" already exists`)

					usedDestinationPaths.add(destinationPath)

					return convertAsPromise(
						`${sourceRoot}/${entry.name}/${name}`,
						'-resize',
						`${value * 100}%`,
						destinationPath,
					)
				}),
			)
		}),
	)
}

try {
	await Promise.all([handleAuto()])
} catch (e) {
	console.error('ERROR', e.message)
	process.exit(1)
}
