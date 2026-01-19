const buttonProperties = require('./content-elements/buttons/properties');
const layoutProperties = require('./content-elements/layout/properties');
const textElements = require('./content-elements/text-elements/properties');

module.exports = {
  ...buttonProperties,
  ...layoutProperties,
  ...textElements
};