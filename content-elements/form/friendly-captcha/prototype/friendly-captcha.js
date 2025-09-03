import Alpine from '@alpinejs/csp';
import { FriendlyCaptchaSDK } from "@friendlycaptcha/sdk";

// Re-use this SDK if you are creating multiple widgets.
const sdk = new FriendlyCaptchaSDK();

Alpine.data('friendlyCaptcha', () => ({ 

    init() {
        let mySiteKey = this.$root.querySelector(".siteKey").innerHTML;
        this.$root.querySelector(".siteKeyWrapper").remove();
        this.$root.querySelector(".response-friendly-captcha").remove();

        // HTML element that you want to mount the widget to.
        const mount = document.querySelector(".frc-captcha");

        // Create the widget
        const widget = sdk.createWidget({
            element: mount,
            sitekey: mySiteKey
        });
    }

}))
