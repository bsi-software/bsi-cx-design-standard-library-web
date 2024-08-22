import Alpine from 'alpinejs';
import signatureField from '..';

Alpine.data('signatureField', () => ({
    jqSigPad: null,

    init() {
        const sessionId = this.$refs.sessionId.textContent;
        const baseUrl = this.$refs.baseUrl.textContent;
        const signaturePad = this.$refs.signaturePad;
        this.jqSigPad = $(signaturePad);
        
        INSIGNAPP.embedded.initEmbeddedData(sessionId, baseUrl, (signatures, documents) => {

            if(signatures && signatures.data && signatures.data.length > 0) {
                const signaturedata = signatures.data[0];
                
                INSIGNAPP.embedded.initSignaturePad(signaturedata.docid, signaturedata.id, this.jqSigPad, 0);

                // TODO: sobald SMS/Mail Version 
                //INSIGNAPP.embedded.initSignatureObject(signaturedata.docid, signaturedata.id, $('#' + menuid), 0);
            } else {
                // alert("no valid signatures returned");
            }
        });
    },

    clearSignature() {
        INSIGNAPP.embedded.clearSignature(this.jqSigPad);
    },

    submitSignature() {
        if (!INSIGNAPP.embedded.isSignatureReady(this.jqSigPad)) {
            // TODO: use validation field within if condition
        } else {
            INSIGNAPP.embedded.sendSignature(this.jqSigPad, this.signingSuccessful, this.signingFailed);
        }
    },

    signingSuccessful(id, imgB64, field) {
        field.replaceWith('<img src="' + imgB64 + '" height="150px;" width="500px;"/>');
    },

    signingFailed(id, imgB64, field) {
        // alert("signing failed...");
        // field.style.border = "1px solid #dc3545";
    },
}))