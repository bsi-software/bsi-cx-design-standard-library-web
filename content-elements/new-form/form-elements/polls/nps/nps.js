import Alpine from "@alpinejs/csp";

Alpine.data("npsPoll", () => ({
    initNps() {

        let definitionInput = this.$root.querySelector("input.number-input");
        if (definitionInput === null) {
            return;
        }

        let min = parseInt(definitionInput.getAttribute("min") || 1);
        let max = parseInt(definitionInput.getAttribute("max") || 10);
        let step = parseInt(definitionInput.getAttribute("step") || 1);
        let name = definitionInput.getAttribute("name");
        var id = definitionInput.getAttribute("id");
        var required = definitionInput.hasAttribute('required');
        definitionInput.remove();

        for (let value = min; value <= max; value += step) {
            var checked = value == definitionInput.getAttribute('value');
            this._initRadioElement(value, `${id}-${value}`, name, required, checked);
        }

    },

    _initRadioElement(value, id, name, required, checked) {
        let div = document.createElement("div");
        div.setAttribute("class", "nps-item");
        var radioHTML = `
            <input 
                type="radio" 
                class="nps-input" 
                value="${value}" 
                id="${id}" 
                name="${name}"
                @change="updateStatus" 
                ${required ? "required" : ""} 
                ${checked ? "checked" : ""}
            >
        `;
        var spanHTML = `
            <span 
                for="${id}"
                class="nps-label"
            >
                ${value}
            </span>
        `;

        div.innerHTML = radioHTML + spanHTML;
        this.$el.appendChild(div);
    },


}));