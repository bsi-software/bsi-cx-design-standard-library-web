import Alpine from '@alpinejs/csp';

Alpine.data('checkbox', () => ({
  requiredErrorElement: null,

  initRequiredError() {
    this.requiredErrorElement = this.$el;
    this._validateForSubmit();
  },

  validateInput() {
    this.requiredErrorElement.style.display = (this.$el.checked || !this.$el.hasAttribute('required')) ? 'none' : 'block';
    this._validateForSubmit();
  },

  _validateForSubmit() {
    !this.$el.value && this.$el.hasAttribute('required') ? this.$root.classList.remove('validated') : this.$root.classList.add('validated');
  },

}))