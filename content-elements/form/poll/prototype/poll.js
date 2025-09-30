import Alpine from '@alpinejs/csp';

// TODO: mehrsprachig
const starLabels = [
  'kein Stern',
  'ein Stern',
  'zwei Sterne',
  'drei Sterne',
  'vier Sterne',
  'fünf Sterne',
  'sechs Sterne',
  'sieben Sterne',
  'acht Sterne',
  'neun Sterne',
  'zehn Sterne',
]

Alpine.data('formPoll', () => ({
  root: null,
  labelElement: null,
  requiredErrorElement: null,
  isStar: false,
  init() {
    let isStar = this.$root.classList.contains('bsi-poll-star');
    let numberInput = this.$root.querySelector('input[readonly]');
    let name = numberInput.getAttribute('name');
    numberInput.removeAttribute('name');
    let required = numberInput.hasAttribute('required');

    this.$root.querySelectorAll('.bsi-poll-radio-item').forEach(radioItem => {
      let input = radioItem.querySelector('input');
      let value = input.value;
      let checked = value == numberInput.getAttribute('value');
      let id = `${name}-${value}`;
      input.setAttribute('name', name);
      input.setAttribute('id', id);
      radioItem.querySelector('label').setAttribute('for', id);
      if(required) input.setAttribute('required', 'required');
      if(checked) input.setAttribute('checked', 'checked');
      if(isStar) {
        input.setAttribute('aria-label', starLabels[Number(value)])
        input.setAttribute('x-on:change', 'updateStar')
      }
    });
  },

  updateStar() {
    let radioItems = Array.from(this.$root.querySelectorAll('input[type=radio]'));
    let selectedIndex = radioItems.findIndex(radio => radio.checked);
    radioItems.forEach((radio, i) => {
      let parentClassList = radio.parentElement.classList;
      let isActive = i <= selectedIndex;
      if (isActive) {
        parentClassList.add('bsi-poll-radio-checked');
      } else {
        parentClassList.remove('bsi-poll-radio-checked');
      }
    });
  },
}));
