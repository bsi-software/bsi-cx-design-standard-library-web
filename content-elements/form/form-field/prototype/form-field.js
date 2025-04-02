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

  // TODO: add required logic to validate, so the required message gets calculated on-change
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
      let inputValue = parseInt(this.inputEl.value);
      let minValue = parseInt(this.inputEl.min ? this.inputEl.min : Number.MIN_SAFE_INTEGER);
      let maxValue = parseInt(this.inputEl.max ? this.inputEl.max : Number.MAX_SAFE_INTEGER);
      let valid = minValue <= inputValue && inputValue <= maxValue && inputValue != '';
      this.calculateVisibility(valid);
      this.inputEl.setCustomValidity(valid ? '' : this.errorMessageInvalid);
    }
  },

  _validateTextInput() {
    if (this.inputEl.type === 'text' || this.inputEl.type === 'password') {
      let inputValue = this.inputEl.value;
      let maxCharacters = parseInt(this.inputEl.getAttribute("maxLength") ? this.inputEl.getAttribute("maxLength") : 256);
      let valid = inputValue.length <= maxCharacters;
      this.calculateVisibility(valid);
      this.inputEl.setCustomValidity(valid ? '' : this.errorMessageInvalid);
    }
  },

  _validateDateTimeInput() {
    if (this.inputEl.classList.contains('flatpickr-input')) {
      let valid = true;
      switch (this.inputEl.value.length) {
        case 5: // only time
          let placeholderVal = new Date('2000-01-01T' + this.inputEl.value);
          let placeholderMin = new Date('2000-01-01T' + this.inputEl.min);
          let placeholderMax = new Date('2000-01-01T' + this.inputEl.max);
          let requiredErrorElement = this.rootEl.querySelector('.invalid-feedback');
          if ((this.inputEl.min != "" && this.inputEl.max != "")) {
            valid = new Date(placeholderVal).getTime() >= new Date(placeholderMin).getTime() && new Date(placeholderVal).getTime() <= new Date(placeholderMax).getTime();
          }
          else if (this.inputEl.min != "") {
            valid = new Date(placeholderVal).getTime() >= new Date(placeholderMin).getTime();
          }
          else if (this.inputEl.max != "") {
            valid = new Date(placeholderVal).getTime() <= new Date(placeholderMax).getTime();
          }
          break;
        case 10: // only date
        case 16: // date + time
          if ((this.inputEl.min != "" && this.inputEl.max != "")) {
            valid = new Date(this.inputEl.value).getTime() >= new Date(this.inputEl.min).getTime() && new Date(this.inputEl.value).getTime() <= new Date(this.inputEl.max).getTime();
          }
          else if (this.inputEl.min != "") {
            valid = new Date(this.inputEl.value).getTime() >= new Date(this.inputEl.min).getTime();
          }
          else if (this.inputEl.max != "") {
            valid = new Date(this.inputEl.value).getTime() <= new Date(this.inputEl.min).getTime();
          }
          break;
        default:
          this.invalidErrorElement.setAttribute('hidden', 'true');
          this.invalidErrorElement.setAttribute('aria-hidden', 'true');
          requiredErrorElement.style.display='block';
          requiredErrorElement.removeAttribute('hidden');
          requiredErrorElement.removeAttribute('aria-hidden');
          break;
      } 
      this.calculateVisibility(valid);
      this.inputEl.setCustomValidity(valid ? '' : this.errorMessageInvalid);
    }
  },

  _validateMailInput() {
    if (this.inputEl.type === 'email') {
      let inputValue = this.inputEl.value;
      let rgx = /^[^@\s]{1,}@[^@\[\]\s]{1,}\.[^@\[\]\s]{2,}$/;
      let valid = rgx.test(inputValue) || (!inputValue);
      this.calculateVisibility(valid);
      this.inputEl.setCustomValidity(valid ? '' : this.errorMessageInvalid);
    }
  },

  calculateVisibility(valid) {
    let requiredErrorElement = this.rootEl.querySelector('.invalid-feedback');
    if (valid) {
      this.invalidErrorElement.setAttribute('hidden', 'true');
      this.invalidErrorElement.setAttribute('aria-hidden', 'true');
    } else {
      this.invalidErrorElement.removeAttribute('hidden');
      this.invalidErrorElement.removeAttribute('aria-hidden');
    }
    if (this.inputEl.hasAttribute('required') && (this.inputEl.value == '' || this.inputEl.value == null)) {
      requiredErrorElement.style.display='block';
      requiredErrorElement.removeAttribute('hidden');
      requiredErrorElement.removeAttribute('aria-hidden');
      this.invalidErrorElement.setAttribute('hidden', 'true');
      this.invalidErrorElement.setAttribute('aria-hidden', 'true');
    }
    else {
      requiredErrorElement.style.display='none';
      requiredErrorElement.setAttribute('hidden', 'true');
      requiredErrorElement.setAttribute('aria-hidden', 'true');
    }
  },

  // Adjust range input to bootstrap styling
  _initRangeInput() {
    this.inputEl.classList.add('form-range');
    this.inputEl.classList.remove('form-control');
  },

  _initDateInput() {
    const iconSpan = document.createElement('span');

    // Create bootstrap icon
    const icon = document.createElement('i');
   
    let locale = document.documentElement.lang.slice(0, 2) ?? 'de-CH';
    if (this.inputEl.placeholder && (this.inputEl.type === 'date' || this.inputEl.type === 'datetime-local')) {
      let date = new Date(this.inputEl.placeholder);
      let day = date.getDate();
      let month = date.getMonth() + 1; // month is 0 indexed
      let year = date.getFullYear();
      if (day.toString().length === 1) {
        day = '0' + day.toString();
      }
      if (month.toString().length === 1) {
        month = '0' + month.toString();
      }
      if (this.inputEl.type === 'date') {
        this.inputEl.placeholder = day + "." + month + "." + year; // format: 'd.m.Y'
      } else if (this.inputEl.type === 'datetime-local') {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours.toString().length === 1) {
          hours = '0' + hours.toString();
        }
        if (minutes.toString().length === 1) {
          minutes = '0' + minutes.toString();
        }
        this.inputEl.placeholder = day + "." + month + "." + year + " " + hours + ":" + minutes; // format: 'd.m.Y H:i'
      }
    }
    if (this.inputEl.min) {
      this.minDate = this.inputEl.min;
    }
    if (this.inputEl.max) {
      this.maxDate = this.inputEl.max;
    }
    if (this.inputEl.type === 'date') {
      icon.classList.add('bi', 'bi-calendar');
      // Add the icon to the span element
      iconSpan.appendChild(icon);
  
      this.fp = flatpickr(this.inputEl, {
        locale: locale,
        altInput: true,
        altFormat: 'd.m.Y',
        dateFormat: 'Y-m-d',
        allowInput: true,
        minDate: this.minDate,
        maxDate: this.maxDate
      });
      
    } else if (this.inputEl.type === 'datetime-local') {
      icon.classList.add('bi', 'bi-calendar');
      // Add the icon to the span element
      iconSpan.appendChild(icon);
      this.fp = flatpickr(this.inputEl, {
        locale: locale,
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
      icon.classList.add('bi', 'bi-clock');
      // Add the icon to the span element
      iconSpan.appendChild(icon);
      this.fp = flatpickr(this.inputEl, {
        locale: locale,
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

    // Add the span (with the icon) after the input
    this.inputEl.parentNode.classList.add('input-container'); // Add the container class in order to set the icon position
    this.inputEl.parentNode.appendChild(iconSpan);
          
  },
}))