import Alpine from '@alpinejs/csp';

Alpine.data('formPin', () => ({
  bsiInputElement: null, // Input field required for CX story / value flow
  maxlength: null,
  requiredErrorElement: null,

  initPinNumberFields() {
    this.bsiInputElement = this.$root.querySelector('.bsi-form-field-input-original');
    let containerDiv = this.$root.querySelector('.generated-inputs');

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
    let inputWrapper = document.createElement('div');
    inputWrapper.classList = 'input-wrapper';
    containerDiv.appendChild(inputWrapper);
  
    let label = document.createElement('label');
    label.classList = 'form-label';
    label.innerHTML = (i + 1) + ".";
    inputWrapper.appendChild(label);
  
    let pinBox = document.createElement('input');
    pinBox.setAttribute('x-init', 'initFormPinInput');
    pinBox.setAttribute('required', 'true');
    pinBox.classList = 'bsi-form-field-input form-control bsi-form-field-input pin';
    inputWrapper.appendChild(pinBox);
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
    let form = this.$root.closest('form');
    if (form && this.bsiInputElement.value.length == this.maxlength) {
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
