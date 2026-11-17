import Alpine from '@alpinejs/csp';

Alpine.data('dynamicSelect', () => ({
    rootElement: null,
    selectElement: null,

    async initDynamicSelectfield() {
        this.rootElement = this.$root;
        this.selectElement = this.$el;
        const input = this.rootElement.querySelector('input');

        // Init Options
        const placeholder = this.rootElement.querySelector('.placeholder').textContent;
        if(placeholder){
            this.selectElement.add(new Option(placeholder, ''));
        }
        await this.fetchOptionsFromUrl();

        // set values from input
        this.selectElement.value = input.value;
        this.selectElement.id = input.id;
        this.selectElement.name = input.name;
        if (input.hasAttribute('required')) {
            this.selectElement.setAttribute('required', true);
        }
        input.remove();
    },

    async fetchOptionsFromUrl() {
        const bsiRestResource = this.rootElement.querySelector('.bsi-form-dynamic-select-element').dataset.bsiRestResource;
        try {
            const response = await fetch(bsiRestResource);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const entity = await response.json();
            entity.options
                .forEach(option => this.selectElement.add(new Option(option.text, option.id)));
        } catch (error) {
            console.error(`Dynamic select: could not load options from "${bsiRestResource}".`, error);
        }
    },

    onInputChanged() {
        this.$el.removeAttribute("aria-describedby");
        this.$el.setAttribute("aria-invalid", !this.selectElement.checkValidity());
    }

}));
