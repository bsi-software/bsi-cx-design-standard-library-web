import Alpine from 'alpinejs';

Alpine.data('formPoll', () => ({
  root: null,
  radioItems: null,
  formRadioDataAttr: 'data-form-radio-selected',
  labelElement: null,
  requiredErrorElement: null,

  initRadioGroup(root, el) {
    this.root = root;
    const thisForm = this;
    this.radioItems = this.root.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < this.radioItems.length; i++) {
      const radioItem = this.radioItems[i];
      radioItem.addEventListener('change', function () {
        thisForm._updateStatus(radioItem);
      });
      radioItem.form.addEventListener('reset', function () {
        thisForm._updateStatus(radioItem);
      });
      if (radioItem.checked) {
        this._updateStatus(radioItem);
      }
    }
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  initLabel() {
    this.labelElement = this.$el;
    if (this.root.classList.contains('bsi-poll-nps')) {
      // NPS elements have a max width of 42px and gaps of 0.1em
      this.labelElement.style.maxWidth = (this.radioItems.length * 42) + ((this.radioItems.length - 1) * 1.6) + 'px';
    } else if (this.root.classList.contains('bsi-poll-star')) {
      // Star elements have a width of 40px and no gaps
      this.labelElement.style.maxWidth = (this.radioItems.length * 40) + 'px';
    }
  },

  validateInput() {
    let pollValid = false;
    let pollInputs = this.root.querySelectorAll('input[type="radio"]');
    for (const pollInput of pollInputs) {
      if (pollInput.checked || !pollInput.hasAttribute('required')) {
        pollValid = true;
        break;
      }
    }
    if (!pollValid) {
      this.requiredErrorElement.style.display = 'block';
    } else {
      this.requiredErrorElement.style.display = 'none';
    }
  },

  _updateStatus(radio) {
    this._resetStatus(radio.parentNode.parentNode);
    const value = radio.checked ? 'true' : 'false';
    radio.parentNode.setAttribute(this.formRadioDataAttr, value);
  },

  _resetStatus(radioGroup) {
    const radioItem = radioGroup.querySelector('[' + this.formRadioDataAttr + '="true"]');
    if (radioItem !== null) {
      radioItem.setAttribute(this.formRadioDataAttr, 'false');
    }
  },
}))