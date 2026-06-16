const fs = require('fs');

/**
 * Output generation/writing is intentionally separated from parsing.
 * This keeps concerns clear and simplifies future format extensions.
 */
function writeDocumentationOutputs({ doc, outputMarkdown, outputJson, outputHtml, renderMarkdown, renderHtml }) {
	const markdown = renderMarkdown(doc);
	const html = renderHtml(doc);

	fs.writeFileSync(outputMarkdown, markdown, 'utf8');
	fs.writeFileSync(outputJson, JSON.stringify(doc, null, 2), 'utf8');
	fs.writeFileSync(outputHtml, html, 'utf8');
}

module.exports = {
	writeDocumentationOutputs,
};
