const { cx, bsiProperty, Version } = require('@bsi-cx/design-build');

// Example: JSON.stringify({ "Keiner": "", "PLZ": "[0-9]{5}", "KFZ": "[A-ZÖÜÄ]{1,3} [A-ZÖÜÄ]{1,2} [1-9]{1}[0-9]{1,3}" })
const regexPatterns = JSON.parse(bsiProperty('regexPattern', '{}'));


module.exports = regexPatterns && Object.keys(regexPatterns).length ? cx.style
  .withIdentifier('form-field-pattern-wJakrq')
  .withMinVersion(Version.CX_23_1)
  /*.withLabel('Regex validation')*/
  .withLabel('Regex Validierung')
  .withStyleOptions(
    ...Object.entries(regexPatterns)
      .map(([key, value]) => {
        let replacedValue = String(value).replaceAll(/([\\d|\\s|\[|\{|])/gm, "\\$1");
        let id = key.toLocaleLowerCase().replaceAll(' ', '');
        return cx.styleOption.withLabel(key).withStyleId(id).withCssClass(id)
          .withDomManipulations(
            cx.domManipulation
              .withSelector('input')
              .withAttribute('pattern')
              .withValue(replacedValue))})) : null;  