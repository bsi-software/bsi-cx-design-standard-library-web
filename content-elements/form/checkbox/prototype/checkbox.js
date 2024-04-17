import Alpine from '@alpinejs/csp';

Alpine.data('checkbox', () => ({
  requiredErrorElement: null,

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  validateInput() {
    if (this.$el.checked || !this.$el.hasAttribute('required')) {
      this.requiredErrorElement.style.display = "none";
    } else {
      this.requiredErrorElement.style.display = "block";
    }
  },

}))