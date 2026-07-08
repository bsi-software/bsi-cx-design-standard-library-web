const uploadFileLocalizedTexts = {
    removeFile: { default: 'Datei entfernen', en: 'Remove file', it: 'Rimuovi file', fr: 'Supprimer le fichier' },
    uploadDropText: { default: 'oder hier ablegen', en: 'or drop here', it: 'o rilascia qui', fr: 'ou déposer ici' },
    uploadButtonLabel: { default: 'Datei auswählen', en: 'Select file', it: 'Seleziona file', fr: 'Sélectionner le fichier' },
}

const lang = () => {
    if (typeof document === 'undefined') {
        return '';
    }

    const metaElement = document.querySelector(`meta[name=x-language]`);
    if (!metaElement) {
        return '';
    }

    return metaElement.getAttribute('value') || metaElement.getAttribute('content') || '';
};

const getLanguageFallback = () => {
    if (typeof document === 'undefined') {
        return '';
    }

    return document.documentElement?.getAttribute('lang') || '';
};

module.exports.getLanguage = () => {
    return lang() || getLanguageFallback();
}

module.exports.getUploadFileLocalizedTexts = (localizedKey) => uploadFileLocalizedTexts[localizedKey] ? uploadFileLocalizedTexts[localizedKey][lang() || getLanguageFallback()] ?? uploadFileLocalizedTexts[localizedKey].default : localizedKey;