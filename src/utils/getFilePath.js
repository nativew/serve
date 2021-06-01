import fs from 'fs'
import url from 'url'
import { options } from '../index.js'

export const getFilePath = request => {
	const { root } = options

	if (url.parse(request.url).search) return `${root}/index.html`
	if (request.url == '/') return `${root}/index.html`

	if (!request.url.includes('.')) {
		const testFilepath = `${root}/${request.url}.html`

		if (fs.existsSync(testFilepath)) return testFilepath
	}

	return root + request.url
}
