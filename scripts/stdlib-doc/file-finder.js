const fs = require('fs');
const path = require('path');

/**
 * Recursively walks a directory and returns files with the given exact file name.
 * Kept separate so discovery logic is reusable and testable.
 */
function walkFilesByName(startDir, fileName) {
	if (!fs.existsSync(startDir)) return [];
	const results = [];
	const entries = fs.readdirSync(startDir, { withFileTypes: true });
	for (const entry of entries) {
		const abs = path.join(startDir, entry.name);
		if (entry.isDirectory()) {
			results.push(...walkFilesByName(abs, fileName));
		} else if (entry.isFile() && entry.name === fileName) {
			results.push(abs);
		}
	}
	return results;
}

/**
 * Extracts structural markers from a twig template.
 * Generic convention used across this project:
 * - Element identity via data-bsi-element
 * - Part identity via data-bsi-element-part
 * - Dropzone identity via data-bsi-dropzone
 */
function parseTwigMarkers(templateFile) {
	if (!templateFile || !fs.existsSync(templateFile)) {
		return { elementIds: new Set(), partIds: new Set(), dropzoneIds: new Set() };
	}

	const content = fs.readFileSync(templateFile, 'utf8');
	const elementIds = new Set();
	const partIds = new Set();
	const dropzoneIds = new Set();

	const elementRegex = /data-bsi-element\s*=\s*(["'])(.*?)\1/g;
	const partRegex = /data-bsi-element-part\s*=\s*(["'])(.*?)\1/g;
	const dropzoneRegex = /data-bsi-dropzone\s*=\s*(["'])(.*?)\1/g;

	let match;
	while ((match = elementRegex.exec(content)) !== null) {
		const value = String(match[2] || '').trim();
		if (value) elementIds.add(value);
	}
	while ((match = partRegex.exec(content)) !== null) {
		const value = String(match[2] || '').trim();
		if (value) partIds.add(value);
	}
	while ((match = dropzoneRegex.exec(content)) !== null) {
		const value = String(match[2] || '').trim();
		if (value) dropzoneIds.add(value);
	}

	return { elementIds, partIds, dropzoneIds };
}

/**
 * Finds all element index files and resolves their best matching template file.
 */
function findElementCandidates(contentRoot) {
	const indexFiles = walkFilesByName(contentRoot, 'index.js');
	return indexFiles.map((indexFile) => {
		const elementDir = path.basename(path.dirname(indexFile)) === 'prototype'
			? path.dirname(path.dirname(indexFile))
			: path.dirname(indexFile);
		const templateFile = [
			path.join(elementDir, 'template.twig'),
			path.join(elementDir, 'prototype', 'template.twig'),
		].find((candidate) => fs.existsSync(candidate)) || null;

		return {
			indexFile,
			elementDir,
			templateFile,
			templateMarkers: parseTwigMarkers(templateFile),
		};
	});
}

module.exports = {
	walkFilesByName,
	findElementCandidates,
	parseTwigMarkers,
};
