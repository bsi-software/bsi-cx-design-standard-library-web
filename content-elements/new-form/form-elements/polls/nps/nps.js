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

        // calculate the maxWidth for the labels above the nps poll - its not possible to style it in css
        this.$root.querySelector(".nps-scale-labels").style.maxWidth = this.$el.scrollWidth + 'px';

    },

    _initRadioElement(value, id, name, required, checked) {
        let div = document.createElement("div");
        div.setAttribute("class", "nps-item");
        var radioHTML = `
            <input 
                type="radio" 
                class="native-nps-input native-input" 
                value="${value}" 
                id="${id}" 
                name="${name}"
                @change="updateStatus" 
                ${required ? "required" : ""} 
                ${checked ? "checked" : ""}
            >
        `;
        var spanHTML = `
            <label 
                for="${id}"
                class="visual-nps-input visual-input"
            >
                ${value}
            </label>
        `;

        div.innerHTML = radioHTML + spanHTML;
        this.$el.appendChild(div);
    },

    updateStatus() {
        let radioItems = Array.from(this.$root.querySelectorAll("input[type=radio]"));
        let selectedIndex = radioItems.findIndex(radio => radio.checked);
        radioItems.forEach((radio, i) => {
            let parentClassList = radio.parentElement.classList;
            let isActive = i === selectedIndex;
            if (isActive) {
                parentClassList.add("nps-poll-radio-checked");
            } else {
                parentClassList.remove("nps-poll-radio-checked");
            }
        });
    },


}));