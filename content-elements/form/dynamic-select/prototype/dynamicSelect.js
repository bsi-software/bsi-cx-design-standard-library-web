import Alpine from '@alpinejs/csp';

Alpine.data('dynamicSelect', () => ({
    rootElement: null,
    selectElement: null,

    async initDynamicSelectfield() {
        this.rootElement = this.$root;
        this.selectElement = this.$el;
        const input = this.rootElement.querySelector('input');

        this.rootElement.id = input.id;
        this.selectElement.name = input.name;
        input.remove();

        const placeholder = this.rootElement.querySelector('option');
        const options = await this.fetchBsiRestResource();

        if (placeholder.textContent) {
            this.selectElement.innerHTML =  placeholder.outerHTML + options;
        }
        else {
            this.selectElement.innerHTML = options;
        }
    },

    async fetchBsiRestResource() {
        let bsiRestResource = this.rootElement.querySelector('.bsi-form-dynamic-select-element').dataset.bsiRestResource;

        const response = await fetch(bsiRestResource);
        const entity = await response.json();

         return entity.options
                .map(option => `<option value="${option.id}">${option.text}</option>`)
                .join("");

    },

    onInputChanged() {
        this.$el.removeAttribute("aria-describedby");
        this.$el.setAttribute("aria-invalid", !this.selectElement.checkValidity());
    }

}));
