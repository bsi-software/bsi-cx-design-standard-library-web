import Alpine from '@alpinejs/csp';

const requiredIfVisibleClass = 'required-if-visible';
const visibleClass = 'd-block';

Alpine.data('ifThenGroup', () => ({
    ifModeCheckbox: true,
    checkedElem: null,
    init() {
        this.thenGroups = this.$root.querySelectorAll('.then-group');
        this.ifInputs = Array.from(this.$root.querySelectorAll('.if-container input'));
        this.ifModeCheckbox = ifInputs.some(input => input.type === "checkbox")
        ifInputs.forEach(input => input.addEventListener('input', this.calculateVisibility.bind(this)));
        this.calculateVisibility();
    },
    calculateVisibility() {
        this.checkedElem = this.ifInputs.find(input => input.checked);
        this.thenGroups.forEach(thenGroup => this._thenIsVisible(thenGroup))
    },
    _thenIsVisible(thenGroup) {
        var conditions = thenGroup.querySelector('.condition').innerText
            .split(';').map(condition => condition.trim());
        var groupInputs = thenGroup.querySelectorAll(`input, textarea, select`);
        var visible = !!this.checkedElem;
        if (this.ifModeCheckbox) {
            visible = conditions.includes("Nein") ? !visible : visible;
        } else {
            visible = checkedElem && conditions.includes(this.checkedElem.innerText);
        }
        var required = visible && thenGroup.classList.includes(requiredIfVisibleClass);
        // set visibility and required attributes
        visible ? thenGroup.classList.add(visibleClass) : thenGroup.classList.remove(visibleClass);
        groupInputs.forEach(input => required ? input.setAttribute('required', true) : input.removeAttribute('required'));
    }
}));
