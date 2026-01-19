// ------------------------------------------------------------
// Library Localization Index (German)
//
// Purpose:
// - Central entry point for all library localization files.
// - Imports and aggregates localization data from individual
//   element groups (e.g. buttons, layout, forms).
// - One index per language, selected via the Webpack configuration.
//
// Notes:
// - This file must NOT contain any text values itself.
// - Only import and re-export localization data from group files.
// - Individual group files contain the actual translated strings.
// - Keeping this as a central index simplifies language switching
//   and ensures a single import location for consumers.
// ------------------------------------------------------------

const baseProperties = require('./properties');

const textTranslations = require('./content-elements/text-elements/translations-de');
const layoutTranslations = require('./content-elements/layout/translation-de');

module.exports = {
  ...baseProperties,
  ...layoutTranslations,
  ...textTranslations,

  language: 'de',
}