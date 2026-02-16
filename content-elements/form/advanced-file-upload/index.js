require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');

const hiddenInput = (i) => cx.part.formField.withId(`hidden-file-input-32ea01d7-${i}`).withLabel(`Hidden Input Label ${i}`);

module.exports = cx
  .contentElement
  .withFile(require('./template.twig'))
  .withElementId('file-input-REEhtN')
  .withLabel('Mehrfach-Upload')
  .withDescription('erweiteres Upload-Element')
  .withIcon(Icon.FORMFIELD)
  .withParts(
    cx.part.plainText
      .withId('label-text-f95479ef')
      .withLabel('Label Text'),
    cx.part.plainText
      .withId('file-input-part-text-T9yfhp')
      .withLabel('Info Text'),
    cx.part.plainText
      .withId('file-input-part-error-required-904DIx')
      .withLabel('Fehlermeldung bei leerem Pflichtfeld'),
    cx.part.plainText
      .withId('file-input-part-error-invalid-5g1mUc')
      .withLabel('Fehlermeldung bei ungültiger Eingabe'),
    hiddenInput(1),
    hiddenInput(2),
    hiddenInput(3),
    hiddenInput(4),
    hiddenInput(5),
    hiddenInput(6),
    hiddenInput(7),
    hiddenInput(8),
    hiddenInput(9));