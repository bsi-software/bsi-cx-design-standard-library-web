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
      this._validateFormFieldInput();
      this._validateTelInput();
      this._validateRadioInput();
      this._validateCheckboxInput();
      this._setAriaInvalid();
      this._formValidationSummary();
      this._validateFormFieldTel();
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

  _validateFormFieldInput() {
    let formFieldInputs = this.form.getElementsByClassName('bsi-form-field-element');
    for (const formFieldInput of formFieldInputs) {
      let input = formFieldInput.getElementsByClassName('bsi-form-field-input')[0];
      if (!input.checkValidity() && !input.value) {
        formFieldInput.getElementsByClassName('invalid-feedback')[0].style.display = "block";
      } else {
        formFieldInput.getElementsByClassName('invalid-feedback')[0].style.display = "none";
      }
    }
  },

  _validateTelInput() {
    let telInputs = this.form.getElementsByClassName('bsi-form-tel-input');
    for (const telInput of telInputs) {
      let input = telInput.getElementsByClassName('bsi-form-tel-input-element')[0];
      if (!input.checkValidity() && !input.value) {
        telInput.getElementsByClassName('bsi-tel-input-error-required')[0].style.display = "block";
      } else {
        telInput.getElementsByClassName('bsi-tel-input-error-required')[0].style.display = "none";
      }
    }
  },

  _validateFormFieldTel() {
    let formTelElements = this.form.getElementsByClassName('bsi-form-tel-input');
    for (const formTelElement of formTelElements) {
      let formTelValid = false;
      let formTelInput = formTelElement.getElementsByClassName('bsi-form-tel-input-element')[0];
      formTelValid = formTelInput.value != '' || !formTelInput.hasAttribute('required');
      if (!formTelValid) {
        formTelElement.getElementsByClassName('invalid-feedback')[0].style.display = "block";
      } else {
        formTelElement.getElementsByClassName('invalid-feedback')[0].style.display = "none";
      }
    }
  },

  _validateRadioInput() {
    let radioElements = this.form.getElementsByClassName('bsi-form-radio-element');
    for (const radioElement of radioElements) {
      let radioInputs = Array.from(radioElement.querySelectorAll('.form-check-input'));
      let radioValid = radioInputs.some(radio => radio.checked || !radio.hasAttribute('required'));
      radioElement.getElementsByClassName('invalid-feedback')[0].style.display = radioValid ? 'none' : 'block';
      radioElement.setAttribute('aria-invalid', !radioValid);
    }
  },  
  
  _validateCheckboxInput(){
    let CheckboxInputs = this.form.getElementsByClassName('bsi-form-checkbox-element');
    for (const CheckboxInput of CheckboxInputs) {
      let input = CheckboxInput.getElementsByClassName('form-checkbox-input')[0];
      if (input.checked || !input.hasAttribute('required')) {
        CheckboxInput.getElementsByClassName('invalid-feedback')[0].style.display = "none";
      } else {
        CheckboxInput.getElementsByClassName('invalid-feedback')[0].style.display = "block";
      }
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
