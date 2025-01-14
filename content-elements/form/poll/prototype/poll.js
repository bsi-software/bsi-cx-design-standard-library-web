import Alpine from '@alpinejs/csp';

Alpine.data('formPoll', () => ({
  root: null,
  labelElement: null,
  requiredErrorElement: null,

  initRadioGroup() {
    this.root = this.$root;
    let thisForm = this;
    let range = this.root.querySelector('input');
    if (range === null) {
      return;
    }

    let min = parseInt(range.getAttribute('min') || 1);
    let max = parseInt(range.getAttribute('max') || 10);
    let step = parseInt(range.getAttribute('step') || 1);

    range.setAttribute('class', 'bsi-poll-number-input');

    let container = this.root.querySelector('.bsi-poll-radio-group');
    let name = "bsi-poll-radios-" +  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (this.root.classList.contains('bsi-poll-nps')) {
      for (let value = min; value <= max; value += step) {
        this._initRadioElement(range, value, container, thisForm, name);
      }
    } else if (this.root.classList.contains('bsi-poll-star')) {
      for (let value = max; value >= min; value -= step) {
        this._initRadioElement(range, value, container, thisForm, name);
      }
    }

    range.form.addEventListener('reset', function () {
      window.setTimeout(function () {
        thisForm._updateStatus(range);
      });
    });

    this._updateStatus(range);
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  initLabel() {
    this.labelElement = this.$el;
    let radioItems = this.root.querySelectorAll('input[type="radio"]');
    if (radioItems && this.root.classList.contains('bsi-poll-nps')) {
      // NPS elements have a max width of 42px and gaps of 0.1em
      this.labelElement.style.maxWidth = (radioItems.length * 42) + ((radioItems.length - 1) * 1.6) + 'px';
    } else if (radioItems && this.root.classList.contains('bsi-poll-star')) {
      // Star elements have a width of 40px and no gaps
      this.labelElement.style.maxWidth = (radioItems.length * 40) + 'px';
    }
  },

  _initRadioElement(range, value, container, thisForm, name) {
    let div = document.createElement('div');
    let radio = document.createElement('input');
    let label = document.createElement('label');
    let id = range.getAttribute('id') + '-' + value;

    div.setAttribute('class', 'form-check form-check-inline radio-group bsi-poll-radio-item');

    radio.setAttribute('class', 'form-check-input bsi-poll-radio-input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('value', value);
    radio.setAttribute('id', id);
    radio.setAttribute('name', name);
    if (range.hasAttribute('required')) {
      radio.required = true;
    }

    label.setAttribute('class', 'form-check-label bsi-poll-radio-label bsi-dm-bg-color');
    label.setAttribute('for', id);
    label.setAttribute('data-value', value);
    label.innerHTML = value;

    radio.addEventListener('change', function() {
      range.value = label.getAttribute('data-value');
      thisForm._updateStatus(range);
    });

    div.appendChild(radio);
    div.appendChild(label);
    container.appendChild(div);
  },


  _updateStatus(range) {
    let radioItems = this.root.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radioItems.length; i++) {
      let radio = radioItems[i];
      radio.checked = range.value === radio.value;
      if (radio.checked === true) {
        radio.parentElement.classList.add('bsi-poll-radio-checked');
      } else {
        radio.parentElement.classList.remove('bsi-poll-radio-checked');
      }
    }
  },

}))