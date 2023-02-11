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

const root = 'src/lib'
const files = await fs.readdir(root)
await Promise.all(
	files
		.filter(name => name.includes('.w.webp'))
		.flatMap(name => [
			convertAsPromise(
				`${root}/${name}`,
				'-resize',
				'33.3333%',
				`${root}/${name.replace('.w.', '.s.')}`,
			),
			convertAsPromise(
				`${root}/${name}`,
				'-resize',
				// '66.6666%',
				'50%',
				`${root}/${name.replace('.w.', '.m.')}`,
			),
		]),
)
