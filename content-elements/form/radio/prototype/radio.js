import Alpine from '@alpinejs/csp';

Alpine.data('formRadio', () => ({
  root: null,
  requiredErrorElement: null,

  initRequiredError() {
    this.root = this.$root;
    this.requiredErrorElement = this.$el;
    this._valid() ? this.$root.classList.add('validated') : this.$root.classList.remove('validated');
  },

  validateInput() {
    if (!this._valid()) {
      this.requiredErrorElement.style.display = "block";
      this.$root.classList.remove('validated');
    } else {
      this.requiredErrorElement.style.display = "none";
      this.$root.classList.add('validated');
    }
  },

  _valid(){
    let valid = false;
    let radioInputs = this.root.querySelectorAll('input[type="radio"]');
    for (const radioInput of radioInputs) {
      if (radioInput.checked || !radioInput.hasAttribute('required')) {
        valid = true;
        break;
      }
    }
    return valid;
  }

}))