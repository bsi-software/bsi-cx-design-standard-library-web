#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const contentRoot = path.join(rootDir, 'content-elements');
const styleConfigRoot = path.join(rootDir, 'configs', 'styles');
const outputDir = path.join(rootDir, 'docs');
const outputMarkdown = path.join(outputDir, 'standardlib-autodoc.md');
const outputJson = path.join(outputDir, 'standardlib-autodoc.json');
const outputHtml = path.join(outputDir, 'standardlib-autodoc.html');

function walkFiles(startDir, fileName) {
	if (!fs.existsSync(startDir)) return [];
	const results = [];
	const entries = fs.readdirSync(startDir, { withFileTypes: true });
	for (const entry of entries) {
		const abs = path.join(startDir, entry.name);
		if (entry.isDirectory()) {
			results.push(...walkFiles(abs, fileName));
		} else if (entry.isFile() && entry.name === fileName) {
			results.push(abs);
		}
	}
	return results;
}

function normalizePosix(p) {
	return p.replace(/\\/g, '/');
}

function toDisplayHeading(value) {
	return String(value || '')
		.split(/[-_\s]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

function tryRead(filePath) {
	try {
		return fs.readFileSync(filePath, 'utf8');
	} catch {
		return null;
	}
}

function stripJsComments(input) {
	let out = '';
	let i = 0;
	let quote = null;
	let escaped = false;

	while (i < input.length) {
		const ch = input[i];
		const next = input[i + 1];

		if (quote) {
			out += ch;
			if (escaped) escaped = false;
			else if (ch === '\\') escaped = true;
			else if (ch === quote) quote = null;
			i += 1;
			continue;
		}

		if (ch === '"' || ch === '\'' || ch === '`') {
			quote = ch;
			out += ch;
			i += 1;
			continue;
		}

		if (ch === '/' && next === '/') {
			i += 2;
			while (i < input.length && input[i] !== '\n') i += 1;
			continue;
		}

		if (ch === '/' && next === '*') {
			i += 2;
			while (i < input.length - 1) {
				if (input[i] === '*' && input[i + 1] === '/') {
					i += 2;
					break;
				}
				i += 1;
			}
			continue;
		}

		out += ch;
		i += 1;
	}

	return out;
}

function stripQuotes(value) {
	const trimmed = value.trim();
	if (
		(trimmed.startsWith('"') && trimmed.endsWith('"')) ||
		(trimmed.startsWith('\'') && trimmed.endsWith('\'')) ||
		(trimmed.startsWith('`') && trimmed.endsWith('`'))
	) {
		return trimmed.slice(1, -1);
	}
	return null;
}

function splitTopLevelByComma(input) {
	const parts = [];
	let current = '';
	let depthParen = 0;
	let depthBracket = 0;
	let depthBrace = 0;
	let quote = null;
	let escaped = false;

	for (let i = 0; i < input.length; i += 1) {
		const ch = input[i];
		if (quote) {
			current += ch;
			if (escaped) escaped = false;
			else if (ch === '\\') escaped = true;
			else if (ch === quote) quote = null;
			continue;
		}

		if (ch === '"' || ch === '\'' || ch === '`') {
			quote = ch;
			current += ch;
			continue;
		}

		if (ch === '(') depthParen += 1;
		if (ch === ')') depthParen = Math.max(0, depthParen - 1);
		if (ch === '[') depthBracket += 1;
		if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);
		if (ch === '{') depthBrace += 1;
		if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);

		if (ch === ',' && depthParen === 0 && depthBracket === 0 && depthBrace === 0) {
			const trimmed = current.trim();
			if (trimmed) parts.push(trimmed);
			current = '';
			continue;
		}

		current += ch;
	}

	const tail = current.trim();
	if (tail) parts.push(tail);
	return parts;
}

function findCallArgumentBlocks(content, methodName) {
	const blocks = [];
	const needle = `.${methodName}(`;
	let start = 0;

	while (start < content.length) {
		const idx = content.indexOf(needle, start);
		if (idx === -1) break;

		const open = idx + needle.length - 1;
		let depth = 0;
		let quote = null;
		let escaped = false;
		let end = -1;

		for (let i = open; i < content.length; i += 1) {
			const ch = content[i];
			if (quote) {
				if (escaped) escaped = false;
				else if (ch === '\\') escaped = true;
				else if (ch === quote) quote = null;
				continue;
			}

			if (ch === '"' || ch === '\'' || ch === '`') {
				quote = ch;
				continue;
			}

			if (ch === '(') depth += 1;
			if (ch === ')') {
				depth -= 1;
				if (depth === 0) {
					end = i;
					break;
				}
			}
		}

		if (end !== -1) {
			blocks.push(content.slice(open + 1, end));
			start = end + 1;
		} else {
			break;
		}
	}

	return blocks;
}

function parseVariableScope(content) {
	const scope = new Map();
	const regex = /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*([\s\S]*?);/g;
	let match;
	while ((match = regex.exec(content)) !== null) {
		scope.set(match[1], match[2].trim());
	}
	return scope;
}

function extractModuleExportArgs(content) {
	const exportIdx = content.indexOf('module.exports');
	if (exportIdx === -1) return null;

	const assignIdx = content.indexOf('=', exportIdx);
	if (assignIdx === -1) return null;

	let i = assignIdx + 1;
	while (i < content.length && /\s/.test(content[i])) i += 1;
	if (content[i] !== '(') return null;

	const openIdx = i;
	let depth = 0;
	let endIdx = -1;
	let quote = null;
	let escaped = false;

	for (let pos = openIdx; pos < content.length; pos += 1) {
		const ch = content[pos];

		if (quote) {
			if (escaped) escaped = false;
			else if (ch === '\\') escaped = true;
			else if (ch === quote) quote = null;
			continue;
		}

		if (ch === '"' || ch === '\'' || ch === '`') {
			quote = ch;
			continue;
		}

		if (ch === '(') depth += 1;
		if (ch === ')') {
			depth -= 1;
			if (depth === 0) {
				endIdx = pos;
				break;
			}
		}
	}

	if (endIdx === -1) return null;

	let next = endIdx + 1;
	while (next < content.length && /\s/.test(content[next])) next += 1;
	if (content.slice(next, next + 2) !== '=>') return null;

	return content.slice(openIdx + 1, endIdx);
}

function parseModuleExportParamNames(content) {
	const rawArgs = extractModuleExportArgs(content);
	if (!rawArgs) return [];

	const names = [];
	for (const arg of splitTopLevelByComma(rawArgs)) {
		const trimmed = arg.trim();
		if (!trimmed) continue;
		const eqIdx = trimmed.indexOf('=');
		const name = (eqIdx === -1 ? trimmed : trimmed.slice(0, eqIdx)).trim();
		if (/^[A-Za-z_$][\w$]*$/.test(name)) names.push(name);
	}

	return names;
}

function parseModuleExportDefaultParams(content) {
	const scope = new Map();
	const rawArgs = extractModuleExportArgs(content);
	if (!rawArgs) return scope;

	for (const arg of splitTopLevelByComma(rawArgs)) {
		const trimmed = arg.trim();
		if (!trimmed) continue;
		const eqIdx = trimmed.indexOf('=');
		if (eqIdx === -1) continue;

		const name = trimmed.slice(0, eqIdx).trim();
		const value = trimmed.slice(eqIdx + 1).trim();
		if (/^[A-Za-z_$][\w$]*$/.test(name) && value) {
			scope.set(name, value);
		}
	}

	return scope;
}

function parseNamedImports(content) {
	const imports = new Map();

	const namedRegex = /const\s*\{([\s\S]*?)\}\s*=\s*require\(([^)]+)\)\s*;/g;
	let match;
	while ((match = namedRegex.exec(content)) !== null) {
		const names = splitTopLevelByComma(match[1]);
		const request = stripQuotes(match[2].trim());
		for (const n of names) {
			const aliasMatch = n.trim().match(/^([A-Za-z_$][\w$]*)(?:\s*:\s*([A-Za-z_$][\w$]*))?$/);
			if (!aliasMatch) continue;
			const importedName = aliasMatch[1];
			const localName = aliasMatch[2] || importedName;
			imports.set(localName, { request, importedName, isNamed: true });
		}
	}

	const defaultRegex = /const\s+([A-Za-z_$][\w$]*)\s*=\s*require\(([^)]+)\)\s*;/g;
	while ((match = defaultRegex.exec(content)) !== null) {
		const localName = match[1];
		const request = stripQuotes(match[2].trim());
		if (!imports.has(localName)) {
			imports.set(localName, { request, importedName: 'default', isNamed: false });
		}
	}

	return imports;
}

function parseArrayDefinitions(content) {
	const arrays = new Map();
	const regex = /const\s+([A-Za-z_$][\w$]*)\s*=\s*\[([\s\S]*?)\];/g;
	let match;
	while ((match = regex.exec(content)) !== null) {
		arrays.set(match[1], splitTopLevelByComma(match[2]));
	}
	return arrays;
}

function parseArrayExports(content) {
	const mapping = new Map();

	const directRegex = /module\.exports\.([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\s*;/g;
	let match;
	while ((match = directRegex.exec(content)) !== null) {
		mapping.set(match[1], match[2]);
	}

	const exportsRegex = /exports\.([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\s*;/g;
	while ((match = exportsRegex.exec(content)) !== null) {
		mapping.set(match[1], match[2]);
	}

	const defaultRegex = /module\.exports\s*=\s*([A-Za-z_$][\w$]*)\s*;/g;
	while ((match = defaultRegex.exec(content)) !== null) {
		mapping.set('default', match[1]);
	}

	const objectExportRegex = /module\.exports\s*=\s*\{([\s\S]*?)\}\s*;/g;
	while ((match = objectExportRegex.exec(content)) !== null) {
		const entries = splitTopLevelByComma(match[1]);
		for (const entryRaw of entries) {
			const entry = entryRaw.trim();
			if (!entry) continue;
			const aliasMatch = entry.match(/^([A-Za-z_$][\w$]*)(?:\s*:\s*([A-Za-z_$][\w$]*))?$/);
			if (!aliasMatch) continue;
			const exportName = aliasMatch[1];
			const localName = aliasMatch[2] || exportName;
			mapping.set(exportName, localName);
		}
	}

	return mapping;
}

function parsePartFactories(content) {
	const factories = new Map();
	const regex = /const\s+([A-Za-z_$][\w$]*)\s*=\s*\(([^)]*)\)\s*=>\s*(cx\.part\.[\s\S]*?);/g;
	let match;
	while ((match = regex.exec(content)) !== null) {
		const name = match[1];
		const rawParams = match[2] || '';
		const expression = (match[3] || '').trim();
		const typeMatch = expression.match(/^cx\.part\.([A-Za-z_$][\w$]*)/);
		if (!typeMatch) continue;

		const idMatch = expression.match(/\.withId\(([^)]+)\)/);
		const labelMatch = expression.match(/\.withLabel\(([^)]+)\)/);
		const params = splitTopLevelByComma(rawParams)
			.map((param) => param.trim())
			.filter(Boolean)
			.map((param) => param.replace(/=.*$/, '').trim())
			.filter((param) => /^[A-Za-z_$][\w$]*$/.test(param));

		factories.set(name, {
			type: typeMatch[1],
			params,
			idExpr: idMatch ? idMatch[1].trim() : null,
			labelExpr: labelMatch ? labelMatch[1].trim() : null,
		});
	}

	return factories;
}

function resolvePartFactoryExpression(rawExpression, argMap, scope) {
	if (!rawExpression) return null;
	const expr = rawExpression.trim();

	const templateMatch = expr.match(/^`([\s\S]*)`$/);
	if (templateMatch) {
		return templateMatch[1].replace(/\$\{\s*([A-Za-z_$][\w$]*)\s*\}/g, (_, name) => String(argMap.get(name) ?? ''));
	}

	const literal = stripQuotes(expr);
	if (literal !== null) return literal;

	if (argMap.has(expr)) return String(argMap.get(expr));

	const resolved = resolveLiteralOrIdentifier(expr, scope);
	return typeof resolved === 'string' ? resolved : null;
}

function resolvePartFactoryCall(entry, partFactories, scope) {
	const callMatch = entry.match(/^([A-Za-z_$][\w$]*)\((.*)\)$/);
	if (!callMatch) return null;

	const functionName = callMatch[1];
	if (!partFactories.has(functionName)) return null;

	const factory = partFactories.get(functionName);
	const args = splitTopLevelByComma(callMatch[2] || '');
	const argMap = new Map();

	for (let i = 0; i < factory.params.length; i += 1) {
		const paramName = factory.params[i];
		const rawArg = (args[i] || '').trim();
		if (!paramName) continue;

		if (!rawArg) {
			argMap.set(paramName, '');
			continue;
		}

		const literal = stripQuotes(rawArg);
		if (literal !== null) {
			argMap.set(paramName, literal);
			continue;
		}

		const resolved = resolveLiteralOrIdentifier(rawArg, scope);
		argMap.set(paramName, typeof resolved === 'string' ? resolved : rawArg);
	}

	return {
		type: factory.type,
		id: resolvePartFactoryExpression(factory.idExpr, argMap, scope),
		label: resolvePartFactoryExpression(factory.labelExpr, argMap, scope),
	};
}

function resolveRequirePath(baseFile, request) {
	if (!request) return null;
	let resolved = path.resolve(path.dirname(baseFile), request);

	const candidates = [
		path.join(resolved, 'index.js'),
		`${resolved}.js`,
		`${resolved}.json`,
		resolved,
	];

	for (const candidate of candidates) {
		if (!fs.existsSync(candidate)) continue;
		const stat = fs.statSync(candidate);
		if (stat.isFile()) return candidate;
	}
	return null;
}

function resolveLiteralOrIdentifier(raw, scope) {
	const trimmed = raw.trim();
	const asString = stripQuotes(trimmed);
	if (asString !== null) return asString;

	if (scope.has(trimmed)) {
		return resolveLiteralOrIdentifier(scope.get(trimmed), scope);
	}

	const reqMatch = trimmed.match(/^require\(([^)]+)\)$/);
	if (reqMatch) {
		const req = stripQuotes(reqMatch[1].trim());
		if (req) return { require: req };
	}

	return trimmed;
}

function parseStyleConfig(styleFile) {
	const source = tryRead(styleFile);
	const content = source ? stripJsComments(source) : null;
	if (!content) return null;

	const idBlocks = findCallArgumentBlocks(content, 'withIdentifier');
	const labelBlocks = findCallArgumentBlocks(content, 'withLabel');
	const cssClassBlocks = findCallArgumentBlocks(content, 'withCssClass');

	const identifier = idBlocks.length > 0 ? (stripQuotes(idBlocks[0].trim()) || idBlocks[0].trim()) : null;
	const label = labelBlocks.length > 0 ? (stripQuotes(labelBlocks[0].trim()) || labelBlocks[0].trim()) : null;

	const optionLabels = labelBlocks.slice(1).map((x) => stripQuotes(x.trim()) || x.trim());
	const optionClasses = cssClassBlocks.map((x) => stripQuotes(x.trim()) || x.trim());

	const classes = [];
	const size = Math.min(optionLabels.length, optionClasses.length);
	for (let i = 0; i < size; i += 1) {
		classes.push({ label: optionLabels[i], cssClass: optionClasses[i] });
	}

	return {
		filePath: styleFile,
		relativeFilePath: normalizePosix(path.relative(rootDir, styleFile)),
		identifier,
		label,
		classes,
	};
}

function parseElementConfig(filePath) {
	const source = tryRead(filePath);
	const content = source ? stripJsComments(source) : null;
	if (!content) return null;

	const scope = parseVariableScope(content);
	const moduleParameterNames = parseModuleExportParamNames(content);
	const paramDefaults = parseModuleExportDefaultParams(content);
	for (const [key, value] of paramDefaults.entries()) {
		if (!scope.has(key)) scope.set(key, value);
	}

	const elementIdBlock = findCallArgumentBlocks(content, 'withElementId')[0];
	const labelBlock = findCallArgumentBlocks(content, 'withLabel')[0];
	const descriptionBlock = findCallArgumentBlocks(content, 'withDescription')[0];
	const fileBlock = findCallArgumentBlocks(content, 'withFile')[0];

	if (!elementIdBlock || !labelBlock) return null;

	const elementId = elementIdBlock ? resolveLiteralOrIdentifier(elementIdBlock, scope) : null;
	const elementLabel = labelBlock ? resolveLiteralOrIdentifier(labelBlock, scope) : null;
	const elementDescription = descriptionBlock ? resolveLiteralOrIdentifier(descriptionBlock, scope) : null;

	let templateFile = null;
	if (fileBlock) {
		const resolved = resolveLiteralOrIdentifier(fileBlock, scope);
		if (resolved && typeof resolved === 'object' && resolved.require) {
			templateFile = resolveRequirePath(filePath, resolved.require);
		} else if (typeof resolved === 'string') {
			templateFile = resolveRequirePath(filePath, resolved);
		}
	}

	const styleRefs = [];
	const styleBlocks = findCallArgumentBlocks(content, 'withStyleConfigs');
	if (styleBlocks.length > 0) {
		const refs = splitTopLevelByComma(styleBlocks[0]);
		for (const ref of refs) {
			const trimmed = ref.replace(/^\.\.\./, '').trim();
			const resolved = resolveLiteralOrIdentifier(trimmed, scope);

			if (resolved && typeof resolved === 'object' && resolved.require) {
				const abs = resolveRequirePath(filePath, resolved.require);
				if (abs) styleRefs.push(abs);
			} else if (typeof resolved === 'string') {
				const abs = resolveRequirePath(filePath, resolved);
				if (abs) styleRefs.push(abs);
			}
		}
	}

	const partFactories = parsePartFactories(content);
	const parts = [];
	const partBlocks = findCallArgumentBlocks(content, 'withParts');
	if (partBlocks.length > 0) {
		const partEntries = splitTopLevelByComma(partBlocks[0]);

		for (const entryRaw of partEntries) {
			const entry = entryRaw.trim();
			if (!entry) continue;

			const resolvedFactoryPart = resolvePartFactoryCall(entry, partFactories, scope);
			if (resolvedFactoryPart) {
				parts.push(resolvedFactoryPart);
				continue;
			}

			const factoryMatch = entry.match(/^cx\.part\.([A-Za-z_$][\w$]*)\(([^)]*)\)\s*$/);
			if (factoryMatch) {
				const type = factoryMatch[1];
				const args = splitTopLevelByComma(factoryMatch[2]);
				const label = args[0] ? resolveLiteralOrIdentifier(args[0].trim(), scope) : null;
				const id = args[1] ? resolveLiteralOrIdentifier(args[1].trim(), scope) : null;
				parts.push({ type, id, label });
				continue;
			}

			const typeMatch = entry.match(/^cx\.part\.([A-Za-z_$][\w$]*)/);
			if (!typeMatch) continue;
			const type = typeMatch[1];
			const idMatch = entry.match(/\.withId\(([^)]+)\)/);
			const labelMatch = entry.match(/\.withLabel\(([^)]+)\)/);
			parts.push({
				type,
				id: idMatch ? resolveLiteralOrIdentifier(idMatch[1].trim(), scope) : null,
				label: labelMatch ? resolveLiteralOrIdentifier(labelMatch[1].trim(), scope) : null,
			});
		}
	}

	const namedImports = parseNamedImports(content);
	const arrayDefinitions = parseArrayDefinitions(content);

	const dropzones = [];
	const dropzoneBlocks = findCallArgumentBlocks(content, 'withDropzones');
	if (dropzoneBlocks.length > 0) {
		const entries = splitTopLevelByComma(dropzoneBlocks[0]);
		for (const entry of entries) {
			if (!entry.includes('withDropzone(')) continue;
			const dzMatch = entry.match(/\.withDropzone\(([^)]+)\)/);
			if (!dzMatch) continue;
			const allowedBlocks = findCallArgumentBlocks(entry, 'withAllowedElements');
			const rawAllowedBlocks = findCallArgumentBlocks(entry, 'withRawAllowedElements');
			const sourceBlock = allowedBlocks.length > 0
				? allowedBlocks[0]
				: (rawAllowedBlocks.length > 0 ? rawAllowedBlocks[0] : null);
			const allowedTokens = sourceBlock ? splitTopLevelByComma(sourceBlock) : [];
			dropzones.push({ dropzoneIdRaw: dzMatch[1].trim(), allowedTokens });
		}
	}

	const elementDir = path.basename(path.dirname(filePath)) === 'prototype'
		? path.dirname(path.dirname(filePath))
		: path.dirname(filePath);

	return {
		filePath,
		relativeFilePath: normalizePosix(path.relative(rootDir, filePath)),
		elementDir,
		elementId: typeof elementId === 'string' ? elementId : null,
		label: typeof elementLabel === 'string' ? elementLabel : null,
		description: typeof elementDescription === 'string' ? elementDescription : null,
		templateFile,
		styleRefs,
		moduleParameterNames,
		parts,
		dropzones,
		context: { scope, namedImports, arrayDefinitions },
	};
}

function resolveTemplateChain(templateFile, visited = new Set()) {
	if (!templateFile || !fs.existsSync(templateFile)) return [];
	const resolved = path.resolve(templateFile);
	if (visited.has(resolved)) return [];
	visited.add(resolved);

	const content = tryRead(resolved) || '';
	const files = [resolved];
	const includeRegex = /{%\s*include\s+['"]([^'"]+)['"]/g;
	let match;
	while ((match = includeRegex.exec(content)) !== null) {
		const includePath = match[1];
		const absInclude = path.resolve(path.dirname(resolved), includePath);
		if (fs.existsSync(absInclude)) files.push(...resolveTemplateChain(absInclude, visited));
	}
	return files;
}

function parseTemplateContent(templateFile) {
	return resolveTemplateChain(templateFile)
		.map((file) => tryRead(file) || '')
		.filter(Boolean)
		.join('\n');
}

function extractPrimarySetParameter(expression, targetVariable) {
	const tokenRegex = /properties\.([A-Za-z_][\w]*)|([A-Za-z_][\w]*)/g;
	const ignored = new Set(['or', 'and', 'not', 'true', 'false', 'null']);
	let match;
	while ((match = tokenRegex.exec(expression)) !== null) {
		const propertyToken = match[1];
		const plainToken = match[2];
		if (propertyToken) return propertyToken;
		if (!plainToken || ignored.has(plainToken) || plainToken === targetVariable) continue;

		const nextChar = expression[tokenRegex.lastIndex];
		if (nextChar === '(') continue;
		return plainToken;
	}

	const selfTokenRegex = new RegExp(`\\b${targetVariable}\\b`);
	if (selfTokenRegex.test(expression)) return targetVariable;
	return null;
}

function extractTrailingStringFallback(expression) {
	const match = expression.match(/(?:\?:|\bor\b)\s*(['"`])([\s\S]*?)\1\s*$/);
	if (!match) return null;
	return match[2];
}

function parseTwigSetParameterInfo(templateContent) {
	const parameters = new Set();
	const defaults = new Map();

	const regex = /{%\s*set\s+([A-Za-z_][\w]*)\s*=\s*([\s\S]*?)%}/g;
	let match;
	while ((match = regex.exec(templateContent)) !== null) {
		const targetVariable = match[1];
		const expression = (match[2] || '').trim();
		const sourceParameter = extractPrimarySetParameter(expression, targetVariable);
		if (sourceParameter) parameters.add(sourceParameter);

		const fallbackDefault = extractTrailingStringFallback(expression);
		if (sourceParameter && fallbackDefault !== null) {
			defaults.set(sourceParameter, fallbackDefault);
		}
	}

	return { parameters, defaults };
}

function parseTemplateParameterInfo(templateFile) {
	const content = parseTemplateContent(templateFile);
	if (!content) {
		return { all: [], settable: [], referencedOnly: [], settableDefaults: new Map() };
	}

	const setInfo = parseTwigSetParameterInfo(content);
	const settable = setInfo.parameters;
	const settableDefaults = setInfo.defaults;

	const referenced = new Set();
	const propRegex = /properties\.([A-Za-z_][\w]*)/g;
	let match;
	while ((match = propRegex.exec(content)) !== null) referenced.add(match[1]);

	const all = new Set([...settable, ...referenced]);
	const referencedOnly = new Set([...referenced].filter((x) => !settable.has(x)));

	return {
		all: Array.from(all).sort((a, b) => a.localeCompare(b)),
		settable: Array.from(settable).sort((a, b) => a.localeCompare(b)),
		referencedOnly: Array.from(referencedOnly).sort((a, b) => a.localeCompare(b)),
		settableDefaults,
	};
}

function stripTwigBlocks(content) {
	return content
		.replace(/{#[\s\S]*?#}/g, '')
		.replace(/{%[\s\S]*?%}/g, '')
		.replace(/{{[\s\S]*?}}/g, '');
}

function extractTopLevelClassTokens(templateFile) {
	const tokens = new Set();
	const files = resolveTemplateChain(templateFile);
	const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

	for (const file of files) {
		const raw = tryRead(file) || '';
		const content = stripTwigBlocks(raw);
		const tagRegex = /<\s*(\/)?\s*([A-Za-z][A-Za-z0-9:-]*)([^>]*)>/g;
		let depth = 0;
		let match;
		while ((match = tagRegex.exec(content)) !== null) {
			const isClosing = !!match[1];
			const tagName = (match[2] || '').toLowerCase();
			const attrs = match[3] || '';
			const isSelfClosing = /\/\s*$/.test(attrs) || voidTags.has(tagName);

			if (isClosing) {
				depth = Math.max(0, depth - 1);
				continue;
			}

			if (depth === 0) {
				const classMatch = attrs.match(/\bclass\s*=\s*(["'])([\s\S]*?)\1/i);
				if (classMatch) {
					const classes = classMatch[2].split(/\s+/).map((x) => x.trim()).filter(Boolean);
					for (const c of classes) {
						if (/^[A-Za-z0-9_-]+$/.test(c)) tokens.add(c);
					}
				}
			}

			if (!isSelfClosing) depth += 1;
		}
	}

	return tokens;
}

const exportedArrayCache = new Map();

function resolveExportedArray(moduleFile, exportName) {
	const key = `${moduleFile}::${exportName}`;
	if (exportedArrayCache.has(key)) return exportedArrayCache.get(key);
	const content = tryRead(moduleFile);
	if (!content) {
		exportedArrayCache.set(key, []);
		return [];
	}

	const arrays = parseArrayDefinitions(content);
	const exportsMap = parseArrayExports(content);
	const moduleScope = parseVariableScope(content);
	const arrayVar = exportsMap.get(exportName) || (arrays.has(exportName) ? exportName : null);
	if (!arrayVar || !arrays.has(arrayVar)) {
		exportedArrayCache.set(key, []);
		return [];
	}

	function expandTokens(tokens, stack = new Set()) {
		const resolved = [];
		for (const tokenRaw of tokens) {
			const token = tokenRaw.trim();
			if (!token) continue;

			if (token.startsWith('...')) {
				const ref = token.slice(3).trim();
				if (arrays.has(ref) && !stack.has(ref)) {
					stack.add(ref);
					resolved.push(...expandTokens(arrays.get(ref), stack));
					stack.delete(ref);
					continue;
				}
				if (moduleScope.has(ref)) {
					resolved.push(...expandTokens([moduleScope.get(ref)], stack));
					continue;
				}
			}

			if (moduleScope.has(token)) {
				resolved.push(...expandTokens([moduleScope.get(token)], stack));
				continue;
			}

			resolved.push(token);
		}
		return resolved;
	}

	const resolved = expandTokens(arrays.get(arrayVar));
	exportedArrayCache.set(key, resolved);
	return resolved;
}

function resolveDropzoneAllowedElements(element, elementByDir) {
	const { scope, namedImports, arrayDefinitions } = element.context;

	function tokenToElementIds(token, resolvingStack = new Set(), baseFile = element.filePath) {
		const trimmed = token.trim();
		if (!trimmed) return [];

		if (trimmed === 'cx.contentElement' || /(?:^|\.)contentElement$/.test(trimmed)) {
			return element.elementId ? [element.elementId] : [];
		}

		const mappedArrayMatch = trimmed.match(/^([A-Za-z_$][\w$]*)\.map\(/);
		if (mappedArrayMatch) {
			return tokenToElementIds(mappedArrayMatch[1], resolvingStack, baseFile);
		}

		if (trimmed.startsWith('...')) {
			return tokenToElementIds(trimmed.slice(3), resolvingStack, baseFile);
		}

		const stringLiteral = stripQuotes(trimmed);
		if (stringLiteral !== null) return [stringLiteral];

		const reqMatch = trimmed.match(/^require\(([^)]+)\)$/);
		if (reqMatch) {
			const req = stripQuotes(reqMatch[1].trim());
			const resolvedPath = req ? resolveRequirePath(baseFile, req) : null;
			if (!resolvedPath) return [];
			const candidateDir = path.basename(path.dirname(resolvedPath)) === 'prototype'
				? path.dirname(path.dirname(resolvedPath))
				: path.dirname(resolvedPath);
			const candidate = elementByDir.get(candidateDir);
			return candidate ? [candidate.elementId] : [];
		}

		if (arrayDefinitions.has(trimmed)) {
			if (resolvingStack.has(trimmed)) return [];
			resolvingStack.add(trimmed);
			const resolved = [];
			for (const item of arrayDefinitions.get(trimmed)) {
				resolved.push(...tokenToElementIds(item, resolvingStack, baseFile));
			}
			resolvingStack.delete(trimmed);
			return resolved;
		}

		if (namedImports.has(trimmed)) {
			const imp = namedImports.get(trimmed);
			const resolvedModule = imp.request ? resolveRequirePath(baseFile, imp.request) : null;
			if (!resolvedModule) return [];

			if (imp.isNamed) {
				const items = resolveExportedArray(resolvedModule, imp.importedName);
				const resolved = [];
				for (const item of items) {
					resolved.push(...tokenToElementIds(item, resolvingStack, resolvedModule));
				}
				return resolved;
			}

			const candidateDir = path.basename(path.dirname(resolvedModule)) === 'prototype'
				? path.dirname(path.dirname(resolvedModule))
				: path.dirname(resolvedModule);
			const candidate = elementByDir.get(candidateDir);
			return candidate ? [candidate.elementId] : [];
		}

		if (scope.has(trimmed)) {
			return tokenToElementIds(scope.get(trimmed), resolvingStack, baseFile);
		}

		const inferred = element.templateDefaults.get(trimmed);
		if (typeof inferred === 'string') return [inferred];

		return [];
	}

	return element.dropzones.map((dz) => {
		const idResolved = resolveLiteralOrIdentifier(dz.dropzoneIdRaw, scope);
		const inferred = typeof idResolved === 'string' ? (element.templateDefaults.get(idResolved) || idResolved) : String(idResolved);

		const allowed = [];
		for (const token of dz.allowedTokens) allowed.push(...tokenToElementIds(token));
		const uniqueAllowed = Array.from(new Set(allowed.filter(Boolean))).sort((a, b) => a.localeCompare(b));

		return { dropzoneId: inferred, allowedElementIds: uniqueAllowed };
	});
}

function resolveFinalValue(value, scope, templateDefaults) {
	if (value == null) return null;
	if (typeof value !== 'string') return null;

	let current = value.trim();
	if (!current) return null;

	const seen = new Set();
	for (let i = 0; i < 12; i += 1) {
		const quoted = stripQuotes(current);
		if (quoted !== null) current = quoted.trim();

		if (templateDefaults && templateDefaults.has(current)) {
			const mapped = templateDefaults.get(current);
			if (typeof mapped === 'string' && mapped.trim()) return mapped.trim();
		}

		const propMatch = current.match(/^properties\.([A-Za-z_][\w]*)$/);
		if (propMatch && templateDefaults && templateDefaults.has(propMatch[1])) {
			const mapped = templateDefaults.get(propMatch[1]);
			if (typeof mapped === 'string' && mapped.trim()) return mapped.trim();
		}

		if (!scope || !scope.has(current) || seen.has(current)) return current;
		seen.add(current);
		const next = scope.get(current);
		if (typeof next !== 'string' || !next.trim()) return current;
		current = next.trim();
	}

	return current;
}

function resolveElementParts(parts, scope, templateDefaults) {
	if (!Array.isArray(parts) || parts.length === 0) return [];
	return parts.map((part) => ({
		type: part.type,
		id: resolveFinalValue(part.id, scope, templateDefaults),
		label: resolveFinalValue(part.label, scope, templateDefaults),
	}));
}

function buildParameterStyleLinks(parameterDefaults, styles) {
	const links = [];
	if (!parameterDefaults || parameterDefaults.size === 0 || styles.length === 0) return links;

	for (const [parameter, defaultValue] of parameterDefaults.entries()) {
		for (const style of styles) {
			for (const option of style.options) {
				if (option.cssClass !== defaultValue) continue;
				links.push({
					parameter,
					defaultValue,
					styleIdentifier: style.identifier,
					styleLabel: style.label,
					defaultOptionLabel: option.label,
					defaultOptionCssClass: option.cssClass,
					styleOptions: style.options,
				});
			}
		}
	}

	links.sort((a, b) => {
		const byParam = a.parameter.localeCompare(b.parameter, 'de');
		if (byParam !== 0) return byParam;
		return (a.styleLabel || a.styleIdentifier || '').localeCompare(b.styleLabel || b.styleIdentifier || '', 'de');
	});

	return links;
}

function buildDocumentation() {
	const styleFiles = walkFiles(styleConfigRoot, '.keep').length ? [] : walkFiles(styleConfigRoot, 'dummy').slice(0, 0);
	const styleCandidates = fs.existsSync(styleConfigRoot)
		? fs.readdirSync(styleConfigRoot)
			.filter((x) => x.endsWith('.js'))
			.map((x) => path.join(styleConfigRoot, x))
		: [];

	const styleConfigs = styleCandidates
		.map(parseStyleConfig)
		.filter(Boolean);

	const styleByFile = new Map(styleConfigs.map((s) => [path.resolve(s.filePath), s]));

	const indexFiles = walkFiles(contentRoot, 'index.js');
	const elementsRaw = indexFiles
		.map(parseElementConfig)
		.filter(Boolean)
		.filter((el) => el.elementId);

	const elementByDir = new Map(elementsRaw.map((el) => [el.elementDir, el]));

	const elements = Array.from(elementByDir.values())
		.map((element) => {
			const fallbackTemplate = [
				path.join(element.elementDir, 'template.twig'),
				path.join(element.elementDir, 'prototype', 'template.twig'),
			].find((candidate) => fs.existsSync(candidate));

			const templateFile = element.templateFile && fs.existsSync(element.templateFile)
				? element.templateFile
				: fallbackTemplate;

			const templateParameterInfo = templateFile
				? parseTemplateParameterInfo(templateFile)
				: { all: [], settable: [], referencedOnly: [], settableDefaults: new Map() };
			const templateDefaults = templateParameterInfo.settableDefaults;
			const topLevelClassTokens = templateFile ? extractTopLevelClassTokens(templateFile) : new Set();
			const moduleParameters = Array.from(new Set(element.moduleParameterNames || []))
				.filter(Boolean)
				.sort((a, b) => a.localeCompare(b, 'de'));

			const propertyAllSet = new Set(templateParameterInfo.all || []);
			const propertySettableSet = new Set(templateParameterInfo.settable || []);
			const propertyReferencedSet = new Set(templateParameterInfo.referencedOnly || []);

			const moduleSettableViaProperty = moduleParameters.filter((name) => propertySettableSet.has(name));
			const moduleReferencedViaProperty = moduleParameters.filter((name) => propertyReferencedSet.has(name));
			const moduleNotViaProperty = moduleParameters.filter((name) => !propertyAllSet.has(name));

			const resolvedElementId = element.elementId === 'elementId'
				? (templateDefaults.get('elementId') || element.elementId)
				: element.elementId;

			const relativeElementDir = normalizePosix(path.relative(contentRoot, element.elementDir));
			const folderPath = relativeElementDir.split('/').filter(Boolean);
			const group = folderPath[0] || 'other';

			const styles = element.styleRefs
				.map((ref) => styleByFile.get(path.resolve(ref)))
				.filter(Boolean)
				.map((style) => {
					const defaults = style.classes
						.filter((opt) => topLevelClassTokens.has(opt.cssClass))
						.map((opt) => opt.cssClass);
					return {
						identifier: style.identifier,
						label: style.label,
						source: style.relativeFilePath,
						effect: null,
						defaults,
						options: style.classes,
					};
				});

			const parameterStyleLinks = buildParameterStyleLinks(templateDefaults, styles);

			return {
				elementId: resolvedElementId,
				label: element.label,
				group,
				folderPath,
				description: element.description,
				source: element.relativeFilePath,
				template: templateFile ? normalizePosix(path.relative(rootDir, templateFile)) : null,
				parameters: moduleParameters,
				parameterGroups: {
					settable: moduleSettableViaProperty,
					referencedOnly: moduleReferencedViaProperty,
					notViaProperty: moduleNotViaProperty,
				},
				properties: {
					all: templateParameterInfo.all,
					settable: templateParameterInfo.settable,
					referencedOnly: templateParameterInfo.referencedOnly,
				},
				parameterStyleLinks,
				parts: resolveElementParts(element.parts, element.context.scope, templateDefaults),
				styles,
				templateDefaults,
				dropzones: resolveDropzoneAllowedElements({ ...element, templateDefaults }, elementByDir),
			};
		})
		.sort((a, b) => {
			const parentPathA = (a.folderPath || []).slice(0, -1).join('/').toLocaleLowerCase('de');
			const parentPathB = (b.folderPath || []).slice(0, -1).join('/').toLocaleLowerCase('de');
			const byPath = parentPathA.localeCompare(parentPathB, 'de');
			if (byPath !== 0) return byPath;

			const leafPathA = (a.folderPath || []).join('/').toLocaleLowerCase('de');
			const leafPathB = (b.folderPath || []).join('/').toLocaleLowerCase('de');
			const byLeafPath = leafPathA.localeCompare(leafPathB, 'de');
			if (byLeafPath !== 0) return byLeafPath;

			const keyA = (a.label || a.elementId || '').toLocaleLowerCase('de');
			const keyB = (b.label || b.elementId || '').toLocaleLowerCase('de');
			const byLabel = keyA.localeCompare(keyB, 'de');
			if (byLabel !== 0) return byLabel;
			return (a.elementId || '').localeCompare(b.elementId || '', 'de');
		});

	const elementById = new Map(elements.map((el) => [el.elementId, el]));
	for (const element of elements) {
		element.dropzones = (element.dropzones || []).map((dz) => {
			const allowedElementIds = Array.isArray(dz.allowedElementIds) ? dz.allowedElementIds : [];
			const allowedElements = allowedElementIds.map((id) => {
				const candidate = elementById.get(id);
				return {
					elementId: id,
					label: candidate ? candidate.label : null,
				};
			});
			return {
				dropzoneId: dz.dropzoneId,
				allowedElementIds,
				allowedElements,
			};
		});
	}

	for (const element of elements) delete element.templateDefaults;

	return {
		generatedAt: new Date().toISOString(),
		sourceRoot: normalizePosix(rootDir),
		summary: { elementCount: elements.length, styleConfigCount: styleConfigs.length },
		elements,
	};
}

function toMarkdown(doc) {
	const lines = [];
	lines.push('# StandardLib Auto-Dokumentation');
	lines.push('');
	lines.push(`- Generiert am: ${doc.generatedAt}`);
	lines.push(`- Elemente: ${doc.summary.elementCount}`);
	lines.push(`- Style-Configs: ${doc.summary.styleConfigCount}`);
	lines.push('');

	const grouped = new Map();
	for (const element of doc.elements) {
		const group = element.group || 'other';
		if (!grouped.has(group)) grouped.set(group, []);
		grouped.get(group).push(element);
	}

	const orderedGroups = Array.from(grouped.keys()).sort((a, b) => {
		const labelA = toDisplayHeading(a).toLocaleLowerCase('de');
		const labelB = toDisplayHeading(b).toLocaleLowerCase('de');
		return labelA.localeCompare(labelB, 'de');
	});

	for (const group of orderedGroups) {
		const groupElements = grouped.get(group);
		if (!groupElements || groupElements.length === 0) continue;

		groupElements.sort((a, b) => {
			const parentPathA = (a.folderPath || []).slice(1, -1).join('/').toLocaleLowerCase('de');
			const parentPathB = (b.folderPath || []).slice(1, -1).join('/').toLocaleLowerCase('de');
			const byPath = parentPathA.localeCompare(parentPathB, 'de');
			if (byPath !== 0) return byPath;

			const leafPathA = (a.folderPath || []).join('/').toLocaleLowerCase('de');
			const leafPathB = (b.folderPath || []).join('/').toLocaleLowerCase('de');
			const byLeafPath = leafPathA.localeCompare(leafPathB, 'de');
			if (byLeafPath !== 0) return byLeafPath;

			const keyA = (a.label || a.elementId || '').toLocaleLowerCase('de');
			const keyB = (b.label || b.elementId || '').toLocaleLowerCase('de');
			const byLabel = keyA.localeCompare(keyB, 'de');
			if (byLabel !== 0) return byLabel;
			return (a.elementId || '').localeCompare(b.elementId || '', 'de');
		});

		lines.push(`## ${toDisplayHeading(group) || 'Other'}`);
		lines.push('');

		let previousFolder = null;

		for (const element of groupElements) {
			const folderPath = Array.isArray(element.folderPath) ? element.folderPath : [];
			const relativeFolder = folderPath.length > 2 ? folderPath.slice(1, -1).join(' / ') : '(root)';
			if (relativeFolder !== previousFolder) {
				lines.push(`### Ordner: ${relativeFolder}`);
				lines.push('');
				previousFolder = relativeFolder;
			}

			const title = element.label || element.elementId;
			lines.push(`#### ${title} (${element.elementId})`);
			lines.push('');
			lines.push(`- Quelle: ${element.source}`);
			if (element.template) lines.push(`- Template: ${element.template}`);
			if (element.description) lines.push(`- Beschreibung: ${element.description}`);
			lines.push('');

			lines.push('##### Parameter (Module Export)');
			const settableParameters = (element.parameterGroups && element.parameterGroups.settable) || [];
			const referencedOnlyParameters = (element.parameterGroups && element.parameterGroups.referencedOnly) || [];
			const notViaPropertyParameters = (element.parameterGroups && element.parameterGroups.notViaProperty) || [];
			const propertiesAll = (element.properties && element.properties.all) || [];
			const propertiesSettable = (element.properties && element.properties.settable) || [];
			const propertiesReferencedOnly = (element.properties && element.properties.referencedOnly) || [];

			lines.push('- Über Property per `set` anpassbar:');
			if (settableParameters.length === 0) lines.push('  - Keine erkannt');
			else for (const param of settableParameters) lines.push(`  - ${param}`);

			lines.push('- Über Property nur referenziert (nicht direkt per `set`):');
			if (referencedOnlyParameters.length === 0) lines.push('  - Keine erkannt');
			else for (const param of referencedOnlyParameters) lines.push(`  - ${param}`);

			lines.push('- Nicht als Property im Template verwendet:');
			if (notViaPropertyParameters.length === 0) lines.push('  - Keine erkannt');
			else for (const param of notViaPropertyParameters) lines.push(`  - ${param}`);

			if (settableParameters.length === 0 && referencedOnlyParameters.length === 0 && notViaPropertyParameters.length === 0 && element.parameters.length === 0) {
				lines.push('- Keine erkannt');
			}
			lines.push('');

			lines.push('##### Properties (Template)');
			lines.push('- Alle erkannten Properties:');
			if (propertiesAll.length === 0) lines.push('  - Keine erkannt');
			else for (const property of propertiesAll) lines.push(`  - ${property}`);

			lines.push('- Davon per `set` anpassbar:');
			if (propertiesSettable.length === 0) lines.push('  - Keine erkannt');
			else for (const property of propertiesSettable) lines.push(`  - ${property}`);

			lines.push('- Davon nur referenziert:');
			if (propertiesReferencedOnly.length === 0) lines.push('  - Keine erkannt');
			else for (const property of propertiesReferencedOnly) lines.push(`  - ${property}`);
			lines.push('');

			lines.push('##### Parameter ↔ Style Zuordnung');
			if (!element.parameterStyleLinks || element.parameterStyleLinks.length === 0) {
				lines.push('- Keine erkannt');
			} else {
				for (const link of element.parameterStyleLinks) {
					const optionsText = (link.styleOptions || [])
						.map((option) => `${option.label}: ${option.cssClass}`)
						.join(', ');
					lines.push(`- ${link.parameter} (Default: ${link.defaultValue}) → ${link.styleIdentifier || '(ohne Identifier)'} | ${link.styleLabel || '(ohne Label)'}`);
					lines.push(`  - Default-Option: ${link.defaultOptionLabel} (${link.defaultOptionCssClass})`);
					lines.push(`  - Alle Style-Optionen: ${optionsText || 'keine erkannt'}`);
				}
			}
			lines.push('');

			lines.push('##### Element Parts');
			if (element.parts.length === 0) lines.push('- Keine erkannt');
			else {
				for (const part of element.parts) {
					lines.push(`- Typ: ${part.type}, ID: ${part.id || '-'}, Label: ${part.label || '-'}`);
				}
			}
			lines.push('');

			lines.push('##### Styles');
			if (element.styles.length === 0) {
				lines.push('- Keine');
			} else {
				for (const style of element.styles) {
					const identifier = style.identifier || '(ohne Identifier)';
					const label = style.label || '(ohne Label)';
					const hasDistinctEffect = Boolean(style.effect) && style.effect !== style.label;
					const styleLine = hasDistinctEffect
						? `- ${identifier} | ${label} | Wirkung: ${style.effect}`
						: `- ${identifier} | ${label}`;
					lines.push(styleLine);
					lines.push(`  - Quelle: ${style.source}`);
					if (style.defaults.length > 0) {
						lines.push(`  - Standard im Template erkannt: ${style.defaults.join(', ')}`);
					}
					if (style.options.length === 0) {
						lines.push('  - Optionen: keine erkannt');
					} else {
						lines.push('  - Optionen:');
						for (const option of style.options) {
							lines.push(`    - ${option.label}: ${option.cssClass}`);
						}
					}
				}
			}
			lines.push('');

			lines.push('##### Dropzones');
			if (element.dropzones.length === 0) {
				lines.push('- Keine');
			} else {
				for (const dz of element.dropzones) {
					lines.push(`- Dropzone ID: ${dz.dropzoneId}`);
					const allowedElements = Array.isArray(dz.allowedElements) ? dz.allowedElements : [];
					if (allowedElements.length === 0) {
						lines.push('  - Erlaubte Elemente: keine erkannt');
					} else {
						lines.push('  - Erlaubte Elemente (Name + elementId):');
						for (const allowed of allowedElements) {
							const text = allowed.label ? `${allowed.label} (${allowed.elementId})` : allowed.elementId;
							lines.push(`    - ${text}`);
						}
					}
				}
			}
			lines.push('');
		}
	}

	return lines.join('\n');
}

function toHtml(doc) {
	const safeDocJson = JSON.stringify(doc)
		.replace(/</g, '\\u003c')
		.replace(/>/g, '\\u003e')
		.replace(/&/g, '\\u0026');

	return `<!doctype html>
<html lang="de">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>StandardLib Auto-Dokumentation</title>
	<style>
		:root {
			--bg: #0f172a;
			--surface: #111827;
			--surface-2: #1f2937;
			--card: #0b1220;
			--text: #e5e7eb;
			--muted: #9ca3af;
			--accent: #60a5fa;
			--accent-2: #22d3ee;
			--border: #334155;
			--ok: #34d399;
		}
		* { box-sizing: border-box; }
		body {
			margin: 0;
			font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
			color: var(--text);
			background: radial-gradient(1200px 900px at 20% -10%, #1d4ed8 0%, rgba(29,78,216,0) 55%), var(--bg);
			height: 100vh;
			overflow: hidden;
		}
		.layout {
			display: grid;
			grid-template-columns: 340px 1fr 340px;
			height: 100vh;
		}
		.sidebar {
			border-right: 1px solid var(--border);
			background: linear-gradient(180deg, rgba(17,24,39,.96), rgba(15,23,42,.96));
			display: flex;
			flex-direction: column;
			min-height: 0;
		}
		.brand {
			padding: 16px 16px 10px;
			border-bottom: 1px solid var(--border);
			background: rgba(15,23,42,.8);
			backdrop-filter: blur(6px);
		}
		.brand h1 {
			margin: 0;
			font-size: 1rem;
			font-weight: 700;
			letter-spacing: .2px;
		}
		.meta {
			margin-top: 8px;
			color: var(--muted);
			font-size: .78rem;
			display: grid;
			gap: 2px;
		}
		.search {
			padding: 12px 16px;
			border-bottom: 1px solid var(--border);
		}
		.search input {
			width: 100%;
			padding: 10px 12px;
			border-radius: 10px;
			border: 1px solid var(--border);
			background: #0b1220;
			color: var(--text);
			outline: none;
		}
		.search input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(96,165,250,.15); }
		.tree {
			overflow: auto;
			padding: 8px 10px 16px;
			min-height: 0;
		}
		.group {
			margin-top: 10px;
		}
		.group-title {
			position: sticky;
			top: 0;
			z-index: 1;
			background: rgba(15,23,42,.9);
			color: var(--accent-2);
			font-size: .74rem;
			text-transform: uppercase;
			letter-spacing: .08em;
			padding: 8px 10px 6px;
			border-left: 2px solid var(--accent-2);
			border-radius: 6px;
			margin-bottom: 6px;
		}
		.item {
			width: 100%;
			text-align: left;
			border: 1px solid transparent;
			background: transparent;
			color: var(--text);
			border-radius: 8px;
			padding: 8px 10px;
			cursor: pointer;
			margin-bottom: 4px;
			transition: .12s ease;
		}
		.item:hover { background: rgba(148,163,184,.12); border-color: rgba(148,163,184,.2); }
		.item.active { background: rgba(96,165,250,.18); border-color: rgba(96,165,250,.45); }
		.item .label { display: block; font-size: .9rem; }
		.item .id { display: block; font-size: .73rem; color: var(--muted); margin-top: 2px; }
		.folder {
			font-size: .78rem;
			text-transform: uppercase;
			letter-spacing: .04em;
			color: #93c5fd;
			padding: 4px 10px 2px;
		}
		.folder-toggle {
			width: 100%;
			text-align: left;
			border: none;
			background: transparent;
			color: #93c5fd;
			font-size: .78rem;
			text-transform: uppercase;
			letter-spacing: .04em;
			padding: 4px 10px 2px;
			cursor: pointer;
		}
		.folder-toggle:hover { color: #bfdbfe; }
		.folder-toggle .caret { display: inline-block; width: 12px; color: #7dd3fc; }
		.content {
			overflow: auto;
			padding: 24px;
		}
		.outline {
			border-left: 1px solid var(--border);
			background: linear-gradient(180deg, rgba(17,24,39,.96), rgba(15,23,42,.96));
			overflow: auto;
			padding: 16px;
		}
		.outline-panel {
			position: sticky;
			top: 16px;
			background: rgba(11,18,32,.88);
			border: 1px solid var(--border);
			border-radius: 12px;
			padding: 12px;
		}
		.outline-panel h3 {
			margin: 0 0 8px;
			font-size: .95rem;
			color: #cbd5e1;
		}
		.outline-sub {
			color: var(--muted);
			font-size: .78rem;
			margin-bottom: 10px;
		}
		.panel {
			max-width: 1200px;
			margin: 0 auto;
			background: linear-gradient(180deg, rgba(17,24,39,.88), rgba(15,23,42,.88));
			border: 1px solid var(--border);
			border-radius: 16px;
			padding: 20px;
			box-shadow: 0 12px 28px rgba(0,0,0,.25);
		}
		.header h2 { margin: 0; font-size: 1.4rem; }
		.header .sub { color: var(--muted); margin-top: 6px; font-size: .9rem; }
		.chips { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px; }
		.chip {
			font-size: .76rem;
			padding: 6px 9px;
			border-radius: 999px;
			border: 1px solid var(--border);
			background: rgba(148,163,184,.1);
			color: var(--text);
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
			gap: 14px;
			margin-top: 18px;
		}
		.card {
			background: rgba(11,18,32,.85);
			border: 1px solid var(--border);
			border-radius: 12px;
			padding: 12px;
		}
		.card h3 {
			margin: 0 0 8px;
			font-size: .95rem;
			color: #cbd5e1;
			letter-spacing: .01em;
		}
		.list {
			margin: 0;
			padding-left: 18px;
			display: grid;
			gap: 4px;
			font-size: .86rem;
			line-height: 1.35;
		}
		.inline-link {
			color: var(--accent);
			text-decoration: none;
			cursor: pointer;
		}
		.inline-link:hover { text-decoration: underline; }
		.muted { color: var(--muted); }
		.kv { font-size: .84rem; }
		.kv b { color: #cbd5e1; font-weight: 600; }
		.style-row {
			border: 1px solid var(--border);
			border-radius: 10px;
			padding: 10px;
			margin-bottom: 8px;
			background: rgba(15,23,42,.6);
		}
		.style-row .title { font-size: .9rem; font-weight: 600; }
		.style-row .source { font-size: .78rem; color: var(--muted); margin-top: 2px; }
		.empty {
			color: var(--muted);
			font-style: italic;
			font-size: .86rem;
		}
		.ok { color: var(--ok); }
		@media (max-width: 980px) {
			.layout { grid-template-columns: 1fr; }
			.sidebar { height: 45vh; border-right: none; border-bottom: 1px solid var(--border); }
			.content { height: 55vh; }
			.outline {
				border-left: none;
				border-top: 1px solid var(--border);
				height: 35vh;
			}
		}
	</style>
</head>
<body>
	<div class="layout">
		<aside class="sidebar">
			<div class="brand">
				<h1>StandardLib Auto-Dokumentation</h1>
				<div class="meta" id="meta"></div>
			</div>
			<div class="search"><input id="search" type="search" placeholder="Element suchen (Label oder ID) …" /></div>
			<div class="tree" id="tree"></div>
		</aside>
		<main class="content"><section class="panel" id="detail"></section></main>
		<aside class="outline"><section class="outline-panel"><h3>Dropzones</h3><div class="outline-sub" id="outline-meta">Kein Element ausgewählt</div><div id="dropzone-outline"></div></section></aside>
	</div>

	<script id="doc-data" type="application/json">${safeDocJson}</script>
	<script>
		const doc = JSON.parse(document.getElementById('doc-data').textContent);
		const treeEl = document.getElementById('tree');
		const detailEl = document.getElementById('detail');
		const dropzoneOutlineEl = document.getElementById('dropzone-outline');
		const outlineMetaEl = document.getElementById('outline-meta');
		const searchEl = document.getElementById('search');
		const metaEl = document.getElementById('meta');

		metaEl.innerHTML = [
			'<div>Generiert: ' + new Date(doc.generatedAt).toLocaleString('de-CH') + '</div>',
			'<div>Elemente: ' + doc.summary.elementCount + '</div>',
			'<div>Style-Configs: ' + doc.summary.styleConfigCount + '</div>'
		].join('');

		const grouped = new Map();
		for (const el of doc.elements) {
			const g = el.group || 'other';
			if (!grouped.has(g)) grouped.set(g, []);
			grouped.get(g).push(el);
		}
		const orderedGroups = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b, 'de'));
		for (const g of orderedGroups) {
			grouped.get(g).sort((a, b) => {
				const la = (a.label || a.elementId || '').toLocaleLowerCase('de');
				const lb = (b.label || b.elementId || '').toLocaleLowerCase('de');
				const x = la.localeCompare(lb, 'de');
				return x !== 0 ? x : (a.elementId || '').localeCompare(b.elementId || '', 'de');
			});
		}

		let activeId = doc.elements[0] ? doc.elements[0].elementId : null;
		let filterText = '';
		const folderExpanded = new Map();
		const elementMap = new Map((doc.elements || []).map((el) => [el.elementId, el]));

		function esc(value) {
			return String(value ?? '')
				.replaceAll('&', '&amp;')
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;')
				.replaceAll('"', '&quot;')
				.replaceAll("'", '&#39;');
		}

		function getFolderSegments(el) {
			const path = Array.isArray(el.folderPath) ? el.folderPath : [];
			if (path.length <= 2) return [];
			return path.slice(1, -1);
		}

		function buildFolderTree(elements) {
			const root = { children: new Map(), elements: [] };
			for (const el of elements) {
				const segments = getFolderSegments(el);
				let cursor = root;
				for (const segment of segments) {
					if (!cursor.children.has(segment)) cursor.children.set(segment, { children: new Map(), elements: [] });
					cursor = cursor.children.get(segment);
				}
				cursor.elements.push(el);
			}

			const sortNode = (node) => {
				node.elements.sort((a, b) => {
					const la = (a.label || a.elementId || '').toLocaleLowerCase('de');
					const lb = (b.label || b.elementId || '').toLocaleLowerCase('de');
					const byLabel = la.localeCompare(lb, 'de');
					return byLabel !== 0 ? byLabel : (a.elementId || '').localeCompare(b.elementId || '', 'de');
				});
				for (const child of node.children.values()) sortNode(child);
			};

			sortNode(root);
			return root;
		}

		function renderTree() {
			const blocks = [];
			for (const group of orderedGroups) {
				const items = grouped.get(group).filter((el) => {
					const q = filterText.trim().toLocaleLowerCase('de');
					if (!q) return true;
					return (el.label || '').toLocaleLowerCase('de').includes(q) || (el.elementId || '').toLocaleLowerCase('de').includes(q);
				});
				if (items.length === 0) continue;

				blocks.push('<section class="group">');
				blocks.push('<div class="group-title">' + esc(group.replaceAll('-', ' ')) + '</div>');

				const tree = buildFolderTree(items);
				const renderNode = (node, depth, pathPrefix) => {
					const folderEntries = Array.from(node.children.entries())
						.sort((a, b) => a[0].localeCompare(b[0], 'de'));

					for (const [folderName, child] of folderEntries) {
						const pathKey = pathPrefix ? (pathPrefix + '/' + folderName) : folderName;
						const isExpanded = folderExpanded.has(pathKey) ? folderExpanded.get(pathKey) : true;
						const caret = isExpanded ? '▾' : '▸';
						blocks.push('<button class="folder-toggle" data-folder-key="' + esc(pathKey) + '" style="padding-left:' + (10 + depth * 14) + 'px"><span class="caret">' + caret + '</span>' + esc(folderName.replaceAll('-', ' ')) + '</button>');
						if (isExpanded) renderNode(child, depth + 1, pathKey);
					}

					for (const el of node.elements) {
						const active = el.elementId === activeId ? ' active' : '';
						blocks.push(
							'<button class="item' + active + '" data-id="' + esc(el.elementId) + '" style="padding-left:' + (10 + depth * 14) + 'px">'
							+ '<span class="label">' + esc(el.label || el.elementId) + '</span>'
							+ '<span class="id">' + esc(el.elementId) + '</span>'
							+ '</button>'
						);
					}
				};

				renderNode(tree, 0, '');
				blocks.push('</section>');
			}
			treeEl.innerHTML = blocks.join('');
			treeEl.querySelectorAll('.folder-toggle').forEach((btn) => {
				btn.addEventListener('click', () => {
					const key = btn.getAttribute('data-folder-key');
					if (!key) return;
					const current = folderExpanded.has(key) ? folderExpanded.get(key) : true;
					folderExpanded.set(key, !current);
					renderTree();
				});
			});
			treeEl.querySelectorAll('.item').forEach((btn) => {
				btn.addEventListener('click', () => {
					activeId = btn.dataset.id;
					renderTree();
					renderDetail();
				});
			});
		}

		function listOrEmpty(items, formatter) {
			if (!items || items.length === 0) return '<div class="empty">Keine erkannt</div>';
			return '<ul class="list">' + items.map((item) => '<li>' + formatter(item) + '</li>').join('') + '</ul>';
		}

		function renderAllowedElements(dz) {
			const allowedElements = Array.isArray(dz.allowedElements) ? dz.allowedElements : [];
			if (allowedElements.length === 0) return '<div class="empty">Erlaubte Elemente: keine erkannt</div>';
			const items = allowedElements.map((allowed) => {
				const label = allowed.label || allowed.elementId || '-';
				if (allowed.elementId && elementMap.has(allowed.elementId)) {
					return '<li><a href="#" class="inline-link" data-nav-id="' + esc(allowed.elementId) + '">' + esc(label) + ' <span class="muted">(' + esc(allowed.elementId) + ')</span></a></li>';
				}
				if (allowed.elementId) {
					return '<li>' + esc(label) + ' <span class="muted">(' + esc(allowed.elementId) + ')</span></li>';
				}
				return '<li>' + esc(label) + '</li>';
			}).join('');
			return '<ul class="list" style="margin-top:6px">' + items + '</ul>';
		}

		function renderDropzoneOutline(el) {
			if (!el) {
				outlineMetaEl.textContent = 'Kein Element ausgewählt';
				dropzoneOutlineEl.innerHTML = '<div class="empty">Keine erkannt</div>';
				return;
			}

			outlineMetaEl.textContent = (el.label || el.elementId) + ' (' + (el.elementId || '-') + ')';
			const dropzones = Array.isArray(el.dropzones) ? el.dropzones : [];
			if (dropzones.length === 0) {
				dropzoneOutlineEl.innerHTML = '<div class="empty">Keine Dropzones erkannt</div>';
				return;
			}

			dropzoneOutlineEl.innerHTML = '<ul class="list">' + dropzones.map((dz) => {
				const allowed = Array.isArray(dz.allowedElements) ? dz.allowedElements : [];
				const allowedHtml = allowed.length
					? '<ul class="list" style="margin-top:6px">' + allowed.map((item) => {
						const label = item.label || item.elementId || '-';
						if (item.elementId && elementMap.has(item.elementId)) {
							return '<li><a href="#" class="inline-link" data-nav-id="' + esc(item.elementId) + '">' + esc(label) + ' <span class="muted">(' + esc(item.elementId) + ')</span></a></li>';
						}
						return '<li>' + esc(label) + (item.elementId ? ' <span class="muted">(' + esc(item.elementId) + ')</span>' : '') + '</li>';
					}).join('') + '</ul>'
					: '<div class="empty" style="margin-top:6px">Erlaubte Elemente: keine erkannt</div>';

				return '<li><div><b>Dropzone:</b> ' + esc(dz.dropzoneId || '-') + '</div>' + allowedHtml + '</li>';
			}).join('') + '</ul>';

			dropzoneOutlineEl.querySelectorAll('[data-nav-id]').forEach((anchor) => {
				anchor.addEventListener('click', (event) => {
					event.preventDefault();
					const nextId = anchor.getAttribute('data-nav-id');
					if (!nextId || !elementMap.has(nextId)) return;
					activeId = nextId;
					renderTree();
					renderDetail();
				});
			});
		}

		function renderDetail() {
			const el = doc.elements.find((x) => x.elementId === activeId);
			if (!el) {
				detailEl.innerHTML = '<div class="empty">Kein Element ausgewählt</div>';
				renderDropzoneOutline(null);
				return;
			}

			const settable = (el.parameterGroups && el.parameterGroups.settable) || [];
			const referencedOnly = (el.parameterGroups && el.parameterGroups.referencedOnly) || [];
			const notViaProperty = (el.parameterGroups && el.parameterGroups.notViaProperty) || [];
			const propertiesAll = (el.properties && el.properties.all) || [];
			const propertiesSettable = (el.properties && el.properties.settable) || [];
			const propertiesReferencedOnly = (el.properties && el.properties.referencedOnly) || [];

			const styleRows = (el.styles || []).length === 0
				? '<div class="empty">Keine</div>'
				: el.styles.map((s) => {
					const options = (s.options || []).map((o) => '<li>' + esc(o.label) + ': <span class="muted">' + esc(o.cssClass) + '</span></li>').join('');
					const defaults = (s.defaults || []).length ? '<div class="kv"><b>Standard:</b> ' + esc(s.defaults.join(', ')) + '</div>' : '';
					return '<div class="style-row">'
						+ '<div class="title">' + esc(s.identifier || '(ohne Identifier)') + ' | ' + esc(s.label || '(ohne Label)') + '</div>'
						+ '<div class="source">' + esc(s.source || '') + '</div>'
						+ defaults
						+ ((s.options || []).length ? '<ul class="list" style="margin-top:8px">' + options + '</ul>' : '<div class="empty" style="margin-top:8px">Optionen: keine erkannt</div>')
						+ '</div>';
				}).join('');

			const mapping = (el.parameterStyleLinks || []).length === 0
				? '<div class="empty">Keine erkannt</div>'
				: '<ul class="list">' + el.parameterStyleLinks.map((m) => {
					const allOpts = (m.styleOptions || []).map((o) => esc(o.label) + ': ' + esc(o.cssClass)).join(', ');
					return '<li>'
						+ '<b>' + esc(m.parameter) + '</b> (Default: ' + esc(m.defaultValue) + ') → '
						+ esc(m.styleIdentifier || '(ohne Identifier)') + ' | ' + esc(m.styleLabel || '(ohne Label)')
						+ '<br><span class="muted">Default-Option: ' + esc(m.defaultOptionLabel || '-') + ' (' + esc(m.defaultOptionCssClass || '-') + ')</span>'
						+ '<br><span class="muted">Alle Style-Optionen: ' + (allOpts || 'keine erkannt') + '</span>'
						+ '</li>';
				}).join('') + '</ul>';

			detailEl.innerHTML = ''
				+ '<header class="header">'
				+ '  <h2>' + esc(el.label || el.elementId) + ' <span class="muted">(' + esc(el.elementId) + ')</span></h2>'
				+ '  <div class="sub">Quelle: ' + esc(el.source || '-') + (el.template ? ' · Template: ' + esc(el.template) : '') + '</div>'
				+ (el.description ? '  <div class="sub">' + esc(el.description) + '</div>' : '')
				+ '  <div class="chips"><span class="chip">Gruppe: ' + esc(el.group || 'other') + '</span><span class="chip">Parts: ' + (el.parts || []).length + '</span><span class="chip">Styles: ' + (el.styles || []).length + '</span><span class="chip">Dropzones: ' + (el.dropzones || []).length + '</span></div>'
				+ '</header>'
				+ '<section class="grid">'
				+ '  <article class="card"><h3>Parameter (via Property settable)</h3>' + listOrEmpty(settable, (x) => esc(x)) + '</article>'
				+ '  <article class="card"><h3>Parameter (via Property referenziert)</h3>' + listOrEmpty(referencedOnly, (x) => esc(x)) + '</article>'
				+ '  <article class="card"><h3>Parameter (nicht als Property)</h3>' + listOrEmpty(notViaProperty, (x) => esc(x)) + '</article>'
				+ '  <article class="card"><h3>Properties (Template)</h3>'
					+ '<div class="kv"><b>Alle:</b></div>' + listOrEmpty(propertiesAll, (x) => esc(x))
					+ '<div class="kv" style="margin-top:10px"><b>Per set anpassbar:</b></div>' + listOrEmpty(propertiesSettable, (x) => esc(x))
					+ '<div class="kv" style="margin-top:10px"><b>Nur referenziert:</b></div>' + listOrEmpty(propertiesReferencedOnly, (x) => esc(x))
				+ '</article>'
				+ '  <article class="card"><h3>Element Parts</h3>' + listOrEmpty(el.parts || [], (p) => 'Typ: ' + esc(p.type) + ', ID: ' + esc(p.id || '-') + ', Label: ' + esc(p.label || '-')) + '</article>'
				+ '</section>'
				+ '<section class="card" style="margin-top:14px"><h3>Parameter ↔ Style Zuordnung</h3>' + mapping + '</section>'
				+ '<section class="card" style="margin-top:14px"><h3>Styles</h3>' + styleRows + '</section>';

			renderDropzoneOutline(el);

			detailEl.querySelectorAll('[data-nav-id]').forEach((anchor) => {
				anchor.addEventListener('click', (event) => {
					event.preventDefault();
					const nextId = anchor.getAttribute('data-nav-id');
					if (!nextId || !elementMap.has(nextId)) return;
					activeId = nextId;
					renderTree();
					renderDetail();
				});
			});
		}

		searchEl.addEventListener('input', () => {
			filterText = searchEl.value || '';
			renderTree();
		});

		renderTree();
		renderDetail();
	</script>
</body>
</html>`;
}

function main() {
	const doc = buildDocumentation();
	const markdown = toMarkdown(doc);
	const html = toHtml(doc);

	if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

	fs.writeFileSync(outputMarkdown, markdown, 'utf8');
	fs.writeFileSync(outputJson, JSON.stringify(doc, null, 2), 'utf8');
	fs.writeFileSync(outputHtml, html, 'utf8');

	// eslint-disable-next-line no-console
	console.log(`Generated: ${normalizePosix(path.relative(rootDir, outputMarkdown))}`);
	// eslint-disable-next-line no-console
	console.log(`Generated: ${normalizePosix(path.relative(rootDir, outputJson))}`);
	// eslint-disable-next-line no-console
	console.log(`Generated: ${normalizePosix(path.relative(rootDir, outputHtml))}`);
}

main();
