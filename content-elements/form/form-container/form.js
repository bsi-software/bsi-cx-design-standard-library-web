import Alpine from '@alpinejs/csp';
import { Tooltip } from 'bootstrap';

Alpine.data('formElement', () => ({
  form: null,
  root: null,

  initForm() {
    this.form = this.$el;
    this.root = this.$root;

    if (this.root.classList.contains('bsi-form-label-floating')) {
      for (const floatingElement of this.form.getElementsByClassName('bsi-label-floating-element')) {
        this._initFloatingLabels(floatingElement);
      }
    }

    if (this.root.classList.contains('bsi-form-info-as-tooltip')
      && ['bsi-form-label-top', 'bsi-form-label-left'].some(labelClass => this.root.classList.contains(labelClass))) {
      this.form.querySelectorAll('.bsi-form-element').forEach((formElement) => {
        let infoTextField = formElement.querySelector('.form-text');
        let tooltipIcon = formElement.querySelector('i');
        if (infoTextField && infoTextField.innerText && tooltipIcon) {
          tooltipIcon.classList.add('tooltip-visible');
          tooltipIcon.parentElement.classList.add('contains-tooltip');
          tooltipIcon.setAttribute('title', infoTextField.innerText);
          new Tooltip(tooltipIcon);
        }
      })
    }
  },

  submitForm(e) {
    if (!this.form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      this._validateFormFieldInput();
      this._validateTelInput();
      this._validateRadioInput();
      this._validateCheckboxInput();
    }
    this.form.classList.add('was-validated');
  },

  _initFloatingLabels(floatingElement) {
    let input = floatingElement.querySelector('.form-control');
    let label = floatingElement.querySelector('.form-label');
    let labelAndInfo = floatingElement.querySelector('.form-label-and-info-text');
    if (!input) {
      input = floatingElement.querySelector('.form-select');
    } else {
      if (input.placeholder.length === 0) {
        if (input.type === "date") {
          label.style.opacity = 1;
          label.style.transform = 'initial';
        } else {
          input.placeholder = 'Placeholder';
        }
      }
    }

    if (!(input.type === "range")) {
      let floatingDiv = document.createElement("div");
      floatingDiv.classList.add('form-floating');
      floatingElement.insertBefore(floatingDiv, labelAndInfo.nextSibling);
      floatingDiv.append(input, label);
    }
  },

  _validateFormFieldInput() {
    this.form.querySelectorAll('.bsi-form-field-element').forEach(formFieldInput => {
      let input = formFieldInput.querySelector('.bsi-form-field-input');
      let valid = input.checkValidity() || input.value;
      this._displayRequiredError(formFieldInput, '.invalid-feedback', valid);
    });
  },

  _validateTelInput() {
    this.form.querySelectorAll('.bsi-form-tel-input').forEach(telInput => {
      let input = telInput.querySelector('.bsi-form-tel-input-element');
      let valid = input.checkValidity() || input.value;
      this._displayRequiredError(telInput, '.bsi-tel-input-error-required', valid);
    });
  },

  _validateRadioInput() {
    this.form.querySelectorAll('.bsi-form-radio-element').forEach(radioElement => {
      let radioInputs = Array.from(radioElement.querySelectorAll('input[type="radio"]'));
      let radioValid = radioInputs.some(this._validateCheckbox);
      this._displayRequiredError(radioElement, '.invalid-feedback', radioValid);
    });
  },
  _validateCheckboxInput() {
    this.form.querySelectorAll('.bsi-form-checkbox-element').forEach(checkboxEl => {
      let checkbox = checkboxEl.querySelector('input[type="checkbox"]');
      let valid = this._validateCheckbox(checkbox);
      this._displayRequiredError(checkboxEl, '.invalid-feedback', valid);
    });
  },
  _validateCheckbox(checkbox) {
    return checkbox.checked || !checkbox.hasAttribute('required');
  },
  _displayRequiredError(element, selector, valid) {
    element.querySelector(selector).style.display = valid ? 'none' : 'block';
  },
}))