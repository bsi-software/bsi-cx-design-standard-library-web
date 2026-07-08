import Alpine from '@alpinejs/csp';

Alpine.data('dynamicSelect', () => ({
    rootElement: null,
    selectElement: null,

    async initDynamicSelectfield() {
        this.rootElement = this.$root;
        const options = await this.fetchBsiRestResource();
        const placeholder = this.rootElement.querySelector('select').innerHTML;
        this.selectElement = this.$el;
        const selectedOption = this.selectElement.options[this.selectElement.selectedIndex].value;

        if (this.rootElement.classList.contains("bsi-placeholder-defined")) {
            this.rootElement.querySelector('select').innerHTML = placeholder + options;
            if(selectedOption === this.selectElement.options[0].value) {
                this.selectElement.options[0].setAttribute("selected", "");
            }
            this.selectElement.options[0].setAttribute("value", "");
        }
        else {
            this.rootElement.querySelector('select').innerHTML = options;
        }
    },

    async fetchBsiRestResource() {
        let bsiRestResource = this.rootElement.querySelector('.bsi-form-input-element').dataset.bsiRestResource;

        const response = await fetch(bsiRestResource);
        const entity = await response.json();

         return entity.options
                .map(option => `<option value="${option.id}">${option.text}</option>`)
                .join("");

    },

    onInputChanged() {
        let input = this.rootElement.querySelector('input');
        const selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
        input.value = selectedOption.value;

        this.$el.removeAttribute("aria-describedby");
        this.$el.setAttribute("aria-invalid", !this.selectElement.checkValidity());
    }

}));
