import Alpine from '@alpinejs/csp';
import { FriendlyCaptchaSDK } from "@friendlycaptcha/sdk";

// Re-use this SDK if you are creating multiple widgets.
const sdk = new FriendlyCaptchaSDK();

Alpine.data('friendlyCaptcha', () => ({ 

    init() {
        // SiteKey for Friendly Captcha, entered by the user in the editor.
        let mySiteKey = this.$refs.siteKey.innerHTML;
        // Check if the captcha is marked as required
        let isRequired = this.$root.querySelector("#frc-captcha-response").hasAttribute("required");

        // Remove elements that are only needed for the editor/configuration view.
        // The .siteKeyWrapper element is used in the builder/editor so the user can enter the SiteKey.
        // After widget initialization, this element is removed because it should not be visible in the final form.
        this.$refs.siteKeyWrapper.remove();

        // The .response-friendly-captcha field is a static replica of the field that the FriendlyCaptcha widget creates at runtime.
        // Our form system only recognizes fields for validation if they exist at render time.
        // This field is created statically so the validation knows about it when submitting the form.
        // The actual widget field is created dynamically and is not known to the form system.
        // After initialization, this helper field is removed to avoid duplicate fields in the form.
        this.$refs.responseFriendlyCaptcha.remove();

        // The captcha logo is removed after initialization, as it is only used for preview in the editor.
        this.$refs.frcImage.remove();

        // The hidden checkbox is required for validation in the CX form system:
        // It is necessary so the form is recognized as valid if the captcha is required.
        // The checkbox is only checked if the captcha is successfully solved.
        // It is invisible to the user (d-none), but relevant for form validation.
        const validationCheckbox = this.$root.querySelector(".helper-checkbox");
        validationCheckbox.checked = !isRequired;

        // The element where the captcha widget will be mounted.
        const mount = document.querySelector(".frc-captcha");

        // Create the widget
        const widget = sdk.createWidget({
            element: mount,
            sitekey: mySiteKey,
            startMode : "auto" // The widget will use the settings from the dashboard.
        });

        // When the captcha is successfully solved, the checkbox is checked
        // so the form can be submitted (if required).
        widget.addEventListener("frc:widget.complete", function(event) {
            console.log("Captcha solved with solution: " + event.detail.solution);
            validationCheckbox.checked = true;
        });

        // On error or captcha expiration, the checkbox is unchecked
        // so the form cannot be submitted.
        widget.addEventListener("frc:widget.error", function(event) {
            console.log("Captcha error: " + event.detail.error);
            validationCheckbox.checked = false;
        });

        widget.addEventListener("frc:widget.expire", function(event) {
            console.log("Captcha expired - solution no longer valid: " + event.detail.solution);
            validationCheckbox.checked = false;
        });
    }

}))
