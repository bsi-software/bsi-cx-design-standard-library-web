import Alpine from "@alpinejs/csp";

Alpine.data("form", () => ({

    init() {
        
    },
    
    submitForm(event) {
        console.log("SubmitForm wurde aufegrufen");
        const formElementInputs = this.$root.querySelectorAll(".form-element input"); // TODO: ggf erweitern, sodass auch Form Elemente die kein input Feld als Grundlage haben funktionieren
        const formErrorValueMissingText = this.$root.querySelector(".form-value-missing-error-text");
        const formErrorTypeMissmatchText = this.$root.querySelector(".form-type-missmatch-error-text");
        const formOtherError = this.$root.querySelector(".form-other-error-text");
        let formIsValid = true;

        formElementInputs.forEach(formElementInput => {
            const errorMessageElement = formElementInput.closest(".form-element").querySelector(".invalid-feedback");

            const validity = formElementInput.validity;

            console.log("FormularElementId: " + formElementInput.id);

            if (!formElementInput.checkValidity()) {
                console.debug("Das Formularelement ist nicht valide.");
                formIsValid = false;
                if (validity.valueMissing) {
                    console.debug("Das Formularelement ist nicht ausgefüllt. Fehlertext: " + formErrorValueMissingText.textContent);
                    errorMessageElement.textContent = formErrorValueMissingText.textContent;
                }
                else if (validity.typeMismatch) {
                    console.debug("Das Formularelement ist mit dem Falschen Typ ausgefüllt. Fehlertext: " + formErrorTypeMissmatchText.textContent);
                    errorMessageElement.textContent = formErrorTypeMissmatchText.textContent;
                }
                else if (validity.patternMismatch) {
                    console.debug("Das Formularelement hat das falsche pattern. Fehlertext: " + formElementInput.textContent);
                    errorMessageElement.textContent = formElementInput.textContent;
                }
                else {
                    console.debug("Das Formularelement ist nicht korrekt ausgefüllt. Fehlertext: " + formOtherError.textContent);
                    errorMessageElement.textContent = formOtherError.textContent;
                }
            }
        });

        if (!formIsValid) {
            event.preventDefault();
        }

    },

}));
