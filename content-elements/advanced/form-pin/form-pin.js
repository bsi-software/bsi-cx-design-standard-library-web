import Alpine from '@alpinejs/csp';

Alpine.data('formPin', () => ({
  rootEl: null,
  maxlength: null,

  initFormFieldInput() {
    this.rootEl = this.$root.querySelector('.bsi-form-field-input');
    var containerDiv = this.$root.querySelector('.bsi-form-pin-element');

    if (this.rootEl.getAttribute('maxlength') == null) {
      this.maxlength = 6;
    } else {
      this.maxlength = this.rootEl.getAttribute('maxlength');
    }

    for (var i = 0; i < this.maxlength; i++) {
      var inputWrapper = document.createElement('div');
      inputWrapper.classList = 'input-wrapper';
      containerDiv.appendChild(inputWrapper);

      var label = document.createElement('label');
      label.classList = 'form-label';
      label.innerHTML = i + 1 + ".";
      inputWrapper.appendChild(label);

      var pinBox = document.createElement('input');
      pinBox.setAttribute('x-init', 'initFormPinInput');
      pinBox.setAttribute('required', 'true');
      pinBox.classList = 'bsi-form-field-input form-control bsi-form-field-input pin';
      inputWrapper.appendChild(pinBox);
    }
  },

  initFormPinInput() {
    var inputPin = this.$el;
    inputPin.setAttribute('inputmode', 'numeric');
    inputPin.setAttribute('pattern', "[0-9]");
    inputPin.addEventListener('focusin', (e) => {
      inputPin.setAttribute('old', inputPin.value);
    });
    inputPin.addEventListener('input', (e) => {
      this._isCompletelyFilledIn();
      this._autoFocusNextPinInput();
    });
  },

  _isCompletelyFilledIn() {
    let form = this.$root.closest('form');
    const inputPinList = this.$root.querySelectorAll('input.pin');
    this._cleanUp();
    this.rootEl.value = Array.from(inputPinList).reduce((result, input) => {
      return result + input.value;
    }, "");
    if (form && this.rootEl.value.length == this.maxlength) {
      form.submit();
    }
  },

  _autoFocusNextPinInput() {
    var inputPin = this.$el;
    var inputWrapper = inputPin.parentNode.nextElementSibling;
    if (inputPin.value && !this._LastPinElement()) {
      var nextPinInput = inputWrapper.children[1];
      while (nextPinInput) {
        var pinInput = nextPinInput;
        pinInput.focus();
        break;
      }
    }
  },

  _cleanUp() {
    var inputPin = this.$el;
    if (inputPin.value) {
      if (this._LastPinElement()){
        inputPin.value = inputPin.value.slice(-1);
      }
      if (inputPin.value.length > 1) {
        var old = inputPin.getAttribute('old');
        var value = inputPin.value;
        if (!/^[0-9]+$/.test(inputPin.value)) {
          inputPin.value = old;
        } else {
          var newVal = value.replace(old, '');
          inputPin.value = newVal;
          var old = newVal;
        }
      } else if (!/^[0-9]+$/.test(inputPin.value)) {
        inputPin.value = null;
      }
    }
  },

  _LastPinElement() {
    var inputPin = this.$el;
    if(inputPin.parentNode.nextElementSibling == null){
      return true;
    } else {
      return false;
    } ;
  },
}));
