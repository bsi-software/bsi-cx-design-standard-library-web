/**
 * Creates the normalized documentation model for one element.
 * Centralizing this shape keeps all renderers and processors aligned.
 */
function createElementDocumentationModel(input) {
	return {
		elementId: input.elementId,
		label: input.label,
		group: input.group,
		folderPath: input.folderPath,
		description: input.description,
		source: input.source,
		template: input.template,
		parameters: input.parameters,
		parameterGroups: input.parameterGroups,
		properties: input.properties,
		parameterStyleLinks: input.parameterStyleLinks,
		parts: input.parts,
		styles: input.styles,
		dropzones: input.dropzones,
		validation: input.validation,
	};
}

/**
 * Builds validation status based on the agreed generic conventions:
 * - elementId in index.js must exist as data-bsi-element in twig
 * - element parts from index.js should appear as data-bsi-element-part in twig
 * - dropzones from index.js should appear as data-bsi-dropzone in twig
 */
function buildTemplateValidation({ elementId, parts, dropzones, templateMarkers }) {
	const markerElementIds = templateMarkers?.elementIds || new Set();
	const markerPartIds = templateMarkers?.partIds || new Set();
	const markerDropzoneIds = templateMarkers?.dropzoneIds || new Set();

	const missingPartIds = (parts || [])
		.map((part) => part?.id)
		.filter(Boolean)
		.filter((id) => !markerPartIds.has(id));

	const missingDropzoneIds = (dropzones || [])
		.map((dropzone) => dropzone?.dropzoneId)
		.filter(Boolean)
		.filter((id) => !markerDropzoneIds.has(id));

	return {
		elementIdMatchesTemplate: markerElementIds.size === 0 ? true : markerElementIds.has(elementId),
		missingPartIds,
		missingDropzoneIds,
	};
}

module.exports = {
	createElementDocumentationModel,
	buildTemplateValidation,
};
