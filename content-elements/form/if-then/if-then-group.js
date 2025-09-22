import Alpine from '@alpinejs/csp';

Alpine.data('ifThenGroup', () => ({
    dependingObj: [],
    conditionInputs: null,
    ifInputType: '',
    init() {
        // map depending groups to objects
        let dependingGroups = Array.from(this.$root.querySelectorAll('.then-group'));
        this.dependingObj = dependingGroups.map(dependingGroupNode => {
            return {
                groupNode: dependingGroupNode,
                visibleIf: dependingGroupNode.querySelector('.condition').innerText.split(';').map(val => val.trim()).filter(val => !!val),
                childInputs: Array.from(dependingGroupNode.querySelectorAll('input, select, textarea')),
                childsRequired: dependingGroupNode.classList.contains('required-if-visible')
            }
        })

        // register event listener on "if"-dropzone inputs
        this.conditionInputs = Array.from(this.$root.querySelectorAll('.if-container select, .if-container input'));
        if (this.conditionInputs[0].tagName === 'SELECT') {
            this.ifInputType = 'select';
        } else {
            this.ifInputType = this.conditionInputs[0].type;
        }
        this.conditionInputs.forEach(input => input.setAttribute('x-on:change', 'toggleDependingGroups'));

        // BFSG: set aria-controls
        // if select: write all ids in aria-controls
        // else: write the controlled form fields on the input
        this.conditionInputs.length === 1
            ? this.conditionInputs.at(0).setAttribute('aria-controls', Array.from(this.$root.querySelectorAll('.then-container input, .then-container select')).map(inp => inp.id).join(' '))
            : this.conditionInputs.forEach(radioInput => {
                let controlIds = this.dependingObj.filter(opt => opt.visibleIf.includes(radioInput.value)).flatMap(opt => opt.childInputs.map(inp => inp.id)).join(' ');
                radioInput.setAttribute('aria-controls', controlIds);
            });

        // ***** Handle prefilled condition *****
        // Select -> send input to _showDependingGroupsOf and get the value there
        // Radio -> send input if checked to _showDependingGroupsOf and get the value there
        // Checkbox -> send input to _showDependingGroupsOf and get the checked attribute there
        // ***************************************
        this.conditionInputs.filter(input => this.ifInputType !== "radio" || input.checked).forEach(input => this._showDependingGroupsOf(input));
    },
    toggleDependingGroups() {
        this._showDependingGroupsOf(this.$el);
    },
    _showDependingGroupsOf(checkedEl) {
        // BFSG: set aria-expanded
        this.conditionInputs.forEach(condition => condition.setAttribute('aria-expanded', condition === checkedEl));
        let value = this.ifInputType === "checkbox" ? String(checkedEl.checked) : checkedEl.value
        // show active depending 
        this.dependingObj.forEach(dependingObj => {
            let isVisible = dependingObj.visibleIf.includes(value);
            isVisible ? dependingObj.groupNode.removeAttribute('aria-hidden') : dependingObj.groupNode.setAttribute('aria-hidden', true);
            dependingObj.childInputs.forEach(input => (isVisible && dependingObj.childsRequired)
                ? input.setAttribute('required', 'required')
                : input.removeAttribute('required'))
        });
    }
}));
