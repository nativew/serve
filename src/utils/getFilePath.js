import fs from 'fs';
import { options } from '../index.js';

export const getFilePath = request => {
	const { root, fallback } = options;

	if (request.url == '/') return `${root}/index.html`;

	if (fallback && !fs.existsSync(`${root}${request.url}`) && !request.url.endsWith('/')) {
		return `${root}/${fallback}`;
	}

	if (!request.url.includes('.')) {
		const testFilepath = `${root}/${request.url}.html`;

		if (fs.existsSync(testFilepath)) return testFilepath;
	}

	return root + request.url;
};