import Alpine from "@alpinejs/csp";

Alpine.data("npsPoll", () => ({
    initNps() {
        let getDefinition = (attr) => this.$root.querySelector("input.number-input[readonly]").getAttribute(attr);
        this.templateHtml = this.$root.querySelector('template').innerHTML;

        var definitionInput = this.$root.querySelector("input.number-input[readonly]");
        let min = parseInt(getDefinition("min") || 1);
        let max = parseInt(getDefinition("max") || 10);
        let name = getDefinition("name");
        let id = getDefinition("id");
        let required = !!getDefinition('required');
        let defaultValue = getDefinition('value');
        definitionInput.remove();

        let len = Math.max(max - min, 0) + 1;
        return Array.from({ length: len }, (_, i) => min + i)
            .map((value, index) => this._radioElementTemplate({ value: value, id: `${id}-${index}`, name: name, required: required, selected: value == defaultValue }))
            .join(' ');
    },

    _radioElementTemplate(mapping) {
        return this.templateHtml.replaceAll(/\#\#([^\s\|]*)\|?(\S*)\#\#/gm, (match, key, command) => {
            let value = mapping[key];
            if (command === 'bool') {
                return value ? `${key}="${value}"` : "";
            }
            return value;
        })
    },
    _radioElementHtml: (value, id, name, required, checked) => `<div class="nps-item">
            <input 
                type="radio" 
                class="native-nps-input native-input" 
                value="${value}" 
                id="${id}" 
                name="${name}" 
                ${required ? "required" : ""} 
                ${checked ? "checked" : ""}>
            <label for="${id}" class="visual-nps-input visual-input">
                ${value}
            </label>
        </div>`.replace(/(\s*\n\s+)/gm, ' '),

}));