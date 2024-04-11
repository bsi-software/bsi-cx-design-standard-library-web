import Alpine from '@alpinejs/csp';

Alpine.data('checkbox', () => ({
  requiredErrorElement: null,

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  validateInput() {
    if (!this.inputEl.value && this.inputEl.hasAttribute('required')) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
  },
}))