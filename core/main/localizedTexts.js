const uploadFileLocalizedTexts = {
    removeFile: { default: 'Datei entfernen', en: 'Remove file', it: 'Rimuovi file', fr: 'Supprimer le fichier' },
    uploadDropText: { default: 'oder hier ablegen', en: 'or drop here', it: 'o rilascia qui', fr: 'ou déposer ici' },
    uploadButtonLabel: { default: 'Datei auswählen', en: 'Select file', it: 'Seleziona file', fr: 'Sélectionner le fichier' },

    badInput: { default: 'Bitte gib einen gültigen Wert ein.', en: 'Please enter a valid value.', it: 'Inserisci un valore valido.', fr: 'Veuillez entrer une valeur valide.' },
    rangeError: { default: 'Wert liegt außerhalb des erlaubten Bereichs.', en: 'Value is out of the allowed range.', it: 'Il valore è fuori dall\'intervallo consentito.', fr: 'La valeur est hors de la plage autorisée.' },
    stepError: { default: 'Wert liegt nicht auf der erlaubten Schrittweite.', en: 'Value is not on the allowed step.', it: 'Il valore non è sul passo consentito.', fr: 'La valeur n\'est pas sur l\'étape autorisée.' },
}

const lang = document.documentElement?.getAttribute('lang')?.toLowerCase().slice(0, 2) || '';

module.exports.getLanguage = () => {
    return lang;
}

module.exports.getUploadFileLocalizedTexts = (localizedKey) => uploadFileLocalizedTexts[localizedKey] ? uploadFileLocalizedTexts[localizedKey][lang] ?? uploadFileLocalizedTexts[localizedKey].default : localizedKey;