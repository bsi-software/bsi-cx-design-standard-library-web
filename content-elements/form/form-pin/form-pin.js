import Alpine from '@alpinejs/csp';
import { Tooltip } from 'bootstrap';

Alpine.data('formPin', () => ({
  bsiInputElement: null, // Input field required for CX story / value flow
  maxlength: null,
  requiredErrorElement: null,
  form: null,
  root: null,

  initForm() {
    this.form = this.$el;
    this.root = this.$root;

    if (this.root.classList.contains('bsi-form-label-floating')) {
      for(const floatingElement of this.form.getElementsByClassName('bsi-label-floating-element')) {
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
      this.validateInput();
    }
    this.form.classList.add('was-validated');
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  validateInput() {
    if (this.bsiInputElement.value.length != this.maxlength) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
  },

  initPinNumberFields() {
    this.bsiInputElement = this.$root.querySelector('.bsi-form-field-input-original');
    let containerDiv = this.$root.querySelector('.bsi-form-pin-element');

    const maxLength = this.bsiInputElement.getAttribute('maxlength');
    if (maxLength == null) {
      this.maxlength = 6;
    } else {
      this.maxlength = this.bsiInputElement.getAttribute('maxlength');
    }

    for (let i = 0; i < this.maxlength; i++) {
      this._initPinNumberField(containerDiv, i);
    }
  },

  _initPinNumberField(containerDiv, i) {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let pinInput = document.createElement('input');
    
    div.classList = 'input-wrapper';
    label.classList = 'form-label';
    label.innerHTML = (i + 1) + ".";
    pinInput.classList = 'bsi-form-field-input form-control bsi-form-field-input pin';
    
    pinInput.setAttribute('x-init', 'initFormPinInput');
    pinInput.setAttribute('required', 'true');

    div.appendChild(label);
    div.appendChild(pinInput);
    containerDiv.appendChild(div);
  },
  
  initFormPinInput() {
    let inputPin = this.$el;
    inputPin.setAttribute('inputmode', 'numeric');
    inputPin.setAttribute('pattern', "[0-9]");

    inputPin.addEventListener('focusin', (e) => {
      inputPin.setAttribute('old', inputPin.value);
    });

    inputPin.addEventListener('keydown', (e) => {
      if (e.key ==='Backspace' && !inputPin.value) {
        this._autoFocusPreviousPinInput();
      }
    });

    inputPin.addEventListener('input', (e) => {
      const inputPinList = this.$root.querySelectorAll('input.pin');
      this._cleanUp();
      this.bsiInputElement.value = Array.from(inputPinList).reduce((result, input) => {
        return result + input.value;
      }, "");
      if (this.$root.classList.contains('auto-submit')) {
        this._autoSubmitIfFilledIn();
      }
      this._autoFocusNextPinInput();
    });
  },

  _autoFocusNextPinInput() {
    let inputPin = this.$el;
    let nextWrapper = inputPin.parentNode.nextElementSibling;
    if (inputPin.value && !this._isLastPinElement()) {
      this._autoFocus(nextWrapper);
    }
  },

  _autoFocusPreviousPinInput() {
    let inputPin = this.$el;
    let previousWrapper = inputPin.parentNode.previousSibling;
    if (previousWrapper != null) {
      this._autoFocus(previousWrapper);
    }
  },

  _autoFocus(wrapper){
    var nextPinInput = wrapper.querySelector('input.pin');
      if (nextPinInput) {
        nextPinInput.focus();
      }
  },

  _autoSubmitIfFilledIn() {
    let form = this.$root.querySelector('.formular-pin');;
    if (form && (this.bsiInputElement.value.length == this.maxlength)) {
      form.submit();
    }
  },

  _cleanUp() {
    // TODO: auch im DOM lösbar?
    let inputPin = this.$el;
    if (inputPin.value) {
      if (this._isLastPinElement()){
        inputPin.value = inputPin.value.slice(-1);
      }

      const numberPattern = /^[0-9]+$/;
      if (inputPin.value.length > 1) {
        var oldValue = inputPin.getAttribute('old');
        var currentValue = inputPin.value;
        
        if (!numberPattern.test(inputPin.value)) {
          inputPin.value = oldValue;
        } else {
          var newValue = currentValue.replace(oldValue, '');
          inputPin.value = newValue;
          oldValue = newValue;
        }

      } else if (!numberPattern.test(inputPin.value)) {
        inputPin.value = null;
      }
    }
  },

  _isLastPinElement() {
    return this.$el.parentNode.nextElementSibling == null; 
  },
}));
