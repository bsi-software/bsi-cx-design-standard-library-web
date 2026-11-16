import Alpine from '@alpinejs/csp';

Alpine.data('tableElement', () => ({

  // Set header text to td:before for reverse table on mobile screens
  init() {
    if (this.$root.classList.contains('bsi-table-mobile')) {
      let header = this.$root.querySelectorAll('th');
      let data = this.$root.querySelectorAll('td');

      data.forEach((td, cellIndex) => td.setAttribute('data-}header', header[cellIndex % header.length].textContent))
    }
  }
}))