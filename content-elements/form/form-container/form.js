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
          infoTextField.setAttribute("style", "display: none;");
          new Tooltip(tooltipIcon);
        }
      })
    }
  },

  submitForm(e) {
    if (!this.form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      this._validateTelInput();
      this._validateRadioInput();
      this._validateCheckboxInput();
      this._setAriaInvalid();
      this._formValidationSummary();
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
        if (input.type === 'date') {
          label.style.opacity = 1;
          label.style.transform = 'initial';
        } else {
          input.placeholder = 'Placeholder';
        }
      }
    }

    if (!(input.type === 'range')) {
      let floatingDiv = document.createElement('div');
      floatingDiv.classList.add('form-floating');
      floatingElement.insertBefore(floatingDiv, labelAndInfo.nextSibling);
      floatingDiv.append(input, label);
    }
  },

  _showValidationMessage(messageElement, show) {
    messageElement.style.display = show ? 'block' : 'none';
    if (show) {
      messageElement.removeAttribute('hidden');
      messageElement.removeAttribute('aria-hidden');
    } else {
      messageElement.setAttribute('hidden', 'true');
      messageElement.setAttribute('aria-hidden', 'true');
    }
  },

  _validateTelInput() {
    let telInputs = this.form.getElementsByClassName('bsi-form-tel-input');
    for (const telInput of telInputs) {
      let visibleInput = telInput.querySelector('input[type=tel]');
      if (!visibleInput.checkValidity()) {
        let hasValue = !!visibleInput.value;
        let requiredValidation = telInput.querySelector('.invalid-feedback');
        let logicValidation = telInput.querySelector('.bsi-tel-input-error-invalid');
        this._showValidationMessage(requiredValidation, !hasValue);
        this._showValidationMessage(logicValidation, hasValue);
      }
    }
  },

  _validateRadioInput() {
    let radioElements = this.form.getElementsByClassName('bsi-form-radio-element');
    for (const radioElement of radioElements) {
      let radioInputs = Array.from(radioElement.querySelectorAll('.form-check-input'));
      let radioValid = radioInputs.some(radio => radio.checkValidity());
      var validationElement = radioElement.querySelector('.invalid-feedback');
      radioElement.setAttribute('aria-invalid', !radioValid);
      this._showValidationMessage(validationElement, !radioValid);
    }
  },

  _validateCheckboxInput() {
    let checkboxInputs = this.form.getElementsByClassName('bsi-form-checkbox-element');
    for (const checkboxInput of checkboxInputs) {
      let input = checkboxInput.getElementsByClassName('form-checkbox-input')[0];
      let invalidFeedback = checkboxInput.getElementsByClassName('invalid-feedback')[0];
      this._showValidationMessage(invalidFeedback, !input.checkValidity());
    }
  },

  _setAriaInvalid() {
    var elements = this.form.querySelectorAll('.bsi-form-element:not(.bsi-form-radio-element)');
    elements.forEach(element => {
      let input = element.querySelector('input, select, textarea');
      input.setAttribute('aria-invalid', !input.checkValidity());
    });
  },

  _formValidationSummary() {
    if (this.root.classList.contains('bsi-form-show-valdiation-summary')) {
      let validationSummary = this.$root.querySelector('.form-validation-summary');
      let invalidElements = Array.from(this.form.querySelectorAll('.bsi-form-element:has([aria-invalid=true]) .form-label-and-info-text label'));
      let messageContainerList = this.form.querySelector('.form-validation-summary ul') ?? document.createElement('ul');
      messageContainerList.innerHTML = invalidElements.map(label => `<li>${label.innerText}</li>`).join('');
      validationSummary.appendChild(messageContainerList);
    }
  },
}));
