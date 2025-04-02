import Alpine from '@alpinejs/csp';
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/de.js";
import "flatpickr/dist/l10n/fr.js";
import "flatpickr/dist/l10n/it.js";

Alpine.data('formField', () => ({
  rootEl: null,
  inputEl: null,
  fp: null,
  minDate: null,
  maxDate: null,
  invalidErrorElement: null,
  errorMessageInvalid: '',

  initFormFieldInput() {
    this.rootEl = this.$root;
    this.inputEl = this.$el;
    if (this.inputEl.type === 'range') {
      this._initRangeInput();
    } else if (['date', 'datetime-local', 'time'].includes(this.inputEl.type)) {
      this._initDateInput();
    }

    if (this.inputEl.type === 'text' || this.inputEl.type === 'email' || this.inputEl.type === 'password') {
      if (!this.inputEl.hasAttribute("maxlength")) {
        this.inputEl.setAttribute("maxlength", 250);
      }
    }
  },

  initInvalidError() {
    this.invalidErrorElement = this.$el;
    this.errorMessageInvalid = this.invalidErrorElement.getElementsByClassName('errormessage-invalid')[0].innerText;
  },

  validateInput() {
    if (this.inputEl.closest('.bsi-form-label-floating') && this.inputEl.classList.contains('flatpickr-input') && this.inputEl.value) {
      let label = this.rootEl.querySelector('.form-label');
      label.style.opacity = 0.65;
      label.style.transform = 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)';
    }

    this._validateMailInput();
    this._validateNumberInput();
    this._validateTextInput();
    this._validateDateTimeInput();
  },

  _validateNumberInput() {
    if (this.inputEl.type === 'number') {
      let valid = true;
      if (this.inputEl.value && (this.inputEl.min || this.inputEl.max)) {
        let inputValue = parseInt(this.inputEl.value);
        let minValue = parseInt(this.inputEl.min ? this.inputEl.min : Number.MIN_SAFE_INTEGER);
        let maxValue = parseInt(this.inputEl.max ? this.inputEl.max : Number.MAX_SAFE_INTEGER);
        valid = minValue <= inputValue && inputValue <= maxValue;
      }
      this.calculateVisibility(valid);
    }
  },

  _validateTextInput() {
    if (this.inputEl.type === 'text' || this.inputEl.type === 'password') {
      let inputValue = this.inputEl.value;
      let maxCharacters = parseInt(this.inputEl.getAttribute("maxLength") ? this.inputEl.getAttribute("maxLength") : 256);
      let valid = inputValue.length <= maxCharacters;
      this.calculateVisibility(valid);
    }
  },

  _validateDateTimeInput() {
    if (this.inputEl.classList.contains('flatpickr-input')) {
      let valid = true;
      if (this.inputEl.value && (this.inputEl.min || this.inputEl.max)) {
        let isTime = this.inputEl.value.length === 5;
        let valDate = new Date(isTime ? `2000-01-01T${this.inputEl.value}` : this.inputEl.value);
        let minDate = new Date(isTime ? `2000-01-01T${this.inputEl.min}` : this.inputEl.min);
        let maxDate = new Date(isTime ? `2000-01-01T${this.inputEl.max}` : this.inputEl.max);
        valid = valid && (!this.inputEl.min || valDate >= minDate);
        valid = valid && (!this.inputEl.max || valDate >= maxDate);
      }
      this.calculateVisibility(valid);
    }
  },

  _validateMailInput() {
    if (this.inputEl.type === 'email') {
      let inputValue = this.inputEl.value;
      let rgx = /^[^@\s]{1,}@[^@\[\]\s]{1,}\.[^@\[\]\s]{2,}$/;
      let valid = rgx.test(inputValue) || (!inputValue);
      this.calculateVisibility(valid);
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

  calculateVisibility(logicValid) {
    var requiredValid = this.inputEl.checkValidity();
    var requiredErrorElement = this.rootEl.querySelector('.invalid-feedback');
    var showLogicValidMessage = !logicValid && requiredValid; // Show logic validation message when value is present but fullfills not the constraint
    this._showValidationMessage(requiredErrorElement, !requiredValid);
    this._showValidationMessage(this.invalidErrorElement, showLogicValidMessage);
    this.inputEl.setCustomValidity(showLogicValidMessage ? this.errorMessageInvalid : '');
  },

  // Adjust range input to bootstrap styling
  _initRangeInput() {
    this.inputEl.classList.add('form-range');
    this.inputEl.classList.remove('form-control');
  },

  _initDateInput() {
    let locale = document.documentElement.lang.slice(0, 2) ?? 'de-CH';
    var type = this.inputEl.type;
    if (this.inputEl.placeholder && type !== 'time') {
      var twoDigitNumber = (number) => number.toString.padStart(2, '0');
      let date = new Date(this.inputEl.placeholder);
      let day = twoDigitNumber(date.getDate());
      let month = twoDigitNumber(date.getMonth() + 1); // month is 0 indexed
      let year = date.getFullYear();
      let hours = twoDigitNumber(date.getHours());
      let minutes = twoDigitNumber(date.getMinutes());
      this.inputEl.placeholder = type === 'date' ? `${day}.${month}.${year}` : `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    var minDate = this.inputEl.min;
    var maxDate = this.inputEl.max;

    var dateFormats = {
      'date': 'Y-m-d',
      'datetime-local': 'Y-m-dTH:i',
      'time': 'H:i'
    };
    var altFormats = {
      'date': 'd.m.Y',
      'datetime-local': 'd.m.Y H:i',
      'time': 'H:i'
    };
    this.fp = flatpickr(this.inputEl, {
      locale: locale,
      altInput: true,
      altFormat: altFormats[type],
      dateFormat: dateFormats[type],
      allowInput: true,
      enableTime: type !== 'date',
      noCalendar: type === 'time',
      time_24hr: true,
      minDate: minDate,
      maxDate: maxDate
    });

    // Change reference for form validation
    this.fp.input.classList.add('bsi-form-field-input');
    this.inputEl.classList.remove('bsi-form-field-input');

    // Add the span (with the icon) after the input
    this.inputEl.parentNode.classList.add('input-container'); // Add the container class in order to set the icon position
    var iconSpan = document.createElement('span');
    iconSpan.innerHTML = `<i class="bi ${type === 'time' ? 'bi-clock' : 'bi-calendar'}"></i>`;
    this.inputEl.parentNode.appendChild(iconSpan);
  },
}))