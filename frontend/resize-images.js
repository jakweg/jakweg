import * as fs from 'fs/promises'
import * as im from 'imagemagick'

const convertAsPromise = (...args) => {
	return new Promise((resolve, reject) => {
		try {
			im.convert(args, function (err) {
				if (err) reject(err)
				resolve()
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
		files.flatMap(name => [
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

await Promise.all([handleProjectHighlights()])
