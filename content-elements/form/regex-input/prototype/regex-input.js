import Alpine from '@alpinejs/csp';

Alpine.data('regexInput', () => ({
  input:null,
  requiredValidationMessage: '',
  logicValidationMessage: '',
  init() {
    this.input = this.$root.querySelector('input');
    this.requiredValidationMessage = this.$root.querySelector('.invalid-feedback').innerText;
    this.logicValidationMessage = this.$root.querySelector('.logic-validation').innerText;
    let regexStr = this.$root.querySelector('.regex-text').innerText;
    this.input.setAttribute('pattern', regexStr);
  },
  validate() {
    let logicInvalid = !this.input.checkValidity() && this.input.value;
    this.$root.querySelector('.invalid-feedback').innerText = logicInvalid ? this.logicValidationMessage : this.requiredValidationMessage;
  }
}));