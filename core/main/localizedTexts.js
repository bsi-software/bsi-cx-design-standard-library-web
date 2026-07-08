const uploadFileLocalizedTexts = {
    removeFile: { default: 'Datei entfernen', en: 'Remove file', it: 'Rimuovi file', fr: 'Supprimer le fichier' },
    uploadDropText: { default: 'oder hier ablegen', en: 'or drop here', it: 'o rilascia qui', fr: 'ou déposer ici' },
    uploadButtonLabel: { default: 'Datei auswählen', en: 'Select file', it: 'Seleziona file', fr: 'Sélectionner le fichier' },
}

const lang = document.documentElement?.getAttribute('lang')?.toLowerCase().slice(0, 2) || '';

module.exports.getLanguage = () => {
    return lang;
}

module.exports.getUploadFileLocalizedTexts = (localizedKey) => uploadFileLocalizedTexts[localizedKey] ? uploadFileLocalizedTexts[localizedKey][lang] ?? uploadFileLocalizedTexts[localizedKey].default : localizedKey;