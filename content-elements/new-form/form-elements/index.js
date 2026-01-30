
const { newFormFields } = require("../form-elements/form-fields");

const formElements = [
  ...newFormFields,
  require("./checkbox"),
  require("./checkbox-group"),
  require("./checkbox-group/checkbox-group-checkbox"),
  require("./radio-group"),
  require("./select"),
  require("./textarea"),
  require("./toggle-switch"),
  require("./upload-field"),
  require("./polls/nps"),
  require("./polls/stars"),

];

module.exports.newFormElements = formElements;
