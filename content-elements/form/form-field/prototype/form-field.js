import Alpine from 'alpinejs';
import flatpickr from "flatpickr";

Alpine.data('formField', () => ({
  rootEl: null,
  inputEl: null,
  fp: null,
  minDate: null,
  maxDate: null,
  requiredErrorElement: null,
  invalidErrorElement: null,
  errormessageInvalid: '',

  initFormFieldInput() {
    this.rootEl = this.$root;
    this.inputEl = this.$el;
    if (this.inputEl.type === 'range') {
      this._initRangeInput();
    } else if (['date', 'datetime-local', 'time'].includes(this.inputEl.type)) {
      this._initDateInput();
    }
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  initInvalidError() {
    this.invalidErrorElement = this.$el;
    this.errormessageInvalid = this.invalidErrorElement.getElementsByClassName('errormessage-invalid')[0].innerText;
  },

  validateInput() {
    if (this.inputEl.closest('.bsi-form-label-floating') && this.inputEl.classList.contains('flatpickr-input') && this.inputEl.value) {
      let label = this.rootEl.querySelector('.form-label');
      label.style.opacity = 0.65;
      label.style.transform = 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)';
    }

    if (!this.inputEl.value && this.inputEl.hasAttribute('required')) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
    this._validateMailInput();
  },

  _validateMailInput() {
    if (this.inputEl.type === 'email') {
      let inputValue = this.inputEl.value;
      let rgx = /^[^@\s]{1,}@[^@\[\]\s]{1,}\.[^@\[\]\s]{2,}$/;
      let valid = rgx.test(inputValue) || (!inputValue);

      if (valid) {
        this.invalidErrorElement.setAttribute('hidden', 'true');
        this.invalidErrorElement.setAttribute('aria-hidden', 'true');
      } else {
        this.invalidErrorElement.removeAttribute('hidden', 'true');
        this.invalidErrorElement.removeAttribute('aria-hidden', 'true');
      }
      this.inputEl.setCustomValidity(valid ? '' : this.errormessageInvalid);
    }
  },

  // Adjust range input to bootstrap styling
  _initRangeInput() {
    this.inputEl.classList.add('form-range');
    this.inputEl.classList.remove('form-control');
  },

  _initDateInput() {
    if (this.inputEl.min) {
      this.minDate = this.inputEl.min;
    }
    if (this.inputEl.max) {
      this.maxDate = this.inputEl.max;
    }
    if (this.inputEl.type === 'date') {
      this.fp = flatpickr(this.inputEl, {
        altInput: true,
        altFormat: 'd.m.Y',
        dateFormat: 'Y-m-d',
        allowInput: true,
        minDate: this.minDate,
        maxDate: this.maxDate
      });
    } else if (this.inputEl.type === 'datetime-local') {
      this.fp = flatpickr(this.inputEl, {
        altInput: true,
        altFormat: 'd.m.Y H:i',
        dateFormat: 'Y-m-dTH:i',
        allowInput: true,
        enableTime: true,
        time_24hr: true,
        minDate: this.minDate,
        maxDate: this.maxDate
      });
    } else if (this.inputEl.type === 'time') {
      this.fp = flatpickr(this.inputEl, {
        altInput: true,
        altFormat: 'H:i',
        dateFormat: 'H:i',
        allowInput: true,
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
        minDate: this.minDate,
        maxDate: this.maxDate
      });
    }
  },
}))