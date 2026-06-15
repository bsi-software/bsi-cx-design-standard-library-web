# StandardLib Auto-Dokumentation

- Generiert am: 2026-06-15T17:40:47.879Z
- Elemente: 60
- Style-Configs: 76

## Advanced

### Ordner: (root)

#### Logo (logo-4c8c3a)

- Quelle: content-elements/advanced/logo-with-darkmode/prototype/index.js
- Template: content-elements/advanced/logo-with-darkmode/template.twig
- Beschreibung: Dark- & Light-Mode

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - imageDarkModePartId
  - imagePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - template
  - textDmPartLabel
  - textLmPartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - imageDarkModePartId
  - imageDarkModeSrc
  - imagePartId
  - imageSrc
- Davon per `set` anpassbar:
  - elementId
  - imageDarkModePartId
  - imageDarkModeSrc
  - imagePartId
  - imageSrc
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: image, ID: logo-lm-part-image-727593, Label: Logo Light mode
- Typ: image, ID: logo-dm-part-image-289935, Label: Logo Dark mode

##### Styles
- Keine

##### Dropzones
- Keine

#### Bild aufnehmen (webcam-image-upload-wHe4UP)

- Quelle: content-elements/advanced/webcam-image-upload/prototype/index.js
- Template: content-elements/advanced/webcam-image-upload/template.twig
- Beschreibung: Bild mit Kamera aufnehmen (Selfie oder Rückkamera) und hochladen

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - fileformFieldPartId
  - formPartId
  - modeAskButtonCameraPartId
  - modeAskButtonManualPartId
  - modeAskDescriptionPartId
  - modeAskTitlePartId
  - modeManualDescriptionPartId
  - modeManualTitlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - fileformFieldPartLabel
  - formPartLabel
  - modeAskButtonCameraPartLabel
  - modeAskButtonManualPartLabel
  - modeAskDescriptionPartLabel
  - modeAskTitlePartLabel
  - modeManualDescriptionPartLabel
  - modeManualTitlePartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - borderRadius
  - buttonColor
  - buttonLayout
  - elementId
  - fileformFieldPartId
  - formPartId
  - modeAskButtonCameraPartId
  - modeAskButtonCameraText
  - modeAskButtonManualPartId
  - modeAskButtonManualText
  - modeAskDescriptionPartId
  - modeAskDescriptionText
  - modeAskTitlePartId
  - modeAskTitleText
  - modeCameSubmitButtonText
  - modeManualDescriptionPartId
  - modeManualDescriptionText
  - modeManualTitlePartId
  - modeManualTitleText
  - modeManualUploadImageButtonText
  - uploadButtonColor
  - uploadButtonLayout
  - webcamImgAlternativeButtonColor
  - webcamImgAlternativeButtonLayout
  - webcamImgBorderRadius
  - webcamImgMainButtonColor
  - webcamImgMainButtonLayout
  - webcamImgModeAskButtonCameraText
  - webcamImgModeAskButtonManualText
  - webcamImgModeAskDescriptionText
  - webcamImgModeAskTitleText
  - webcamImgModeCameSubmitButtonText
  - webcamImgModeManualDescriptionText
  - webcamImgModeManualTitleText
  - webcamImgModeManualUploadImageButtonText
- Davon per `set` anpassbar:
  - borderRadius
  - buttonColor
  - buttonLayout
  - elementId
  - fileformFieldPartId
  - formPartId
  - modeAskButtonCameraPartId
  - modeAskButtonCameraText
  - modeAskButtonManualPartId
  - modeAskButtonManualText
  - modeAskDescriptionPartId
  - modeAskDescriptionText
  - modeAskTitlePartId
  - modeAskTitleText
  - modeCameSubmitButtonText
  - modeManualDescriptionPartId
  - modeManualDescriptionText
  - modeManualTitlePartId
  - modeManualTitleText
  - modeManualUploadImageButtonText
  - uploadButtonColor
  - uploadButtonLayout
- Davon nur referenziert:
  - webcamImgAlternativeButtonColor
  - webcamImgAlternativeButtonLayout
  - webcamImgBorderRadius
  - webcamImgMainButtonColor
  - webcamImgMainButtonLayout
  - webcamImgModeAskButtonCameraText
  - webcamImgModeAskButtonManualText
  - webcamImgModeAskDescriptionText
  - webcamImgModeAskTitleText
  - webcamImgModeCameSubmitButtonText
  - webcamImgModeManualDescriptionText
  - webcamImgModeManualTitleText
  - webcamImgModeManualUploadImageButtonText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: webcam-image-upload-part-plain-text-KVYYMZ, Label: Kamerazugriff - Titel
- Typ: plainText, ID: webcam-image-upload-part-plain-text-YLjguq, Label: Kamerazugriff - Beschreibung
- Typ: plainText, ID: webcam-image-upload-part-plain-text-YLjguq, Label: Kamerazugriff - Button 'Zugriff erlauben'
- Typ: plainText, ID: webcam-image-upload-part-plain-text-Mh7lOL, Label: Kamerazugriff - Button 'Bild Manuell hochladen'
- Typ: plainText, ID: webcam-image-upload-part-plain-text-uFFq2F, Label: Kamerazugriff - Titel
- Typ: plainText, ID: webcam-image-upload-part-plain-text-KKc5DW, Label: Kamerazugriff - Beschreibung
- Typ: form, ID: webcam-image-upload-part-form-X98egp, Label: Formular
- Typ: formField, ID: webcam-image-upload-part-file-form-field-ZxE3ka, Label: Dateiupload

##### Styles
- webcam-image-camera-Ej0lFk | Bevorzugte Kamera
  - Quelle: configs/styles/webcam-image-camera.js
  - Standard im Template erkannt: bsi-webcam-front
  - Optionen:
    - Frontkamera (Selfie): bsi-webcam-front
    - Rückkamera (Umgebung): bsi-webcam-back

##### Dropzones
- Keine

## Base

### Ordner: (root)

#### Akkordion (accordion-OowSb3)

- Quelle: content-elements/base/accordion/prototype/index.js
- Template: content-elements/base/accordion/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - contentDropzoneId
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - accordionIconPosition
  - color
  - contentDropzoneId
  - elementId
  - iconPosition
  - text
  - textContent
  - textElementColor
  - titlePartId
  - titleText
- Davon per `set` anpassbar:
  - color
  - contentDropzoneId
  - elementId
  - iconPosition
  - text
  - textContent
  - titlePartId
  - titleText
- Davon nur referenziert:
  - accordionIconPosition
  - textElementColor

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: accordion-title-74AGOw, Label: Titel

##### Styles
- accordion-active-nnrTAT | Beim Laden
  - Quelle: configs/styles/accordion-active.js
  - Standard im Template erkannt: inactive
  - Optionen:
    - Geschlossen: inactive
    - Offen: active
- accordion-head-background-b72812 | Hintergrundfarbe Kopf
  - Quelle: configs/styles/accordion-bgcolor-header.js
  - Standard im Template erkannt: bg-acc-primary-color
  - Optionen:
    - Primärfarbe: bg-acc-primary-color
    - Sekundärfarbe: bg-acc-secondary-color
    - Dunkel: bg-acc-dark-color
    - Hell: bg-acc-light-color
    - Info Farbe: bg-acc-info-color
- accordion-head-txt-f60902 | Textfarbe Kopf
  - Quelle: configs/styles/accordion-text-color-header.js
  - Standard im Template erkannt: txt-acc-light-color
  - Optionen:
    - Primärfarbe: txt-acc-primary-color
    - Sekundärfarbe: txt-acc-secondary-color
    - Dunkel: txt-acc-dark-color
    - Hell: txt-acc-light-color
    - Info Farbe: txt-acc-info-color

##### Dropzones
- Dropzone ID: accordion-content-dropzone-O93IRR
  - Erlaubte Elemente (Name + elementId):
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - Bild (figure-DWEfdD)
    - HTML (html-VN5KXz)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### Banner (banner-8eHkFN)

- Quelle: content-elements/base/banner/prototype/index.js
- Template: content-elements/base/banner/template.twig
- Beschreibung: Bild überlagert mit Inhalten (Überschriften, Text, Buttons, …), Bildhöhe richtet sich am Inhalt

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - dropzoneId
  - elementId
  - imageMobilePartId
  - imagePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - imageMobilePartLabel
  - imagePartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - bannerHorizontalAlignment
  - bannerVerticalAlignment
  - dropzoneId
  - elementId
  - horizontalAlign
  - imageMobilePartId
  - imageMobileSrc
  - imagePartId
  - imageSrc
  - verticalAlign
- Davon per `set` anpassbar:
  - dropzoneId
  - elementId
  - horizontalAlign
  - imageMobilePartId
  - imageMobileSrc
  - imagePartId
  - imageSrc
  - verticalAlign
- Davon nur referenziert:
  - bannerHorizontalAlignment
  - bannerVerticalAlignment

##### Parameter ↔ Style Zuordnung
- horizontalAlign (Default: bsi-horizontal-align-center) → alignment-horizontal-5vumfd | Horizontale Ausrichtung
  - Default-Option: Mittig (bsi-horizontal-align-center)
  - Alle Style-Optionen: Links: bsi-horizontal-align-left, Mittig: bsi-horizontal-align-center, Rechts: bsi-horizontal-align-right
- verticalAlign (Default: bsi-vertical-align-center) → alignment-vertical-PlvhZi | Vertikale Ausrichtung
  - Default-Option: Mittig (bsi-vertical-align-center)
  - Alle Style-Optionen: Oben: bsi-vertical-align-top, Mittig: bsi-vertical-align-center, Unten: bsi-vertical-align-bottom

##### Element Parts
- Typ: image, ID: banner-part-MIY0yR, Label: Banner
- Typ: image, ID: banner-mobile-part-797cb6, Label: Banner mobile

##### Styles
- col-width-pv2OCc | Breite des Layouts
  - Quelle: configs/styles/col-width.js
  - Standard im Template erkannt: container-fluid
  - Optionen:
    - Feste Breite: container
    - Volle Breite: container-fluid
- alignment-horizontal-5vumfd | Horizontale Ausrichtung
  - Quelle: configs/styles/alignment-horizontal.js
  - Optionen:
    - Links: bsi-horizontal-align-left
    - Mittig: bsi-horizontal-align-center
    - Rechts: bsi-horizontal-align-right
- alignment-vertical-PlvhZi | Vertikale Ausrichtung
  - Quelle: configs/styles/alignment-vertical.js
  - Optionen:
    - Oben: bsi-vertical-align-top
    - Mittig: bsi-vertical-align-center
    - Unten: bsi-vertical-align-bottom
- overlay-color-0qiI5L | Farbiges Overlay
  - Quelle: configs/styles/overlay-color.js
  - Standard im Template erkannt: bsi-overlay-hide
  - Optionen:
    - Overlay ausblenden: bsi-overlay-hide
    - Primärfarbe: bsi-overlay-primary-color
    - Sekundärfarbe: bsi-overlay-secondary-color
    - Dunkel: bsi-overlay-dark
    - Hell: bsi-overlay-light
- overlay-opacity-IbPo7m | Deckkraft des Overlays
  - Quelle: configs/styles/overlay-opacity.js
  - Standard im Template erkannt: bsi-overlay-opacity-0
  - Optionen:
    - 100%: bsi-overlay-opacity-100
    - 90%: bsi-overlay-opacity-90
    - 80%: bsi-overlay-opacity-80
    - 70%: bsi-overlay-opacity-70
    - 60%: bsi-overlay-opacity-60
    - 50%: bsi-overlay-opacity-50
    - 40%: bsi-overlay-opacity-40
    - 30%: bsi-overlay-opacity-30
    - 20%: bsi-overlay-opacity-20
    - 10%: bsi-overlay-opacity-10
    - 0%: bsi-overlay-opacity-0

##### Dropzones
- Dropzone ID: banner-dropzone-Hh2fWF
  - Erlaubte Elemente (Name + elementId):
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### Button (button-v3cFFn)

- Quelle: content-elements/base/button/prototype/index.js
- Template: content-elements/base/button/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - iconPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - iconPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - buttonBorderRadius
  - buttonColor
  - buttonLayout
  - buttonLetterCase
  - buttonSize
  - buttonText
  - buttonWidth
  - elementId
  - elementPartId
  - iconPartId
- Davon per `set` anpassbar:
  - buttonBorderRadius
  - buttonColor
  - buttonLayout
  - buttonLetterCase
  - buttonSize
  - buttonText
  - buttonWidth
  - elementId
  - elementPartId
  - iconPartId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- buttonBorderRadius (Default: bsi-corner-rounded) → border-radius-xTOXFS | Abgerundete Ecken
  - Default-Option: Ja (bsi-corner-rounded)
  - Alle Style-Optionen: Nein: bsi-corner-sharp, Ja: bsi-corner-rounded
- buttonColor (Default: bsi-btn-color-primary) → btn-color-eTXeUU | Button Farbe
  - Default-Option: Primärfarbe (bsi-btn-color-primary)
  - Alle Style-Optionen: Primärfarbe: bsi-btn-color-primary, Sekundärfarbe: bsi-btn-color-secondary, Dunkel: bsi-btn-color-dark, Hell: bsi-btn-color-light
- buttonLayout (Default: bsi-btn-filled) → btn-layout-YSdX2N | Button Layout
  - Default-Option: Farbig, ausgefüllt (bsi-btn-filled)
  - Alle Style-Optionen: Farbig, ausgefüllt: bsi-btn-filled, Farbig, umrandet: bsi-btn-outline, Link ohne Umrandung: bsi-btn-link
- buttonLetterCase (Default: bsi-btn-letter-default) → btn-letter-case-ItTYNe | Text in Grossbuchstaben
  - Default-Option: Nein (bsi-btn-letter-default)
  - Alle Style-Optionen: Nein: bsi-btn-letter-default, Ja: bsi-btn-letter-uppercase
- buttonSize (Default: bsi-btn-size-md) → btn-size-pKDVBL | Button Grösse
  - Default-Option: Medium (bsi-btn-size-md)
  - Alle Style-Optionen: Klein: bsi-btn-size-sm, Medium: bsi-btn-size-md, Gross: bsi-btn-size-lg
- buttonWidth (Default: bsi-btn-width-default) → btn-width-wdOcZR | Button Breite
  - Default-Option: Standard (bsi-btn-width-default)
  - Alle Style-Optionen: Standard: bsi-btn-width-default, Über ganze Breite: bsi-btn-width-wide

##### Element Parts
- Typ: link, ID: button-part-0Cq8Xc, Label: Button
- Typ: plainText, ID: button-part-icon-f1TI9P, Label: Icon Bezeichner (wählen Sie hier ein Icon aus: https://icons.getbootstrap.com/ und geben Sie den Namen ein, z.B. "arrow-right")

##### Styles
- btn-icon-Fd9wjr | Button Icon
  - Quelle: configs/styles/btn-icon.js
  - Standard im Template erkannt: bsi-btn-icon-hide
  - Optionen:
    - Icon ausblenden: bsi-btn-icon-hide
    - Icon links: bsi-btn-icon-left
    - Icon rechts: bsi-btn-icon-right
- btn-color-eTXeUU | Button Farbe
  - Quelle: configs/styles/btn-color.js
  - Optionen:
    - Primärfarbe: bsi-btn-color-primary
    - Sekundärfarbe: bsi-btn-color-secondary
    - Dunkel: bsi-btn-color-dark
    - Hell: bsi-btn-color-light
- btn-layout-YSdX2N | Button Layout
  - Quelle: configs/styles/btn-layout.js
  - Optionen:
    - Farbig, ausgefüllt: bsi-btn-filled
    - Farbig, umrandet: bsi-btn-outline
    - Link ohne Umrandung: bsi-btn-link
- btn-size-pKDVBL | Button Grösse
  - Quelle: configs/styles/btn-size.js
  - Optionen:
    - Klein: bsi-btn-size-sm
    - Medium: bsi-btn-size-md
    - Gross: bsi-btn-size-lg
- btn-width-wdOcZR | Button Breite
  - Quelle: configs/styles/btn-width.js
  - Optionen:
    - Standard: bsi-btn-width-default
    - Über ganze Breite: bsi-btn-width-wide
- border-radius-xTOXFS | Abgerundete Ecken
  - Quelle: configs/styles/border-radius.js
  - Optionen:
    - Nein: bsi-corner-sharp
    - Ja: bsi-corner-rounded
- btn-letter-case-ItTYNe | Text in Grossbuchstaben
  - Quelle: configs/styles/btn-letter-case.js
  - Optionen:
    - Nein: bsi-btn-letter-default
    - Ja: bsi-btn-letter-uppercase

##### Dropzones
- Keine

#### Hervorgehobener Inhalt (card-crRST4)

- Quelle: content-elements/base/card/prototype/index.js
- Template: content-elements/base/card/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - dropzoneContentId
  - dropzoneImageId
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - altWarning
  - caption
  - color
  - dropzoneContentId
  - dropzoneImageId
  - elementId
  - figureAltWarning
  - hasCaption
  - imagePartId
  - imageSrc
  - style
  - text
  - textContent
  - textElementColor
  - textPartId
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - altWarning
  - caption
  - color
  - dropzoneContentId
  - dropzoneImageId
  - elementId
  - hasCaption
  - imagePartId
  - imageSrc
  - style
  - text
  - textContent
  - textPartId
  - titlePartId
  - weight
- Davon nur referenziert:
  - figureAltWarning
  - textElementColor
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Keine erkannt

##### Styles
- fixed-height-d1Z2tp | Höhe des Elements
  - Quelle: configs/styles/fixed-height.js
  - Standard im Template erkannt: bsi-height-auto
  - Optionen:
    - Automatische Höhe: bsi-height-auto
    - Feste Höhe (150 px): bsi-height-fixed-150px
    - Feste Höhe (200 px): bsi-height-fixed-200px
    - Feste Höhe (250 px): bsi-height-fixed-250px
    - Feste Höhe (300 px): bsi-height-fixed-300px
    - Feste Höhe (350 px): bsi-height-fixed-350px
    - Feste Höhe (400 px): bsi-height-fixed-400px
    - Feste Höhe (450 px): bsi-height-fixed-450px
    - Feste Höhe (500 px): bsi-height-fixed-500px
- image-content-position-OHyiqs | Position des Bildes
  - Quelle: configs/styles/image-content-position.js
  - Standard im Template erkannt: bsi-image-top
  - Optionen:
    - Oben: bsi-image-top
    - Unten: bsi-image-bottom
    - Links: bsi-image-left
    - Rechts: bsi-image-right
- image-content-ratio-lFa6R7 | Verhältnis Bild-Inhalt
  - Quelle: configs/styles/image-content-ratio.js
  - Standard im Template erkannt: bsi-ratio-4-8
  - Optionen:
    - 1/6 - 5/6: bsi-ratio-2-10
    - 1/4 - 3/4: bsi-ratio-3-9
    - 1/3 - 2/3: bsi-ratio-4-8
    - 5/12 - 7/12: bsi-ratio-5-7
    - 1 - 1: bsi-ratio-6-6
- background-color-KJRfob | Hintergrundfarbe
  - Quelle: configs/styles/background-color.js
  - Standard im Template erkannt: bsi-bg-color-transparent
  - Optionen:
    - Transparent: bsi-bg-color-transparent
    - Primärfarbe: bsi-bg-color-primary
    - Sekundärfarbe: bsi-bg-color-secondary
    - Tertiärfarbe: bsi-bg-color-tertiary
    - Dunkel: bsi-bg-color-dark
- color-gradient-oDMf9h | Farbverlauf
  - Quelle: configs/styles/color-gradient.js
  - Standard im Template erkannt: bsi-gradient-hide
  - Optionen:
    - Farbverlauf ausblenden: bsi-gradient-hide
    - Farbverlauf nach unten: bsi-gradient-to-bottom
    - Farbverlauf nach oben: bsi-gradient-to-top
    - Farbverlauf nach unten und oben: bsi-gradient-to-bottom-and-top
- background-opacity-tE3oU4 | Farbdeckkraft
  - Quelle: configs/styles/background-opacity.js
  - Standard im Template erkannt: bsi-opacity-100
  - Optionen:
    - 10%: bsi-opacity-10
    - 20%: bsi-opacity-20
    - 30%: bsi-opacity-30
    - 40%: bsi-opacity-40
    - 50%: bsi-opacity-50
    - 60%: bsi-opacity-60
    - 70%: bsi-opacity-70
    - 80%: bsi-opacity-80
    - 90%: bsi-opacity-90
    - 100%: bsi-opacity-100
- border-5CbXuX | Rahmen
  - Quelle: configs/styles/border.js
  - Standard im Template erkannt: bsi-border-visible
  - Optionen:
    - Rahmen ausblenden: bsi-border-hide
    - Rahmen einblenden: bsi-border-visible
- border-radius-xTOXFS | Abgerundete Ecken
  - Quelle: configs/styles/border-radius.js
  - Standard im Template erkannt: bsi-corner-rounded
  - Optionen:
    - Nein: bsi-corner-sharp
    - Ja: bsi-corner-rounded
- shadow-mCj6Ti | Schatten
  - Quelle: configs/styles/shadow.js
  - Standard im Template erkannt: bsi-shadow-visible
  - Optionen:
    - Schatten ausblenden: bsi-shadow-hide
    - Schatten einblenden: bsi-shadow-visible

##### Dropzones
- Dropzone ID: card-dropzone-image-CIqKdf
  - Erlaubte Elemente (Name + elementId):
    - Bild (figure-DWEfdD)
- Dropzone ID: card-dropzone-content-b19htW
  - Erlaubte Elemente (Name + elementId):
    - Button (button-v3cFFn)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)

#### Diagramm (chart-qEBqKT)

- Quelle: content-elements/base/chart/prototype/index.js
- Template: content-elements/base/chart/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - imagePartId
  - urlPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - imagePartLabel
  - template
  - urlPartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - chartBackgroundColor1
  - chartBackgroundColor2
  - chartBackgroundColor3
  - chartBackgroundColor4
  - chartBorderColor1
  - chartBorderColor2
  - chartBorderColor3
  - chartBorderColor4
  - elementId
  - imagePartId
  - imageSrc
  - urlPartId
- Davon per `set` anpassbar:
  - chartBackgroundColor1
  - chartBorderColor1
  - elementId
  - imagePartId
  - imageSrc
  - urlPartId
- Davon nur referenziert:
  - chartBackgroundColor2
  - chartBackgroundColor3
  - chartBackgroundColor4
  - chartBorderColor2
  - chartBorderColor3
  - chartBorderColor4

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: urlProvider, ID: chart-part-url-cDW6yK, Label: Diagramm
- Typ: image, ID: chart-part-image-rpPPzg, Label: Platzhalter

##### Styles
- Keine

##### Dropzones
- Keine

#### Bild (figure-DWEfdD)

- Quelle: content-elements/base/figure/prototype/index.js
- Template: content-elements/base/figure/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - imagePartId
  - textPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - imagePartLabel
  - template
  - textPartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - altWarning
  - caption
  - elementId
  - figureAltWarning
  - hasCaption
  - imagePartId
  - imageSrc
  - textPartId
- Davon per `set` anpassbar:
  - altWarning
  - caption
  - elementId
  - hasCaption
  - imagePartId
  - imageSrc
  - textPartId
- Davon nur referenziert:
  - figureAltWarning

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: image, ID: figure-part-image-JoCwpV, Label: Bild
- Typ: plainText, ID: figure-part-text-Xbhmjk, Label: Bildunterschrift

##### Styles
- figure-caption-zkZLup | Bildunterschrift
  - Quelle: configs/styles/figure-caption.js
  - Standard im Template erkannt: bsi-caption-hide
  - Optionen:
    - Bildunterschrift ausblenden: bsi-caption-hide
    - Bildunterschrift unterhalb Bild: bsi-caption-below
    - Bildunterschrift auf Bild mit grauem Overlay: bsi-caption-overlay
    - Bildunterschrift zentriert auf Bild: bsi-caption-centred
- figure-caption-size-pjhiIU | Schriftgrösse der Bildunterschrift
  - Quelle: configs/styles/figure-caption-size.js
  - Standard im Template erkannt: bsi-caption-medium
  - Optionen:
    - Klein: bsi-caption-small
    - Medium: bsi-caption-medium
    - Gross: bsi-caption-large
- figure-orientation-CSLe1g | Bildausrichtung
  - Quelle: configs/styles/figure-orientation.js
  - Standard im Template erkannt: bsi-orientation-landscape
  - Optionen:
    - Querformat: bsi-orientation-landscape
    - Hochformat: bsi-orientation-portrait
- figure-aspect-ratio-4yu1Zh | Seitenverhältnis
  - Quelle: configs/styles/figure-aspect-ratio.js
  - Standard im Template erkannt: bsi-aspect-ratio-auto
  - Optionen:
    - Auto: bsi-aspect-ratio-auto
    - 1:1: bsi-aspect-ratio-1-1
    - 4:3: bsi-aspect-ratio-4-3
    - 3:2: bsi-aspect-ratio-3-2
    - 16:9: bsi-aspect-ratio-16-9
- figure-shape-ma0KAF | Form des Bildes
  - Quelle: configs/styles/figure-shape.js
  - Standard im Template erkannt: bsi-shape-square
  - Optionen:
    - Eckig: bsi-shape-square
    - Abgerundete Ecken: bsi-shape-rounded
    - Rund: bsi-shape-circle
    - Aura 1: bsi-shape-aura-1
    - Aura 2: bsi-shape-aura-2
    - Aura 3: bsi-shape-aura-3
- overlay-color-0qiI5L | Farbiges Overlay
  - Quelle: configs/styles/overlay-color.js
  - Standard im Template erkannt: bsi-overlay-hide
  - Optionen:
    - Overlay ausblenden: bsi-overlay-hide
    - Primärfarbe: bsi-overlay-primary-color
    - Sekundärfarbe: bsi-overlay-secondary-color
    - Dunkel: bsi-overlay-dark
    - Hell: bsi-overlay-light
- overlay-opacity-IbPo7m | Deckkraft des Overlays
  - Quelle: configs/styles/overlay-opacity.js
  - Standard im Template erkannt: bsi-overlay-opacity-0
  - Optionen:
    - 100%: bsi-overlay-opacity-100
    - 90%: bsi-overlay-opacity-90
    - 80%: bsi-overlay-opacity-80
    - 70%: bsi-overlay-opacity-70
    - 60%: bsi-overlay-opacity-60
    - 50%: bsi-overlay-opacity-50
    - 40%: bsi-overlay-opacity-40
    - 30%: bsi-overlay-opacity-30
    - 20%: bsi-overlay-opacity-20
    - 10%: bsi-overlay-opacity-10
    - 0%: bsi-overlay-opacity-0
- hover-effect-dqTt7x | Hover-Effekt
  - Quelle: configs/styles/hover-effect.js
  - Standard im Template erkannt: bsi-hover-effect-disabled
  - Optionen:
    - Deaktiviert: bsi-hover-effect-disabled
    - Heranzoomen: bsi-hover-effect-zoom-in

##### Dropzones
- Keine

#### H1 Überschrift (title-h1-piICx1)

- Quelle: content-elements/base/h1/prototype/index.js
- Template: content-elements/base/h1/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH1Color
  - titleH1Style
  - titleH1Text
  - titleH1Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH1Color
  - titleH1Style
  - titleH1Text
  - titleH1Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-1) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 1 (bsi-header-style-1)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h1-part-4D1dKG, Label: H1 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### H2 Überschrift (title-h2-KNs10G)

- Quelle: content-elements/base/h2/prototype/index.js
- Template: content-elements/base/h2/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH2Color
  - titleH2Style
  - titleH2Text
  - titleH2Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH2Color
  - titleH2Style
  - titleH2Text
  - titleH2Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-2) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 2 (bsi-header-style-2)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h2-part-vD6omt, Label: H2 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### H3 Überschrift (title-h3-gbnkTT)

- Quelle: content-elements/base/h3/prototype/index.js
- Template: content-elements/base/h3/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-3) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 3 (bsi-header-style-3)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h3-part-mJ0yli, Label: H3 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### H4 Überschrift (title-h4-7b609871)

- Quelle: content-elements/base/h4/prototype/index.js
- Template: content-elements/base/h4/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH4Color
  - titleH4Style
  - titleH4Text
  - titleH4Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH4Color
  - titleH4Style
  - titleH4Text
  - titleH4Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-4) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 4 (bsi-header-style-4)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h4-part-c5318944, Label: H4 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### H5 Überschrift (title-h5-1f7dcc4a)

- Quelle: content-elements/base/h5/prototype/index.js
- Template: content-elements/base/h5/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH5Color
  - titleH5Style
  - titleH5Text
  - titleH5Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH5Color
  - titleH5Style
  - titleH5Text
  - titleH5Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-5) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 5 (bsi-header-style-5)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h5-part-cbbd0541, Label: H5 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### H6 Überschrift (title-h6-f9a2d422)

- Quelle: content-elements/base/h6/prototype/index.js
- Template: content-elements/base/h6/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - titlePartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - titlePartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH6Color
  - titleH6Style
  - titleH6Text
  - titleH6Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH6Color
  - titleH6Style
  - titleH6Text
  - titleH6Weight

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-primary-color) → text-color-NAaszh | Farbe
  - Default-Option: Primärfarbe (bsi-text-primary-color)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light
- style (Default: bsi-header-style-6) → header-styles-d2ac4c22 | Überschriften Style
  - Default-Option: Überschrift 6 (bsi-header-style-6)
  - Alle Style-Optionen: Überschrift 1: bsi-header-style-1, Überschrift 2: bsi-header-style-2, Überschrift 3: bsi-header-style-3, Überschrift 4: bsi-header-style-4, Überschrift 5: bsi-header-style-5, Überschrift 6: bsi-header-style-6
- weight (Default: fw-normal) → text-weight-P72h9Q | Schriftstärke
  - Default-Option: Normal (fw-normal)
  - Alle Style-Optionen: Normal: fw-normal, Fett: fw-bold, Leicht: fw-light

##### Element Parts
- Typ: plainText, ID: title-h6-part-2ef79d06, Label: H6 Überschrift

##### Styles
- text-color-NAaszh | Farbe
  - Quelle: configs/styles/text-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light
- text-weight-P72h9Q | Schriftstärke
  - Quelle: configs/styles/text-weight.js
  - Optionen:
    - Normal: fw-normal
    - Fett: fw-bold
    - Leicht: fw-light
- header-styles-d2ac4c22 | Überschriften Style
  - Quelle: configs/styles/headline-style.js
  - Optionen:
    - Überschrift 1: bsi-header-style-1
    - Überschrift 2: bsi-header-style-2
    - Überschrift 3: bsi-header-style-3
    - Überschrift 4: bsi-header-style-4
    - Überschrift 5: bsi-header-style-5
    - Überschrift 6: bsi-header-style-6

##### Dropzones
- Keine

#### HTML (html-VN5KXz)

- Quelle: content-elements/base/html/prototype/index.js
- Template: content-elements/base/html/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - htmlPartId
  - htmlPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - html
- Davon per `set` anpassbar:
  - elementId
  - html
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: html, ID: html-part-OrXIAg, Label: HTML-Quellcode

##### Styles
- Keine

##### Dropzones
- Keine

#### News Snippet (news-snippet-4E7jFg)

- Quelle: content-elements/base/news-snippet/prototype/index.js
- Template: content-elements/base/news-snippet/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - btnPartId
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - btnPartLabel
  - elementLabel
  - newsPartId
  - newsPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - btnPartId
  - elementId
  - news
- Davon per `set` anpassbar:
  - btnPartId
  - elementId
  - news
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: newsSnippet, ID: news-snippet-part-Z6vBxS, Label: News Snippet
- Typ: plainText, ID: news-snippet-part-btn-BplEx2, Label: Button Text

##### Styles
- fixed-height-d1Z2tp | Höhe des Elements
  - Quelle: configs/styles/fixed-height.js
  - Standard im Template erkannt: bsi-height-auto
  - Optionen:
    - Automatische Höhe: bsi-height-auto
    - Feste Höhe (150 px): bsi-height-fixed-150px
    - Feste Höhe (200 px): bsi-height-fixed-200px
    - Feste Höhe (250 px): bsi-height-fixed-250px
    - Feste Höhe (300 px): bsi-height-fixed-300px
    - Feste Höhe (350 px): bsi-height-fixed-350px
    - Feste Höhe (400 px): bsi-height-fixed-400px
    - Feste Höhe (450 px): bsi-height-fixed-450px
    - Feste Höhe (500 px): bsi-height-fixed-500px
- news-background-color-K8UaCf | Hintergrundfarbe
  - Quelle: configs/styles/news-background-color.js
  - Standard im Template erkannt: bsi-news-bg-color-grey
  - Optionen:
    - Weisser Hintergrund, grauer Rahmen: bsi-news-bg-color-white
    - Grauer Hintergrund, ohne Rahmen: bsi-news-bg-color-grey
- image-content-position-OHyiqs | Position des Bildes
  - Quelle: configs/styles/image-content-position.js
  - Standard im Template erkannt: bsi-image-left
  - Optionen:
    - Oben: bsi-image-top
    - Unten: bsi-image-bottom
    - Links: bsi-image-left
    - Rechts: bsi-image-right
- image-content-ratio-lFa6R7 | Verhältnis Bild-Inhalt
  - Quelle: configs/styles/image-content-ratio.js
  - Standard im Template erkannt: bsi-ratio-4-8
  - Optionen:
    - 1/6 - 5/6: bsi-ratio-2-10
    - 1/4 - 3/4: bsi-ratio-3-9
    - 1/3 - 2/3: bsi-ratio-4-8
    - 5/12 - 7/12: bsi-ratio-5-7
    - 1 - 1: bsi-ratio-6-6
- news-button-2vFF8z | Weitere-Infos Button
  - Quelle: configs/styles/news-button.js
  - Standard im Template erkannt: bsi-news-btn-visible
  - Optionen:
    - Button einblenden: bsi-news-btn-visible
    - Button ausblenden: bsi-news-btn-hide
- btn-color-eTXeUU | Button Farbe
  - Quelle: configs/styles/btn-color.js
  - Standard im Template erkannt: bsi-btn-color-secondary
  - Optionen:
    - Primärfarbe: bsi-btn-color-primary
    - Sekundärfarbe: bsi-btn-color-secondary
    - Dunkel: bsi-btn-color-dark
    - Hell: bsi-btn-color-light
- btn-layout-YSdX2N | Button Layout
  - Quelle: configs/styles/btn-layout.js
  - Standard im Template erkannt: bsi-btn-outline
  - Optionen:
    - Farbig, ausgefüllt: bsi-btn-filled
    - Farbig, umrandet: bsi-btn-outline
    - Link ohne Umrandung: bsi-btn-link

##### Dropzones
- Keine

#### Terminbuchung (slot-finder-dZlvGH)

- Quelle: content-elements/base/slot-finder/prototype/index.js
- Template: content-elements/base/slot-finder/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - bookSlotButtonTextPartId
  - bookSlotTextPartId
  - chooseAnotherDayTextPartId
  - chooseDateTextPartId
  - chooseSlotTextPartId
  - elementId
  - noSlotsTextPartId
  - urlPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - bookSlotButtonTextPartLabel
  - bookSlotTextPartLabel
  - chooseAnotherDayTextPartLabel
  - chooseDateTextPartLabel
  - chooseSlotTextPartLabel
  - elementLabel
  - noSlotsTextPartLabel
  - template
  - urlPartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - bookSlotButtonText
  - bookSlotButtonTextPartId
  - bookSlotText
  - bookSlotTextPartId
  - chooseAnotherDayText
  - chooseAnotherDayTextPartId
  - chooseDateText
  - chooseDateTextPartId
  - chooseSlotText
  - chooseSlotTextPartId
  - elementId
  - noSlotsText
  - noSlotsTextPartId
  - slotFinderBookSlotButtonText
  - slotFinderBookSlotText
  - slotFinderChooseAnotherDayText
  - slotFinderChooseDateText
  - slotFinderChooseSlotText
  - slotFinderNoSlotsText
  - urlPartId
- Davon per `set` anpassbar:
  - bookSlotButtonText
  - bookSlotButtonTextPartId
  - bookSlotText
  - bookSlotTextPartId
  - chooseAnotherDayText
  - chooseAnotherDayTextPartId
  - chooseDateText
  - chooseDateTextPartId
  - chooseSlotText
  - chooseSlotTextPartId
  - elementId
  - noSlotsText
  - noSlotsTextPartId
  - urlPartId
- Davon nur referenziert:
  - slotFinderBookSlotButtonText
  - slotFinderBookSlotText
  - slotFinderChooseAnotherDayText
  - slotFinderChooseDateText
  - slotFinderChooseSlotText
  - slotFinderNoSlotsText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: urlProvider, ID: slot-finder-part-url-cDW6yK, Label: Terminplaner
- Typ: plainText, ID: slot-finder-part-plain-text-rBaSIU, Label: Datum wählen - Legende
- Typ: plainText, ID: slot-finder-part-plain-text-Zvagh6, Label: Termin wählen - Legende
- Typ: plainText, ID: slot-finder-part-plain-text-8xP6D8, Label: Termin überprüfen - Legende
- Typ: plainText, ID: slot-finder-part-plain-text-85mYbP, Label: Termin buchen - Button
- Typ: plainText, ID: slot-finder-part-plain-text-ZvwVaT, Label: Keine Termine vefügbar - Meldung
- Typ: plainText, ID: slot-finder-part-plain-text-Uysf70, Label: Anderen Tag wählen - Meldung

##### Styles
- slots-finder-flow-fGBdiu | Ausrichtung
  - Quelle: configs/styles/slot-finder-flow.js
  - Standard im Template erkannt: default-flow
  - Optionen:
    - Horizontal: default-flow
    - Vertikal: column-flow
- slots-finder-slot-size-fjRdbB | Kalenderanzeige
  - Quelle: configs/styles/slot-finder-slot-size.js
  - Standard im Template erkannt: default-slots
  - Optionen:
    - Start- und Endzeit: default-slots
    - Nur Startzeiten: small-slots
- slots-finder-slots-view-dkKLoi | Terminanzeige
  - Quelle: configs/styles/slot-finder-slots-view.js
  - Standard im Template erkannt: day-view
  - Optionen:
    - Automatisch: default-view
    - Nur Tagessicht: day-view
    - Nur Wochensicht: week-view

##### Dropzones
- Keine

#### Social Media Follow (social-media-follow-2MlXWB)

- Quelle: content-elements/base/social-media-follow/prototype/index.js
- Template: content-elements/base/social-media-follow/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - facebookHidden
  - facebookURL
  - followFacebookHidden
  - followFacebookURL
  - followIconColor
  - followIconHoverColor
  - followIconSize
  - followInstagramHidden
  - followInstagramURL
  - followKununuHidden
  - followKununuURL
  - followLinkedinHidden
  - followLinkedinURL
  - followPinterestHidden
  - followPinterestURL
  - followSnapchatHidden
  - followSnapchatURL
  - followTiktokHidden
  - followTiktokURL
  - followTwitterHidden
  - followTwitterURL
  - followWhatsappHidden
  - followWhatsappURL
  - followXHidden
  - followXingHidden
  - followXingURL
  - followXURL
  - followYoutubeHidden
  - followYoutubeURL
  - iconColor
  - iconHoverColor
  - iconSize
  - instagramHidden
  - instagramURL
  - kununuHidden
  - kununuURL
  - linkedinHidden
  - linkedinURL
  - pinterestHidden
  - pinterestURL
  - snapchatHidden
  - snapchatURL
  - tiktokHidden
  - tiktokURL
  - whatsappHidden
  - whatsappURL
  - XHidden
  - xingHidden
  - xingURL
  - XURL
  - youtubeHidden
  - youtubeURL
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - facebookHidden
  - facebookURL
  - iconColor
  - iconHoverColor
  - iconSize
  - instagramHidden
  - instagramURL
  - kununuHidden
  - kununuURL
  - linkedinHidden
  - linkedinURL
  - pinterestHidden
  - pinterestURL
  - snapchatHidden
  - snapchatURL
  - tiktokHidden
  - tiktokURL
  - whatsappHidden
  - whatsappURL
  - XHidden
  - xingHidden
  - xingURL
  - XURL
  - youtubeHidden
  - youtubeURL
- Davon nur referenziert:
  - followFacebookHidden
  - followFacebookURL
  - followIconColor
  - followIconHoverColor
  - followIconSize
  - followInstagramHidden
  - followInstagramURL
  - followKununuHidden
  - followKununuURL
  - followLinkedinHidden
  - followLinkedinURL
  - followPinterestHidden
  - followPinterestURL
  - followSnapchatHidden
  - followSnapchatURL
  - followTiktokHidden
  - followTiktokURL
  - followTwitterHidden
  - followTwitterURL
  - followWhatsappHidden
  - followWhatsappURL
  - followXHidden
  - followXingHidden
  - followXingURL
  - followXURL
  - followYoutubeHidden
  - followYoutubeURL

##### Parameter ↔ Style Zuordnung
- iconColor (Default: bsi-icon-color-primary) → icon-color-RlaUth | Icon Farbe
  - Default-Option: Primärfarbe (bsi-icon-color-primary)
  - Alle Style-Optionen: Primärfarbe: bsi-icon-color-primary, Sekundärfarbe: bsi-icon-color-secondary, Dunkel: bsi-icon-color-dark, Hell: bsi-icon-color-light
- iconHoverColor (Default: bsi-icon-hover-color-secondary) → icon-hover-color-oUrelW | Icon Farbe beim Hovern
  - Default-Option: Sekundärfarbe (bsi-icon-hover-color-secondary)
  - Alle Style-Optionen: Primärfarbe: bsi-icon-hover-color-primary, Sekundärfarbe: bsi-icon-hover-color-secondary, Dunkel: bsi-icon-hover-color-dark, Hell: bsi-icon-hover-color-light
- iconSize (Default: bsi-icon-size-medium) → icon-size-SnWsSL | Icon Grösse
  - Default-Option: Medium (bsi-icon-size-medium)
  - Alle Style-Optionen: Klein: bsi-icon-size-small, Medium: bsi-icon-size-medium, Gross: bsi-icon-size-large

##### Element Parts
- Typ: socialFollow, ID: social-media-follow-part-6oLWxR, Label: Social Media Follow

##### Styles
- icon-color-RlaUth | Icon Farbe
  - Quelle: configs/styles/icon-color.js
  - Optionen:
    - Primärfarbe: bsi-icon-color-primary
    - Sekundärfarbe: bsi-icon-color-secondary
    - Dunkel: bsi-icon-color-dark
    - Hell: bsi-icon-color-light
- icon-hover-color-oUrelW | Icon Farbe beim Hovern
  - Quelle: configs/styles/icon-hover-color.js
  - Optionen:
    - Primärfarbe: bsi-icon-hover-color-primary
    - Sekundärfarbe: bsi-icon-hover-color-secondary
    - Dunkel: bsi-icon-hover-color-dark
    - Hell: bsi-icon-hover-color-light
- icon-size-SnWsSL | Icon Grösse
  - Quelle: configs/styles/icon-size.js
  - Optionen:
    - Klein: bsi-icon-size-small
    - Medium: bsi-icon-size-medium
    - Gross: bsi-icon-size-large

##### Dropzones
- Keine

#### Social Media Share (social-media-share-u9ppdj)

- Quelle: content-elements/base/social-media-share/prototype/index.js
- Template: content-elements/base/social-media-share/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - labelPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - labelPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - iconColor
  - iconHoverColor
  - iconSize
  - labelPartId
  - shareIconColor
  - shareIconHoverColor
  - shareIconSize
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - iconColor
  - iconHoverColor
  - iconSize
  - labelPartId
- Davon nur referenziert:
  - shareIconColor
  - shareIconHoverColor
  - shareIconSize

##### Parameter ↔ Style Zuordnung
- iconColor (Default: bsi-icon-color-primary) → icon-color-RlaUth | Icon Farbe
  - Default-Option: Primärfarbe (bsi-icon-color-primary)
  - Alle Style-Optionen: Primärfarbe: bsi-icon-color-primary, Sekundärfarbe: bsi-icon-color-secondary, Dunkel: bsi-icon-color-dark, Hell: bsi-icon-color-light
- iconSize (Default: bsi-icon-size-medium) → icon-size-SnWsSL | Icon Grösse
  - Default-Option: Medium (bsi-icon-size-medium)
  - Alle Style-Optionen: Klein: bsi-icon-size-small, Medium: bsi-icon-size-medium, Gross: bsi-icon-size-large

##### Element Parts
- Typ: socialShare, ID: social-media-share-part-7duJql, Label: Social Media Share
- Typ: plainText, ID: social-media-share-part-label-gVreZk, Label: Label

##### Styles
- icon-color-RlaUth | Icon Farbe
  - Quelle: configs/styles/icon-color.js
  - Optionen:
    - Primärfarbe: bsi-icon-color-primary
    - Sekundärfarbe: bsi-icon-color-secondary
    - Dunkel: bsi-icon-color-dark
    - Hell: bsi-icon-color-light
- icon-size-SnWsSL | Icon Grösse
  - Quelle: configs/styles/icon-size.js
  - Optionen:
    - Klein: bsi-icon-size-small
    - Medium: bsi-icon-size-medium
    - Gross: bsi-icon-size-large

##### Dropzones
- Keine

#### Tabelle (table-FuXKu7)

- Quelle: content-elements/base/table/prototype/index.js
- Template: content-elements/base/table/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - partId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - partLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - partId
- Davon per `set` anpassbar:
  - elementId
  - partId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: table, ID: table-part-STrydn, Label: Tabelle

##### Styles
- table-color-xmCwub | Farbe
  - Quelle: configs/styles/table-color.js
  - Standard im Template erkannt: bsi-table-secondary
  - Optionen:
    - Primärfarbe: bsi-table-primary
    - Sekundärfarbe: bsi-table-secondary
    - Dunkel: bsi-table-dark
    - Hell: bsi-table-light
- shadow-mCj6Ti | Schatten
  - Quelle: configs/styles/shadow.js
  - Standard im Template erkannt: bsi-shadow-visible
  - Optionen:
    - Schatten ausblenden: bsi-shadow-hide
    - Schatten einblenden: bsi-shadow-visible
- hover-mW41Ti | Hover
  - Quelle: configs/styles/hover.js
  - Standard im Template erkannt: bsi-table-hover
  - Optionen:
    - Kein Hervorheben: bsi-table-hover-hide
    - Hervorheben: bsi-table-hover
- border-5CbXuX | Rahmen
  - Quelle: configs/styles/border.js
  - Standard im Template erkannt: bsi-border-hide
  - Optionen:
    - Rahmen ausblenden: bsi-border-hide
    - Rahmen einblenden: bsi-border-visible
- table-layout-0c925c61 | Mobiler Umbruch
  - Quelle: configs/styles/table-layout.js
  - Standard im Template erkannt: bsi-table-mobile
  - Optionen:
    - Ja: bsi-table-mobile
    - Nein: bsi-table-desktop-only

##### Dropzones
- Keine

#### Text (text-kkq2fq)

- Quelle: content-elements/base/text/prototype/index.js
- Template: content-elements/base/text/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template
  - textEditorConfig
  - textPartId
  - textPartLabel

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - text
  - textContent
  - textElementColor
- Davon per `set` anpassbar:
  - color
  - elementId
  - text
  - textContent
- Davon nur referenziert:
  - textElementColor

##### Parameter ↔ Style Zuordnung
- color (Default: bsi-text-dark) → text-color-GhT63K | Basis Textfarbe
  - Default-Option: Dunkel (bsi-text-dark)
  - Alle Style-Optionen: Primärfarbe: bsi-text-primary-color, Sekundärfarbe: bsi-text-secondary-color, Dunkel: bsi-text-dark, Hell: bsi-text-light

##### Element Parts
- Typ: formattedText, ID: text-part-Fjse59, Label: Text

##### Styles
- text-color-GhT63K | Basis Textfarbe
  - Quelle: configs/styles/text-editor-color.js
  - Optionen:
    - Primärfarbe: bsi-text-primary-color
    - Sekundärfarbe: bsi-text-secondary-color
    - Dunkel: bsi-text-dark
    - Hell: bsi-text-light

##### Dropzones
- Keine

#### YouTube Video (video-C4cbKm)

- Quelle: content-elements/base/video/prototype/index.js
- Template: content-elements/base/video/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - altWarning
  - elementId
  - elementPartId
  - figureAltWarning
  - videoURL
- Davon per `set` anpassbar:
  - altWarning
  - elementId
  - elementPartId
  - videoURL
- Davon nur referenziert:
  - figureAltWarning

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: video, ID: video-part-loPxhG, Label: YouTube Video

##### Styles
- Keine

##### Dropzones
- Keine

## Form

### Ordner: (root)

#### Hidden Input Label ${i} (file-input-REEhtN)

- Quelle: content-elements/form/advanced-file-upload/prototype/index.js
- Template: content-elements/form/advanced-file-upload/prototype/template.twig
- Beschreibung: erweitertes Upload-Element

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - advFileUploadFileSizeMax
  - advFileUploadInfoText
  - advFileUploadLabelText
  - advFileUploadNumberOfInputs
  - advFileUploadProgressText
  - elementId
  - elementPartId
  - errorAdvFileUploadMaxCountText
  - errorAdvFileUploadMaxSizeText
  - errorInvalidPartId
  - errorInvalidText
  - errorMaxCountPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - advFileUploadFileSizeMax
  - advFileUploadNumberOfInputs
  - advFileUploadProgressText
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorMaxCountPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - advFileUploadInfoText
  - advFileUploadLabelText
  - errorAdvFileUploadMaxCountText
  - errorAdvFileUploadMaxSizeText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: label-text-f95479ef, Label: Label Text
- Typ: plainText, ID: file-input-part-text-T9yfhp, Label: Info Text
- Typ: plainText, ID: file-input-part-error-required-904DIx, Label: Fehlermeldung bei leerem Pflichtfeld
- Typ: plainText, ID: file-input-part-error-max-count-b20f620c, Label: Fehlermeldung bei überschrittener Anzahl Files
- Typ: plainText, ID: file-input-part-error-invalid-5g1mUc, Label: Fehlermeldung bei zu großem File
- Typ: formField, ID: hidden-file-input-32ea01d7-1, Label: Hidden Input Label 1
- Typ: formField, ID: hidden-file-input-32ea01d7-2, Label: Hidden Input Label 2
- Typ: formField, ID: hidden-file-input-32ea01d7-3, Label: Hidden Input Label 3
- Typ: formField, ID: hidden-file-input-32ea01d7-4, Label: Hidden Input Label 4
- Typ: formField, ID: hidden-file-input-32ea01d7-5, Label: Hidden Input Label 5
- Typ: formField, ID: hidden-file-input-32ea01d7-6, Label: Hidden Input Label 6
- Typ: formField, ID: hidden-file-input-32ea01d7-7, Label: Hidden Input Label 7
- Typ: formField, ID: hidden-file-input-32ea01d7-8, Label: Hidden Input Label 8
- Typ: formField, ID: hidden-file-input-32ea01d7-9, Label: Hidden Input Label 9

##### Styles
- Keine

##### Dropzones
- Keine

#### Audio Recorder (audiorecorder-e89a2a)

- Quelle: content-elements/form/audiorecorder/prototype/index.js
- Template: content-elements/form/audiorecorder/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - formTextPartId
- Davon per `set` anpassbar:
  - elementId
  - formTextPartId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: id-file-input-c1db98, Label: Field ID

##### Styles
- Keine

##### Dropzones
- Keine

#### Checkbox (checkbox-24CNSe)

- Quelle: content-elements/form/checkbox/prototype/index.js
- Template: content-elements/form/checkbox/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - checkboxInfoText
  - checkboxLabelText
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - checkboxInfoText
  - checkboxLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formCheckbox, ID: checkbox-part-Nls88s, Label: Checkbox
- Typ: plainText, ID: checkbox-part-text-6ycJm4, Label: Info Text
- Typ: plainText, ID: checkbox-part-error-required-iYG8Ss, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- form-checkbox-switch-hqxpU2 | Typ
  - Quelle: configs/styles/form-checkbox-switch.js
  - Standard im Template erkannt: bsi-form-switch-hide
  - Optionen:
    - Checkbox: bsi-form-switch-hide
    - Switch: form-switch
- form-checkbox-margin-TYlke6 | Abstand nach Checkbox
  - Quelle: configs/styles/form-checkbox-margin.js
  - Standard im Template erkannt: bsi-checkbox-spacing-visible
  - Optionen:
    - Ja: bsi-checkbox-spacing-visible
    - Nein: bsi-checkbox-spacing-hide

##### Dropzones
- Keine

#### Formular (form-container-692qIu)

- Quelle: content-elements/form/form-container/index.js
- Template: content-elements/form/form-container/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - formBorderRadius
  - formButtonLayout
  - formColor
  - formLabelPosition
  - formLayout
  - formTooltipStyle
  - formValidationSummary
  - formValidationSummaryMessage
  - formWidth
- Davon per `set` anpassbar:
  - formBorderRadius
  - formButtonLayout
  - formColor
  - formLabelPosition
  - formLayout
  - formTooltipStyle
  - formValidationSummary
  - formValidationSummaryMessage
  - formWidth
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- formBorderRadius (Default: bsi-corner-rounded) → border-radius-xTOXFS | Abgerundete Ecken
  - Default-Option: Ja (bsi-corner-rounded)
  - Alle Style-Optionen: Nein: bsi-corner-sharp, Ja: bsi-corner-rounded
- formButtonLayout (Default: bsi-form-btn-outline) → form-btn-layout-jhPPtY | Button Layout
  - Default-Option: Farbig umrandet (bsi-form-btn-outline)
  - Alle Style-Optionen: Farbig ausgefüllt: bsi-form-btn-filled, Farbig umrandet: bsi-form-btn-outline
- formColor (Default: bsi-form-color-primary) → form-color-sBgs6f | Formular Farbe
  - Default-Option: Primärfarbe (bsi-form-color-primary)
  - Alle Style-Optionen: Primärfarbe: bsi-form-color-primary, Sekundärfarbe: bsi-form-color-secondary
- formLabelPosition (Default: bsi-form-label-top) → form-label-wJakrq | Label Position
  - Default-Option: Oberhalb (bsi-form-label-top)
  - Alle Style-Optionen: Oberhalb: bsi-form-label-top, Links: bsi-form-label-left
- formLayout (Default: bsi-form-card-visible) → form-layout-1tsmut | Formular Layout
  - Default-Option: Hervorgehoben (bsi-form-card-visible)
  - Alle Style-Optionen: Hervorgehoben: bsi-form-card-visible, Schlicht: bsi-form-card-hide
- formTooltipStyle (Default: bsi-form-info-below-input) → form-info-nJ0575 | Info-Text Position
  - Default-Option: Unterhalb des Inputs (bsi-form-info-below-input)
  - Alle Style-Optionen: Unterhalb des Labels: bsi-form-info-as-text, Unterhalb des Inputs: bsi-form-info-below-input, Als Tooltip: bsi-form-info-as-tooltip
- formValidationSummary (Default: bsi-form-hide-valdiation-summary) → form-validation-summary-cP2la9 | Validierung
  - Default-Option: nur unter Elementen (bsi-form-hide-valdiation-summary)
  - Alle Style-Optionen: oben zusammenfassen: bsi-form-show-valdiation-summary, nur unter Elementen: bsi-form-hide-valdiation-summary
- formWidth (Default: bsi-form-wide) → form-width-SYWW29 | Breite des Formulars
  - Default-Option: Standard (bsi-form-wide)
  - Alle Style-Optionen: Standard: bsi-form-wide, Schmal: bsi-form-slim

##### Element Parts
- Typ: form, ID: form-container-part-6eHZEX, Label: Formular

##### Styles
- form-width-SYWW29 | Breite des Formulars
  - Quelle: configs/styles/form-width.js
  - Optionen:
    - Standard: bsi-form-wide
    - Schmal: bsi-form-slim
- form-layout-1tsmut | Formular Layout
  - Quelle: configs/styles/form-layout.js
  - Optionen:
    - Hervorgehoben: bsi-form-card-visible
    - Schlicht: bsi-form-card-hide
- border-radius-xTOXFS | Abgerundete Ecken
  - Quelle: configs/styles/border-radius.js
  - Optionen:
    - Nein: bsi-corner-sharp
    - Ja: bsi-corner-rounded
- form-color-sBgs6f | Formular Farbe
  - Quelle: configs/styles/form-color.js
  - Optionen:
    - Primärfarbe: bsi-form-color-primary
    - Sekundärfarbe: bsi-form-color-secondary
- form-btn-layout-jhPPtY | Button Layout
  - Quelle: configs/styles/form-btn-layout.js
  - Optionen:
    - Farbig ausgefüllt: bsi-form-btn-filled
    - Farbig umrandet: bsi-form-btn-outline
- form-label-wJakrq | Label Position
  - Quelle: configs/styles/form-label.js
  - Optionen:
    - Oberhalb: bsi-form-label-top
    - Links: bsi-form-label-left
- form-info-nJ0575 | Info-Text Position
  - Quelle: configs/styles/form-info-text.js
  - Optionen:
    - Unterhalb des Labels: bsi-form-info-as-text
    - Unterhalb des Inputs: bsi-form-info-below-input
    - Als Tooltip: bsi-form-info-as-tooltip
- form-validation-summary-cP2la9 | Validierung
  - Quelle: configs/styles/form-validation-summary.js
  - Optionen:
    - oben zusammenfassen: bsi-form-show-valdiation-summary
    - nur unter Elementen: bsi-form-hide-valdiation-summary

##### Dropzones
- Dropzone ID: form-container-dropzone-zsY6UI
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Audio Recorder (audiorecorder-e89a2a)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - Checkbox (checkbox-24CNSe)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Hidden Input Label ${i} (file-input-REEhtN)
    - Formularfeld (form-field-REEhtN)
    - Telefonnummer (form-field-tel-fKUxNS)
    - Friendly Captcha (friendly-captcha-03c21de7)
    - HTML (html-VN5KXz)
    - Wenn-Gruppe (if-layout-TljhJw)
    - Sortierbare Liste (listElement-d5c652)
    - Mehrspaltiges Formularelement (multi-column-VxWXpr)
    - News Snippet (news-snippet-4E7jFg)
    - Umfrage (poll-wni8em)
    - Radio Button (radio-O6XCY3)
    - reCAPTCHA (recaptcha-es8WAZ)
    - Regex - Formularfeld (regex-input-J37djj)
    - Dropdown (select-iOtV1m)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Mehrzeiliges Textfeld (text-area-J5z17p)
    - Text (text-kkq2fq)
    - Dann-Gruppe (then-group-0HfARz)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: form-container-dropzone-btn-left-Q2L32x
  - Erlaubte Elemente (Name + elementId):
    - Button (button-v3cFFn)
- Dropzone ID: form-container-dropzone-btn-right-uIS6Nj
  - Erlaubte Elemente (Name + elementId):
    - Button (button-v3cFFn)
- Dropzone ID: form-container-dropzone-bottom-cJFI8U
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### Formularfeld (form-field-REEhtN)

- Quelle: content-elements/form/form-field/prototype/index.js
- Template: content-elements/form/form-field/template.twig
- Beschreibung: Text, E-Mail, Datum/Uhrzeit, Passwort, Datei, Zahl, Slider

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - elementPartLabel
  - errorInvalidPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formFieldInfoText
  - formFieldLabelText
  - formTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - formFieldInfoText
  - formFieldLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: form-field-part-H72Mnu, Label: Formularfeld
- Typ: plainText, ID: form-field-part-text-T9yfhp, Label: Info Text
- Typ: plainText, ID: form-field-part-error-required-904DIx, Label: Fehlermeldung bei leerem Pflichtfeld
- Typ: plainText, ID: form-field-part-error-invalid-5g1mUc, Label: Fehlermeldung bei ungültiger Eingabe

##### Styles
- Keine

##### Dropzones
- Keine

#### Telefonnummer (form-field-tel-fKUxNS)

- Quelle: content-elements/form/form-field-tel/prototype/index.js
- Template: content-elements/form/form-field-tel/template.twig
- Beschreibung: Normalisierte internationale Telefonnummer

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - countriesPartId
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - countriesPartLabel
  - elementDescription
  - elementLabel
  - elementPartLabel
  - errorInvalidPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - pinnedCountriesPartId
  - pinnedCountriesPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - availableCountries
  - countriesPartId
  - countryPreselect
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - initialCountriesPartId
  - labelText
  - phoneAvailableCountries
  - phoneCountryPreselect
  - phoneInfoText
  - phoneLabelText
- Davon per `set` anpassbar:
  - availableCountries
  - countriesPartId
  - countryPreselect
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - initialCountriesPartId
  - labelText
- Davon nur referenziert:
  - phoneAvailableCountries
  - phoneCountryPreselect
  - phoneInfoText
  - phoneLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: form-field-tel-part-L3Y3gC, Label: Telefonnummer
- Typ: plainText, ID: form-field-tel-part-countries-OGz4jf, Label: Verfügbare Länder
- Typ: plainText, ID: form-field-tel-part-initial-BEWZhN, Label: Vorausgewähltes Land
- Typ: plainText, ID: form-field-tel-part-text-yXZUwb, Label: Info Text
- Typ: plainText, ID: form-field-tel-part-error-required-XKiYlP, Label: Fehlermeldung bei leerem Pflichtfeld
- Typ: plainText, ID: form-field-tel-part-error-invalid-3XeP4R, Label: Fehlermeldung bei ungültiger Eingabe

##### Styles
- Keine

##### Dropzones
- Keine

#### Pin-Element (form-container-pin-384aa4d6)

- Quelle: content-elements/form/form-pin/index.js
- Template: content-elements/form/form-pin/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formBorderRadius
  - formButtonLayout
  - formColor
  - formFieldInfoText
  - formFieldLabelText
  - formLabelPosition
  - formLayout
  - formPinLabel
  - formTextPartId
  - formWidth
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formBorderRadius
  - formButtonLayout
  - formColor
  - formLabelPosition
  - formLayout
  - formPinLabel
  - formTextPartId
  - formWidth
  - infoText
  - labelText
- Davon nur referenziert:
  - formFieldInfoText
  - formFieldLabelText

##### Parameter ↔ Style Zuordnung
- formColor (Default: bsi-form-color-primary) → form-color-sBgs6f | Formular Farbe
  - Default-Option: Primärfarbe (bsi-form-color-primary)
  - Alle Style-Optionen: Primärfarbe: bsi-form-color-primary, Sekundärfarbe: bsi-form-color-secondary
- formLayout (Default: bsi-form-card-visible) → form-layout-1tsmut | Formular Layout
  - Default-Option: Hervorgehoben (bsi-form-card-visible)
  - Alle Style-Optionen: Hervorgehoben: bsi-form-card-visible, Schlicht: bsi-form-card-hide
- formPinLabel (Default: pin-label-invisible) → pin-label-numbering-ba3c80c7 | Nummerierung
  - Default-Option: Ohne Nummerierung (pin-label-invisible)
  - Alle Style-Optionen: Mit Nummerierung: pin-label-visible, Ohne Nummerierung: pin-label-invisible
- formWidth (Default: bsi-form-wide) → form-width-SYWW29 | Breite des Formulars
  - Default-Option: Standard (bsi-form-wide)
  - Alle Style-Optionen: Standard: bsi-form-wide, Schmal: bsi-form-slim

##### Element Parts
- Typ: formField, ID: form-field-part-eefc3ac5, Label: Formularfeld
- Typ: plainText, ID: form-field-part-text-cc1a1c62, Label: Info Text
- Typ: plainText, ID: form-field-part-error-required-f3cf3728, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- form-width-SYWW29 | Breite des Formulars
  - Quelle: configs/styles/form-width.js
  - Optionen:
    - Standard: bsi-form-wide
    - Schmal: bsi-form-slim
- form-layout-1tsmut | Formular Layout
  - Quelle: configs/styles/form-layout.js
  - Optionen:
    - Hervorgehoben: bsi-form-card-visible
    - Schlicht: bsi-form-card-hide
- form-color-sBgs6f | Formular Farbe
  - Quelle: configs/styles/form-color.js
  - Optionen:
    - Primärfarbe: bsi-form-color-primary
    - Sekundärfarbe: bsi-form-color-secondary
- pin-label-numbering-ba3c80c7 | Nummerierung
  - Quelle: configs/styles/pin-label.js
  - Optionen:
    - Mit Nummerierung: pin-label-visible
    - Ohne Nummerierung: pin-label-invisible
- pin-auto-submit-ae00c3ca | Automatisch versenden 
  - Quelle: configs/styles/pin-auto-submit.js
  - Optionen:
    - Nein: default
    - Ja: auto-submit

##### Dropzones
- Keine

#### Friendly Captcha (friendly-captcha-03c21de7)

- Quelle: content-elements/form/friendly-captcha/prototype/index.js
- Template: content-elements/form/friendly-captcha/prototype/template.twig
- Beschreibung: Eine Friendly Captcha Lizenz wird benötigt

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - friendlyCaptchaLabel
  - friendlyCaptchaPartId
  - sideKeyPartId
  - sideKeyPartLabel
  - template
  - validityMessageId
  - validityMessageLabel

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - imageSrc
  - siteKeyePartId
- Davon per `set` anpassbar:
  - elementId
  - imageSrc
  - siteKeyePartId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: friendly-captcha-part-968cbea9, Label: SiteKey
- Typ: formField, ID: friendly-captcha-form-field-part-bolY1C, Label: Die ID darf nicht angepasst werden, da ansonsten die Funktionalität des freindly Captchas verloren geht.
- Typ: plainText, ID: friendly-captcha-validity-message-Uc90KX, Label: Validierungsnachricht

##### Styles
- Keine

##### Dropzones
- Keine

#### Sortierbare Liste (listElement-d5c652)

- Quelle: content-elements/form/list/prototype/index.js
- Template: content-elements/form/list/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - dropzoneContentId
  - elementLabel
  - elementPartId
  - elementPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
- Davon per `set` anpassbar:
  - elementId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: listGroupItems, Label: This just change the Id

##### Styles
- Keine

##### Dropzones
- Dropzone ID: list-dropzone-content-a03084
  - Erlaubte Elemente (Name + elementId):
    - Listeneintrag (listItemElement-ad97e5)

#### Listeneintrag (listItemElement-ad97e5)

- Quelle: content-elements/form/list-item/prototype/index.js
- Template: content-elements/form/list-item/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
- Davon per `set` anpassbar:
  - elementId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: itemLabel, Label: Label

##### Styles
- Keine

##### Dropzones
- Keine

#### Mehrspaltiges Formularelement (multi-column-VxWXpr)

- Quelle: content-elements/form/multi-column/prototype/index.js
- Template: content-elements/form/multi-column/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - dropzoneId
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - dropzoneId
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formFieldInfoText
  - formFieldLabelText
  - formTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - dropzoneId
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - formFieldInfoText
  - formFieldLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Keine erkannt

##### Styles
- form-columns-sVbGg2 | Anzahl Spalten pro Zeile
  - Quelle: configs/styles/form-columns.js
  - Standard im Template erkannt: bsi-col-auto
  - Optionen:
    - Automatisch: bsi-col-auto
    - 2 Spalten: bsi-col-two
    - 3 Spalten: bsi-col-three
    - 4 Spalten: bsi-col-four
- form-columns-layout-b0H3mr | Anordnung der Spalten
  - Quelle: configs/styles/form-columns-layout.js
  - Standard im Template erkannt: bsi-default-wide
  - Optionen:
    - Standard: bsi-default-wide
    - Erstes Element breiter: bsi-first-wide
    - Letztes Element breiter: bsi-last-wide

##### Dropzones
- Dropzone ID: multi-column-dropzone-olNcOu
  - Erlaubte Elemente (Name + elementId):
    - Audio Recorder (audiorecorder-e89a2a)
    - Checkbox (checkbox-24CNSe)
    - Bild (figure-DWEfdD)
    - Hidden Input Label ${i} (file-input-REEhtN)
    - Formularfeld (form-field-REEhtN)
    - Telefonnummer (form-field-tel-fKUxNS)
    - Friendly Captcha (friendly-captcha-03c21de7)
    - Wenn-Gruppe (if-layout-TljhJw)
    - Sortierbare Liste (listElement-d5c652)
    - Umfrage (poll-wni8em)
    - Radio Button (radio-O6XCY3)
    - reCAPTCHA (recaptcha-es8WAZ)
    - Regex - Formularfeld (regex-input-J37djj)
    - Dropdown (select-iOtV1m)
    - Mehrzeiliges Textfeld (text-area-J5z17p)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)

#### Umfrage (poll-wni8em)

- Quelle: content-elements/form/poll/prototype/index.js
- Template: content-elements/form/poll/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - formTextPartId
  - leftPartId
  - rightPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - leftPartLabel
  - rightPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - defaultType
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelLeftText
  - labelRightText
  - labelText
  - leftPartId
  - pollDefaultType
  - pollInfoText
  - pollLabelLeftText
  - pollLabelRightText
  - pollLabelText
  - rightPartId
- Davon per `set` anpassbar:
  - defaultType
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelLeftText
  - labelRightText
  - labelText
  - leftPartId
  - rightPartId
- Davon nur referenziert:
  - pollDefaultType
  - pollInfoText
  - pollLabelLeftText
  - pollLabelRightText
  - pollLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: poll-part-diJBU7, Label: Umfrage
- Typ: plainText, ID: poll-part-left-fw2gb8, Label: Label auf der linken Seite
- Typ: plainText, ID: poll-part-right-Cz7PuT, Label: Label auf der rechten Seite
- Typ: plainText, ID: poll-part-text-Xi7bOp, Label: Info Text
- Typ: plainText, ID: poll-part-error-required-lL6aMT, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- form-poll-6WCmqu | Umfrageart
  - Quelle: configs/styles/form-poll.js
  - Optionen:
    - NPS-Umfrage: bsi-poll-nps
    - Sternebewertung: bsi-poll-star

##### Dropzones
- Keine

#### Radio Button (radio-O6XCY3)

- Quelle: content-elements/form/radio/prototype/index.js
- Template: content-elements/form/radio/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - groupLabelText
  - infoText
  - labelText
  - orientationStyle
  - radioGroupLabelText
  - radioInfoText
  - radioLabelText
  - radioOrientationStyle
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - groupLabelText
  - infoText
  - labelText
  - orientationStyle
- Davon nur referenziert:
  - radioGroupLabelText
  - radioInfoText
  - radioLabelText
  - radioOrientationStyle

##### Parameter ↔ Style Zuordnung
- orientationStyle (Default: bsi-radio-block) → form-radio-inline-1B0AKp | Ausrichtung der Radiobuttons
  - Default-Option: Untereinander (bsi-radio-block)
  - Alle Style-Optionen: Untereinander: bsi-radio-block, Nebeneinander: bsi-radio-inline

##### Element Parts
- Typ: formRadio, ID: radio-part-I0iU7X, Label: Radio Button
- Typ: plainText, ID: radio-part-text-NyYl9g, Label: Info Text
- Typ: plainText, ID: radio-part-error-required-KCNwQh, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- form-radio-inline-1B0AKp | Ausrichtung der Radiobuttons
  - Quelle: configs/styles/form-radio-inline.js
  - Optionen:
    - Untereinander: bsi-radio-block
    - Nebeneinander: bsi-radio-inline

##### Dropzones
- Keine

#### reCAPTCHA (recaptcha-es8WAZ)

- Quelle: content-elements/form/recaptcha/prototype/index.js
- Template: content-elements/form/recaptcha/template.twig
- Beschreibung: NUR für Login-Formulare

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - elementPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - imageSrc
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - imageSrc
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: recaptcha-part-xMHmU5, Label: reCAPTCHA

##### Styles
- Keine

##### Dropzones
- Keine

#### Regex - Formularfeld (regex-input-J37djj)

- Quelle: content-elements/form/regex-input/prototype/index.js
- Template: content-elements/form/regex-input/template.twig
- Beschreibung: Textfeld mit Regex-Validierung

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - errorRequiredPartId
  - infoTextPartId
  - inputPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - errorRequiredPartLabel
  - infoTextPartLabel
  - inputPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - errorRequiredPartId
  - errorRequiredText
  - infoText
  - infoTextPartId
  - inputPartId
  - labelText
  - regexInfoText
  - regexLabelText
- Davon per `set` anpassbar:
  - elementId
  - errorRequiredPartId
  - errorRequiredText
  - infoText
  - infoTextPartId
  - inputPartId
  - labelText
- Davon nur referenziert:
  - regexInfoText
  - regexLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formField, ID: regex-input-field-zSVF1f, Label: Formularfeld
- Typ: plainText, ID: regex-input-info-15YMmu, Label: Info Text
- Typ: plainText, ID: regex-input-error-required-27e49U, Label: Fehlermeldung mit Korrekturvorschlag

##### Styles
- form-field-pattern-wJakrq | Regex Validierung
  - Quelle: configs/styles/form-regex-pattern.js
  - Optionen:
    - key: id

##### Dropzones
- Keine

#### Dropdown (select-iOtV1m)

- Quelle: content-elements/form/select/prototype/index.js
- Template: content-elements/form/select/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
  - optionText
  - selectInfoText
  - selectLabelText
  - selectOptionText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
  - optionText
- Davon nur referenziert:
  - selectInfoText
  - selectLabelText
  - selectOptionText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formSelect, ID: select-part-XNh1St, Label: Dropdown
- Typ: plainText, ID: select-part-text-hSNRfA, Label: Info Text
- Typ: plainText, ID: select-part-error-required-6sq4M6, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- form-select-placeholder-eKwxSU | Platzhalter
  - Quelle: configs/styles/form-select-placeholder.js
  - Standard im Template erkannt: bsi-placeholder-not-defined
  - Optionen:
    - Erster Eintrag ist Platzhalter: bsi-placeholder-defined
    - Kein Platzhalter definiert: bsi-placeholder-not-defined

##### Dropzones
- Keine

#### Mehrzeiliges Textfeld (text-area-J5z17p)

- Quelle: content-elements/form/text-area/prototype/index.js
- Template: content-elements/form/text-area/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - formTextPartId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - elementPartLabel
  - errorRequiredPartLabel
  - formTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
  - textAreaInfoText
  - textAreaLabelText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - textAreaInfoText
  - textAreaLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: formTextarea, ID: text-area-part-61guvT, Label: Mehrzeiliges Textfeld
- Typ: plainText, ID: text-area-part-text-gFR3M5, Label: Info Text
- Typ: plainText, ID: text-area-part-error-required-ZPOyD8, Label: Fehlermeldung bei leerem Pflichtfeld

##### Styles
- Keine

##### Dropzones
- Keine

### Ordner: if-then

#### Wenn-Gruppe (if-layout-TljhJw)

- Quelle: content-elements/form/if-then/if-layout/prototype/index.js
- Template: content-elements/form/if-then/if-layout/template.twig
- Beschreibung: steuert die Sichtbarkeit mehrerer Dann-Gruppen

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - ifDropzoneId
  - template
  - thenDropzoneId

##### Properties (Template)
- Alle erkannten Properties:
  - checkboxInfoText
  - checkboxLabelText
  - conditionPartId
  - conditions
  - dependingDropzone
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - conditionPartId
  - conditions
  - dependingDropzone
  - elementId
  - elementPartId
  - errorRequiredPartId
  - errorRequiredText
  - formTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - checkboxInfoText
  - checkboxLabelText

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Keine erkannt

##### Styles
- Keine

##### Dropzones
- Dropzone ID: if-container-Ys0IFw
  - Erlaubte Elemente (Name + elementId):
    - Checkbox (checkbox-24CNSe)
    - Radio Button (radio-O6XCY3)
    - Dropdown (select-iOtV1m)
- Dropzone ID: then-container-KQoqAa
  - Erlaubte Elemente (Name + elementId):
    - Dann-Gruppe (then-group-0HfARz)

#### Dann-Gruppe (then-group-0HfARz)

- Quelle: content-elements/form/if-then/then-group/prototype/index.js
- Template: content-elements/form/if-then/then-group/template.twig
- Beschreibung: Sichtbarkeit wird von der Wenn-Gruppe gesteuert

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - conditionPartId
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - conditionPartLabel
  - dropzoneId
  - elementDescription
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - conditionPartId
  - conditions
  - dependingDropzone
  - elementId
- Davon per `set` anpassbar:
  - conditionPartId
  - conditions
  - dependingDropzone
  - elementId
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: plainText, ID: then-group-condition-part-UF47Zh, Label: Sichtbar wenn

##### Styles
- then-group-required-4tDo82 | Felder sind
  - Quelle: configs/styles/then-group-required.js
  - Standard im Template erkannt: not-required-if-visible
  - Optionen:
    - Pflichtfelder: required-if-visible
    - keine Pflichtfelder: not-required-if-visible

##### Dropzones
- Dropzone ID: depending-dropzone-MUq0Kd
  - Erlaubte Elemente (Name + elementId):
    - Audio Recorder (audiorecorder-e89a2a)
    - Checkbox (checkbox-24CNSe)
    - Hidden Input Label ${i} (file-input-REEhtN)
    - Formularfeld (form-field-REEhtN)
    - Telefonnummer (form-field-tel-fKUxNS)
    - Friendly Captcha (friendly-captcha-03c21de7)
    - Wenn-Gruppe (if-layout-TljhJw)
    - Sortierbare Liste (listElement-d5c652)
    - Mehrspaltiges Formularelement (multi-column-VxWXpr)
    - Umfrage (poll-wni8em)
    - Radio Button (radio-O6XCY3)
    - reCAPTCHA (recaptcha-es8WAZ)
    - Regex - Formularfeld (regex-input-J37djj)
    - Dropdown (select-iOtV1m)
    - Mehrzeiliges Textfeld (text-area-J5z17p)

## Layout

### Ordner: (root)

#### 4 Spalten (col-four-yFAGKM)

- Quelle: content-elements/layout/col-four/index.js
- Template: content-elements/layout/col-four/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - colFourAlignment
- Davon per `set` anpassbar:
  - colFourAlignment
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- colFourAlignment (Default: bsi-col-align-left) → col-alignment-jt2uRS | Ausrichtung
  - Default-Option: Linksbündig (bsi-col-align-left)
  - Alle Style-Optionen: Linksbündig: bsi-col-align-left, Zentriert: bsi-col-align-center, Rechtsbündig: bsi-col-align-right

##### Element Parts
- Keine erkannt

##### Styles
- col-width-pv2OCc | Breite des Layouts
  - Quelle: configs/styles/col-width.js
  - Standard im Template erkannt: container
  - Optionen:
    - Feste Breite: container
    - Volle Breite: container-fluid
- col-spacing-k4h6OP | Äussere Abstände
  - Quelle: configs/styles/col-spacing.js
  - Standard im Template erkannt: bsi-space-around-visible
  - Optionen:
    - Äussere Abstände anzeigen (empfohlen bei fester Breite): bsi-space-around-visible
    - Äussere Abstände ausblenden (empfohlen für volle Breite und Spalten innerhalb von Spalten): bsi-space-around-hide
- col-gap-5SzAwS | Abstände zwischen Spalten
  - Quelle: configs/styles/col-gap.js
  - Standard im Template erkannt: bsi-gaps-visible
  - Optionen:
    - Abstände einblenden: bsi-gaps-visible
    - Abstände ausblenden: bsi-gaps-hide
- col-alignment-jt2uRS | Ausrichtung
  - Quelle: configs/styles/col-alignment.js
  - Optionen:
    - Linksbündig: bsi-col-align-left
    - Zentriert: bsi-col-align-center
    - Rechtsbündig: bsi-col-align-right
- col-mobile-hFK2uB | Spalten auf Mobilgeräten
  - Quelle: configs/styles/col-mobile.js
  - Standard im Template erkannt: bsi-mobile-break
  - Optionen:
    - Untereinander / Umbrechen: bsi-mobile-break
    - Nebeneinander / Kein Umbruch: bsi-mobile-keep
- background-color-KJRfob | Hintergrundfarbe
  - Quelle: configs/styles/background-color.js
  - Standard im Template erkannt: bsi-bg-color-transparent
  - Optionen:
    - Transparent: bsi-bg-color-transparent
    - Primärfarbe: bsi-bg-color-primary
    - Sekundärfarbe: bsi-bg-color-secondary
    - Tertiärfarbe: bsi-bg-color-tertiary
    - Dunkel: bsi-bg-color-dark
- color-gradient-oDMf9h | Farbverlauf
  - Quelle: configs/styles/color-gradient.js
  - Standard im Template erkannt: bsi-gradient-hide
  - Optionen:
    - Farbverlauf ausblenden: bsi-gradient-hide
    - Farbverlauf nach unten: bsi-gradient-to-bottom
    - Farbverlauf nach oben: bsi-gradient-to-top
    - Farbverlauf nach unten und oben: bsi-gradient-to-bottom-and-top
- background-opacity-tE3oU4 | Farbdeckkraft
  - Quelle: configs/styles/background-opacity.js
  - Standard im Template erkannt: bsi-opacity-100
  - Optionen:
    - 10%: bsi-opacity-10
    - 20%: bsi-opacity-20
    - 30%: bsi-opacity-30
    - 40%: bsi-opacity-40
    - 50%: bsi-opacity-50
    - 60%: bsi-opacity-60
    - 70%: bsi-opacity-70
    - 80%: bsi-opacity-80
    - 90%: bsi-opacity-90
    - 100%: bsi-opacity-100

##### Dropzones
- Dropzone ID: col-four-dropzone-1-CKCyLC
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-four-dropzone-2-4UemGW
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-four-dropzone-3-Iuejt6
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-four-dropzone-4-HVE6UW
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### 1 Spalte (col-one-l2ZclN)

- Quelle: content-elements/layout/col-one/index.js
- Template: content-elements/layout/col-one/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - colOneAlignment
- Davon per `set` anpassbar:
  - colOneAlignment
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- colOneAlignment (Default: bsi-col-align-left) → col-alignment-jt2uRS | Ausrichtung
  - Default-Option: Linksbündig (bsi-col-align-left)
  - Alle Style-Optionen: Linksbündig: bsi-col-align-left, Zentriert: bsi-col-align-center, Rechtsbündig: bsi-col-align-right

##### Element Parts
- Keine erkannt

##### Styles
- col-width-pv2OCc | Breite des Layouts
  - Quelle: configs/styles/col-width.js
  - Standard im Template erkannt: container
  - Optionen:
    - Feste Breite: container
    - Volle Breite: container-fluid
- col-spacing-k4h6OP | Äussere Abstände
  - Quelle: configs/styles/col-spacing.js
  - Standard im Template erkannt: bsi-space-around-visible
  - Optionen:
    - Äussere Abstände anzeigen (empfohlen bei fester Breite): bsi-space-around-visible
    - Äussere Abstände ausblenden (empfohlen für volle Breite und Spalten innerhalb von Spalten): bsi-space-around-hide
- col-gap-5SzAwS | Abstände zwischen Spalten
  - Quelle: configs/styles/col-gap.js
  - Standard im Template erkannt: bsi-gaps-visible
  - Optionen:
    - Abstände einblenden: bsi-gaps-visible
    - Abstände ausblenden: bsi-gaps-hide
- col-alignment-jt2uRS | Ausrichtung
  - Quelle: configs/styles/col-alignment.js
  - Optionen:
    - Linksbündig: bsi-col-align-left
    - Zentriert: bsi-col-align-center
    - Rechtsbündig: bsi-col-align-right
- background-color-KJRfob | Hintergrundfarbe
  - Quelle: configs/styles/background-color.js
  - Standard im Template erkannt: bsi-bg-color-transparent
  - Optionen:
    - Transparent: bsi-bg-color-transparent
    - Primärfarbe: bsi-bg-color-primary
    - Sekundärfarbe: bsi-bg-color-secondary
    - Tertiärfarbe: bsi-bg-color-tertiary
    - Dunkel: bsi-bg-color-dark
- color-gradient-oDMf9h | Farbverlauf
  - Quelle: configs/styles/color-gradient.js
  - Standard im Template erkannt: bsi-gradient-hide
  - Optionen:
    - Farbverlauf ausblenden: bsi-gradient-hide
    - Farbverlauf nach unten: bsi-gradient-to-bottom
    - Farbverlauf nach oben: bsi-gradient-to-top
    - Farbverlauf nach unten und oben: bsi-gradient-to-bottom-and-top
- background-opacity-tE3oU4 | Farbdeckkraft
  - Quelle: configs/styles/background-opacity.js
  - Standard im Template erkannt: bsi-opacity-100
  - Optionen:
    - 10%: bsi-opacity-10
    - 20%: bsi-opacity-20
    - 30%: bsi-opacity-30
    - 40%: bsi-opacity-40
    - 50%: bsi-opacity-50
    - 60%: bsi-opacity-60
    - 70%: bsi-opacity-70
    - 80%: bsi-opacity-80
    - 90%: bsi-opacity-90
    - 100%: bsi-opacity-100

##### Dropzones
- Dropzone ID: col-one-dropzone-OzGBbS
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - Neues Formular (form-container-84c6581f)
    - Pin-Element (form-container-pin-384aa4d6)
    - HTML (html-VN5KXz)
    - Logo (logo-4c8c3a)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
    - Bild aufnehmen (webcam-image-upload-wHe4UP)

#### 3 Spalten (col-three-MEOl1p)

- Quelle: content-elements/layout/col-three/index.js
- Template: content-elements/layout/col-three/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - colThreeAlignment
- Davon per `set` anpassbar:
  - colThreeAlignment
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- colThreeAlignment (Default: bsi-col-align-left) → col-alignment-jt2uRS | Ausrichtung
  - Default-Option: Linksbündig (bsi-col-align-left)
  - Alle Style-Optionen: Linksbündig: bsi-col-align-left, Zentriert: bsi-col-align-center, Rechtsbündig: bsi-col-align-right

##### Element Parts
- Keine erkannt

##### Styles
- col-width-pv2OCc | Breite des Layouts
  - Quelle: configs/styles/col-width.js
  - Standard im Template erkannt: container
  - Optionen:
    - Feste Breite: container
    - Volle Breite: container-fluid
- col-three-ratio-koAzWH | Verhältnis der Spaltenbreiten
  - Quelle: configs/styles/col-three-ratio.js
  - Standard im Template erkannt: bsi-ratio-4-4-4
  - Optionen:
    - 1 - 1 - 1: bsi-ratio-4-4-4
    - 1/4 - 1/2 - 1/4: bsi-ratio-3-6-3
- col-spacing-k4h6OP | Äussere Abstände
  - Quelle: configs/styles/col-spacing.js
  - Standard im Template erkannt: bsi-space-around-visible
  - Optionen:
    - Äussere Abstände anzeigen (empfohlen bei fester Breite): bsi-space-around-visible
    - Äussere Abstände ausblenden (empfohlen für volle Breite und Spalten innerhalb von Spalten): bsi-space-around-hide
- col-gap-5SzAwS | Abstände zwischen Spalten
  - Quelle: configs/styles/col-gap.js
  - Standard im Template erkannt: bsi-gaps-visible
  - Optionen:
    - Abstände einblenden: bsi-gaps-visible
    - Abstände ausblenden: bsi-gaps-hide
- col-alignment-jt2uRS | Ausrichtung
  - Quelle: configs/styles/col-alignment.js
  - Optionen:
    - Linksbündig: bsi-col-align-left
    - Zentriert: bsi-col-align-center
    - Rechtsbündig: bsi-col-align-right
- col-mobile-hFK2uB | Spalten auf Mobilgeräten
  - Quelle: configs/styles/col-mobile.js
  - Standard im Template erkannt: bsi-mobile-break
  - Optionen:
    - Untereinander / Umbrechen: bsi-mobile-break
    - Nebeneinander / Kein Umbruch: bsi-mobile-keep
- background-color-KJRfob | Hintergrundfarbe
  - Quelle: configs/styles/background-color.js
  - Standard im Template erkannt: bsi-bg-color-transparent
  - Optionen:
    - Transparent: bsi-bg-color-transparent
    - Primärfarbe: bsi-bg-color-primary
    - Sekundärfarbe: bsi-bg-color-secondary
    - Tertiärfarbe: bsi-bg-color-tertiary
    - Dunkel: bsi-bg-color-dark
- color-gradient-oDMf9h | Farbverlauf
  - Quelle: configs/styles/color-gradient.js
  - Standard im Template erkannt: bsi-gradient-hide
  - Optionen:
    - Farbverlauf ausblenden: bsi-gradient-hide
    - Farbverlauf nach unten: bsi-gradient-to-bottom
    - Farbverlauf nach oben: bsi-gradient-to-top
    - Farbverlauf nach unten und oben: bsi-gradient-to-bottom-and-top
- background-opacity-tE3oU4 | Farbdeckkraft
  - Quelle: configs/styles/background-opacity.js
  - Standard im Template erkannt: bsi-opacity-100
  - Optionen:
    - 10%: bsi-opacity-10
    - 20%: bsi-opacity-20
    - 30%: bsi-opacity-30
    - 40%: bsi-opacity-40
    - 50%: bsi-opacity-50
    - 60%: bsi-opacity-60
    - 70%: bsi-opacity-70
    - 80%: bsi-opacity-80
    - 90%: bsi-opacity-90
    - 100%: bsi-opacity-100

##### Dropzones
- Dropzone ID: col-three-dropzone-1-gZDmPP
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-three-dropzone-2-9kRnnj
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-three-dropzone-3-M3XKDm
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### 2 Spalten (col-two-ILRIL0)

- Quelle: content-elements/layout/col-two/index.js
- Template: content-elements/layout/col-two/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - Keine erkannt
- Keine erkannt

##### Properties (Template)
- Alle erkannten Properties:
  - colTwoAlignment
- Davon per `set` anpassbar:
  - colTwoAlignment
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- colTwoAlignment (Default: bsi-col-align-left) → col-alignment-jt2uRS | Ausrichtung
  - Default-Option: Linksbündig (bsi-col-align-left)
  - Alle Style-Optionen: Linksbündig: bsi-col-align-left, Zentriert: bsi-col-align-center, Rechtsbündig: bsi-col-align-right

##### Element Parts
- Keine erkannt

##### Styles
- col-width-pv2OCc | Breite des Layouts
  - Quelle: configs/styles/col-width.js
  - Standard im Template erkannt: container
  - Optionen:
    - Feste Breite: container
    - Volle Breite: container-fluid
- col-two-ratio-dYkpTf | Verhältnis der Spaltenbreiten
  - Quelle: configs/styles/col-two-ratio.js
  - Standard im Template erkannt: bsi-ratio-6-6
  - Optionen:
    - 1 - 1: bsi-ratio-6-6
    - 2/3 - 1/3: bsi-ratio-8-4
    - 1/3 - 2/3: bsi-ratio-4-8
- col-two-order-vo40Cv | Spaltenreihenfolge tauschen
  - Quelle: configs/styles/col-two-order.js
  - Standard im Template erkannt: bsi-col-order-default
  - Optionen:
    - Nein: bsi-col-order-default
    - Ja: bsi-col-order-swapped
    - Nur auf Desktop-Geräten: bsi-col-order-swapped-desktop
    - Nur auf mobilen Geräten: bsi-col-order-swapped-mobile
- col-spacing-k4h6OP | Äussere Abstände
  - Quelle: configs/styles/col-spacing.js
  - Standard im Template erkannt: bsi-space-around-visible
  - Optionen:
    - Äussere Abstände anzeigen (empfohlen bei fester Breite): bsi-space-around-visible
    - Äussere Abstände ausblenden (empfohlen für volle Breite und Spalten innerhalb von Spalten): bsi-space-around-hide
- col-gap-5SzAwS | Abstände zwischen Spalten
  - Quelle: configs/styles/col-gap.js
  - Standard im Template erkannt: bsi-gaps-visible
  - Optionen:
    - Abstände einblenden: bsi-gaps-visible
    - Abstände ausblenden: bsi-gaps-hide
- col-alignment-jt2uRS | Ausrichtung
  - Quelle: configs/styles/col-alignment.js
  - Optionen:
    - Linksbündig: bsi-col-align-left
    - Zentriert: bsi-col-align-center
    - Rechtsbündig: bsi-col-align-right
- col-mobile-hFK2uB | Spalten auf Mobilgeräten
  - Quelle: configs/styles/col-mobile.js
  - Standard im Template erkannt: bsi-mobile-break
  - Optionen:
    - Untereinander / Umbrechen: bsi-mobile-break
    - Nebeneinander / Kein Umbruch: bsi-mobile-keep
- background-color-KJRfob | Hintergrundfarbe
  - Quelle: configs/styles/background-color.js
  - Standard im Template erkannt: bsi-bg-color-transparent
  - Optionen:
    - Transparent: bsi-bg-color-transparent
    - Primärfarbe: bsi-bg-color-primary
    - Sekundärfarbe: bsi-bg-color-secondary
    - Tertiärfarbe: bsi-bg-color-tertiary
    - Dunkel: bsi-bg-color-dark
- color-gradient-oDMf9h | Farbverlauf
  - Quelle: configs/styles/color-gradient.js
  - Standard im Template erkannt: bsi-gradient-hide
  - Optionen:
    - Farbverlauf ausblenden: bsi-gradient-hide
    - Farbverlauf nach unten: bsi-gradient-to-bottom
    - Farbverlauf nach oben: bsi-gradient-to-top
    - Farbverlauf nach unten und oben: bsi-gradient-to-bottom-and-top
- background-opacity-tE3oU4 | Farbdeckkraft
  - Quelle: configs/styles/background-opacity.js
  - Standard im Template erkannt: bsi-opacity-100
  - Optionen:
    - 10%: bsi-opacity-10
    - 20%: bsi-opacity-20
    - 30%: bsi-opacity-30
    - 40%: bsi-opacity-40
    - 50%: bsi-opacity-50
    - 60%: bsi-opacity-60
    - 70%: bsi-opacity-70
    - 80%: bsi-opacity-80
    - 90%: bsi-opacity-90
    - 100%: bsi-opacity-100

##### Dropzones
- Dropzone ID: col-two-dropzone-1-aDxFmN
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - Neues Formular (form-container-84c6581f)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)
- Dropzone ID: col-two-dropzone-2-BSeopF
  - Erlaubte Elemente (Name + elementId):
    - Akkordion (accordion-OowSb3)
    - Banner (banner-8eHkFN)
    - Button (button-v3cFFn)
    - Hervorgehobener Inhalt (card-crRST4)
    - Diagramm (chart-qEBqKT)
    - 4 Spalten (col-four-yFAGKM)
    - 1 Spalte (col-one-l2ZclN)
    - 3 Spalten (col-three-MEOl1p)
    - 2 Spalten (col-two-ILRIL0)
    - Bild (figure-DWEfdD)
    - Formular (form-container-692qIu)
    - Neues Formular (form-container-84c6581f)
    - HTML (html-VN5KXz)
    - News Snippet (news-snippet-4E7jFg)
    - Terminbuchung (slot-finder-dZlvGH)
    - Social Media Follow (social-media-follow-2MlXWB)
    - Social Media Share (social-media-share-u9ppdj)
    - Abstand (spacer-jarY9b)
    - Tabelle (table-FuXKu7)
    - Text (text-kkq2fq)
    - H1 Überschrift (title-h1-piICx1)
    - H2 Überschrift (title-h2-KNs10G)
    - H3 Überschrift (title-h3-gbnkTT)
    - H4 Überschrift (title-h4-7b609871)
    - H5 Überschrift (title-h5-1f7dcc4a)
    - H6 Überschrift (title-h6-f9a2d422)
    - YouTube Video (video-C4cbKm)

#### Abstand (spacer-jarY9b)

- Quelle: content-elements/layout/spacer/prototype/index.js
- Template: content-elements/layout/spacer/template.twig

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - spacingStyle
- Davon per `set` anpassbar:
  - elementId
  - spacingStyle
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- spacingStyle (Default: pt-5) → spacer-yijTs2 | Grösse des Abstands
  - Default-Option: 48 px (pt-5)
  - Alle Style-Optionen: 4 px: pt-1, 8 px: pt-2, 16 px: pt-3, 24 px: pt-4, 48 px: pt-5, 80 px: pt-6, 120 px: pt-7, 160 px: pt-8

##### Element Parts
- Keine erkannt

##### Styles
- spacer-yijTs2 | Grösse des Abstands
  - Quelle: configs/styles/spacer.js
  - Optionen:
    - 4 px: pt-1
    - 8 px: pt-2
    - 16 px: pt-3
    - 24 px: pt-4
    - 48 px: pt-5
    - 80 px: pt-6
    - 120 px: pt-7
    - 160 px: pt-8

##### Dropzones
- Keine

## New Form

### Ordner: (root)

#### Neues Formular (form-container-84c6581f)

- Quelle: content-elements/new-form/form-container/prototype/index.js
- Template: content-elements/new-form/form-container/prototype/template.twig
- Beschreibung: Wrapper, der alle Formularbestandteile gruppiert und organisiert.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - dropzoneId
  - elementDescription
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - borderRadiusFormElements
  - borderWidthFormElements
  - color
  - customStyleClasses
  - elementId
  - errorTypeMissmatchText
  - errorValueMissingText
  - formButtonAlignment
  - formErrorTypeMissmatchText
  - formErrorValueMissingText
  - formLabelInfoPosition
  - formOtherError
  - otherError
  - showFormFieldTypeField
  - spaceBetweenFormElements
  - spaceBetweenFormSections
  - spaceWithinFormelements
  - style
  - text
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - borderRadiusFormElements
  - borderWidthFormElements
  - color
  - customStyleClasses
  - elementId
  - errorTypeMissmatchText
  - errorValueMissingText
  - formButtonAlignment
  - formLabelInfoPosition
  - otherError
  - spaceBetweenFormElements
  - spaceBetweenFormSections
  - spaceWithinFormelements
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - formErrorTypeMissmatchText
  - formErrorValueMissingText
  - formOtherError
  - showFormFieldTypeField
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight

##### Parameter ↔ Style Zuordnung
- formButtonAlignment (Default: form-button-alignment-start) → form-button-alignment-79553e65 | Formular-Button Ausrichtung
  - Default-Option: Links (form-button-alignment-start)
  - Alle Style-Optionen: Links: form-button-alignment-start, Mittig: form-button-alignment-center, Rechts: form-button-alignment-end, Gleichmäßig verteillt: form-button-alignment-space-between

##### Element Parts
- Typ: Form, ID: form-container-part-06acb819, Label: Formular Einstellungen
- Typ: PlainText, ID: form-element-value-missing-error-part-d090104c, Label: Fehlertext bei nicht ausgefüllten Pflichtfeldern.
- Typ: PlainText, ID: form-element-type-missmatch-error-part-8cbc022e, Label: Fehlertext bei falschem Typ.
- Typ: PlainText, ID: form-element-other-error-part-01ae5355, Label: Fehlertext bei anderen Fehlern.

##### Styles
- form-button-alignment-79553e65 | Formular-Button Ausrichtung
  - Quelle: configs/styles/form-button-alignment.js
  - Optionen:
    - Links: form-button-alignment-start
    - Mittig: form-button-alignment-center
    - Rechts: form-button-alignment-end
    - Gleichmäßig verteillt: form-button-alignment-space-between

##### Dropzones
- Dropzone ID: form-container-dropzone-cd1f258c
  - Erlaubte Elemente (Name + elementId):
    - Formuar Sektion (form-section-4cc6cfe4)

#### Formuar Sektion (form-section-4cc6cfe4)

- Quelle: content-elements/new-form/form-section/prototype/index.js
- Template: content-elements/new-form/form-section/prototype/template.twig
- Beschreibung: Abschnitt, der mehrere Formular-Elemente strukturiert.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - dropzoneIdLeft
  - dropzoneIdRight
  - elementDescription
  - elementLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - color
  - elementId
  - style
  - text
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight
  - titlePartId
  - weight
- Davon per `set` anpassbar:
  - color
  - elementId
  - style
  - text
  - titlePartId
  - weight
- Davon nur referenziert:
  - titleH3Color
  - titleH3Style
  - titleH3Text
  - titleH3Weight

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Keine erkannt

##### Styles
- new-form-column-amount-51c61f4f | Anzahl der Spalten
  - Quelle: configs/styles/new-form-section-column-amount.js
  - Standard im Template erkannt: new-form-column-amount-1
  - Optionen:
    - 1 Spalte: new-form-column-amount-1
    - 2 Spalten: new-form-column-amount-2

##### Dropzones
- Dropzone ID: form-section-dropzone-a1788622
  - Erlaubte Elemente (Name + elementId):
    - Checkbox (checkbox-49f468e6)
    - Checkbox Gruppe (checkbox-group-95a8d908)
    - Checkbox für Gruppe (checkbox-group-checkbox-b2745977)
    - Datei Upload (form-field-5674018a)
    - Umfrage NPS (form-poll-nps-a026d07b)
    - Umfrage Sterne (form-poll-star-2c7c0910)
    - Radio Gruppe (radio-group-6e279f5e)
    - Select (select-51fb02b4)
    - Textfeld (textarea-a4af575b)
    - H3 Überschrift (title-h3-gbnkTT)
    - Toggle Switch (toggle-switch-b0ae602a)
- Dropzone ID: form-section-right-dropzone-e4dd6542
  - Erlaubte Elemente (Name + elementId):
    - Checkbox (checkbox-49f468e6)
    - Checkbox Gruppe (checkbox-group-95a8d908)
    - Checkbox für Gruppe (checkbox-group-checkbox-b2745977)
    - Datei Upload (form-field-5674018a)
    - Umfrage NPS (form-poll-nps-a026d07b)
    - Umfrage Sterne (form-poll-star-2c7c0910)
    - Radio Gruppe (radio-group-6e279f5e)
    - Select (select-51fb02b4)
    - Textfeld (textarea-a4af575b)
    - H3 Überschrift (title-h3-gbnkTT)
    - Toggle Switch (toggle-switch-b0ae602a)

### Ordner: form-elements

#### Checkbox (checkbox-49f468e6)

- Quelle: content-elements/new-form/form-elements/checkbox/prototype/index.js
- Template: content-elements/new-form/form-elements/checkbox/prototype/template.twig
- Beschreibung: Formular Element, das eome Option aktiviert oder deaktiviert

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formCheckboxPartId
  - formCheckboxPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - checkbox
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - checkbox
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormCheckbox, ID: checkbox-part-7f02c9ea, Label: Formularfeld: Checkbox
- Typ: PlainText, ID: checkbox-helper-text-part-5989e5eb, Label: Helper Text

##### Styles
- Keine

##### Dropzones
- Keine

#### Checkbox Gruppe (checkbox-group-95a8d908)

- Quelle: content-elements/new-form/form-elements/checkbox-group/prototype/index.js
- Template: content-elements/new-form/form-elements/checkbox-group/template.twig
- Beschreibung: Formular Element, das Checkboxen gruppiert.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - checkboxGroupLabelTextPartId
  - checkboxGroupPartLabel
  - dropzoneId
  - elementDescription
  - elementLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - alignment
  - checkbox
  - elementId
  - elementPartId
  - errorInvalidPartId
  - groupLabel
  - groupLabelId
  - infoText
  - labelText
  - required
- Davon per `set` anpassbar:
  - alignment
  - checkbox
  - elementId
  - elementPartId
  - errorInvalidPartId
  - groupLabel
  - groupLabelId
  - infoText
  - labelText
  - required
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- alignment (Default: form-group-alignment-vertical) → form-group-alignment-7ed31a87 | Formular-Gruppen Ausrichtung
  - Default-Option: Untereinander (form-group-alignment-vertical)
  - Alle Style-Optionen: Untereinander: form-group-alignment-vertical, Nebeneinander: form-group-alignment-horizontal
- required (Default: bsi-group-not-required) → group-required-1b4b6dd9 | Ist die Gruppe ein Pflichtfeld?
  - Default-Option: Nein (bsi-group-not-required)
  - Alle Style-Optionen: Ja: bsi-group-required, Nein: bsi-group-not-required

##### Element Parts
- Typ: PlainText, ID: checkbox-group-label-a7bf5a38, Label: Label Chackbox Gruppe
- Typ: PlainText, ID: checkbox-group-helper-text-part-1cf1d475, Label: Helper Text

##### Styles
- group-required-1b4b6dd9 | Ist die Gruppe ein Pflichtfeld?
  - Quelle: configs/styles/group-required.js
  - Optionen:
    - Ja: bsi-group-required
    - Nein: bsi-group-not-required
- form-group-alignment-7ed31a87 | Formular-Gruppen Ausrichtung
  - Quelle: configs/styles/group-alignment.js
  - Optionen:
    - Untereinander: form-group-alignment-vertical
    - Nebeneinander: form-group-alignment-horizontal

##### Dropzones
- Dropzone ID: checkbox-group-dropzone-id-4f4a7409
  - Erlaubte Elemente (Name + elementId):
    - Checkbox für Gruppe (checkbox-group-checkbox-b2745977)

#### Radio Gruppe (radio-group-6e279f5e)

- Quelle: content-elements/new-form/form-elements/radio-group/prototype/index.js
- Template: content-elements/new-form/form-elements/radio-group/template.twig
- Beschreibung: Formular Element, das eine Auswahl aus mehreren Optionen erlaubt.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - helperTextPartId
  - helperTextPartLabel
  - radioGroupLabelPartId
  - radioGroupPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - alignment
  - elementId
  - elementPartId
  - errorInvalidPartId
  - groupLabel
  - infoText
  - labelText
  - radio
- Davon per `set` anpassbar:
  - alignment
  - elementId
  - elementPartId
  - errorInvalidPartId
  - groupLabel
  - infoText
  - labelText
  - radio
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- alignment (Default: form-group-alignment-vertical) → form-group-alignment-7ed31a87 | Formular-Gruppen Ausrichtung
  - Default-Option: Untereinander (form-group-alignment-vertical)
  - Alle Style-Optionen: Untereinander: form-group-alignment-vertical, Nebeneinander: form-group-alignment-horizontal

##### Element Parts
- Typ: FormRadio, ID: radio-group-label-84ad37f1, Label: Label Radio Gruppe
- Typ: PlainText, ID: radio-group-helper-text-part-c034d086, Label: Helper Text

##### Styles
- form-group-alignment-7ed31a87 | Formular-Gruppen Ausrichtung
  - Quelle: configs/styles/group-alignment.js
  - Optionen:
    - Untereinander: form-group-alignment-vertical
    - Nebeneinander: form-group-alignment-horizontal

##### Dropzones
- Keine

#### Select (select-51fb02b4)

- Quelle: content-elements/new-form/form-elements/select/prototype/index.js
- Template: content-elements/new-form/form-elements/select/prototype/template.twig
- Beschreibung: Formular Element, um eine Option aus einem Dropdown zu wählen.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formSelectPartId
  - formSelectPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - placeholderTextId
  - placeholderTextLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formSelecPlaceholderTextPartId
  - infoText
  - labelText
  - placeholderText
  - select
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formSelecPlaceholderTextPartId
  - infoText
  - labelText
  - placeholderText
  - select
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormSelect, ID: select-part-c1cbbcc6, Label: Formularfeld: Select
- Typ: PlainText, ID: select-helper-text-part-5989e5eb, Label: Helper Text
- Typ: PlainText, ID: placeholder-text-part-4f08e438, Label: Platzhaltertext (Keinen, wenn kein Platzhalter gewünscht ist)

##### Styles
- Keine

##### Dropzones
- Keine

#### Textfeld (textarea-a4af575b)

- Quelle: content-elements/new-form/form-elements/textarea/prototype/index.js
- Template: content-elements/new-form/form-elements/textarea/prototype/template.twig
- Beschreibung: Formular Element für mehrzeilige Textinformationen.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formTextareaPartId
  - formTextareaPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
  - textarea
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
  - textarea
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormTextarea, ID: textarea-part-18ad4cb0, Label: Formularfeld: Textfeld
- Typ: PlainText, ID: textarea-helper-text-part-47792922, Label: Helper Text

##### Styles
- Keine

##### Dropzones
- Keine

#### Toggle Switch (toggle-switch-b0ae602a)

- Quelle: content-elements/new-form/form-elements/toggle-switch/prototype/index.js
- Template: content-elements/new-form/form-elements/toggle-switch/prototype/template.twig
- Beschreibung: Formular Element, das zwischen zwei Zuständen wechselt

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formToggleSwitchPartId
  - formToggleSwitchPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
  - toggle
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - infoText
  - labelText
  - toggle
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormCheckbox, ID: toggle-switch-part-76e700be, Label: Formularfeld: Toggle Switch
- Typ: PlainText, ID: toggle-switch-helper-text-part-772277fc, Label: Helper Text

##### Styles
- Keine

##### Dropzones
- Keine

#### Datei Upload (form-field-5674018a)

- Quelle: content-elements/new-form/form-elements/upload-field/prototype/index.js
- Template: content-elements/new-form/form-elements/upload-field/template.twig
- Beschreibung: Formular Element, das Dateien von verschiedenen Typen akzeptiert.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - errorTextPartId
  - errorTextPartLabel
  - formFieldPartId
  - formFieldPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - formHelperTextPartId
  - infoText
  - labelText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - errorInvalidText
  - formHelperTextPartId
  - infoText
  - labelText
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormField, ID: form-field-part-c21742af, Label: Formularfeld: Datei Upload
- Typ: PlainText, ID: form-field-helper-text-part-0a34ce3d, Label: Helper Text
- Typ: PlainText, ID: form-field-part-error-invalid-6ca6d1fd, Label: Fehlermeldung bei ungültiger Eingabe

##### Styles
- Keine

##### Dropzones
- Keine

### Ordner: form-elements / checkbox-group

#### Checkbox für Gruppe (checkbox-group-checkbox-b2745977)

- Quelle: content-elements/new-form/form-elements/checkbox-group/checkbox-group-checkbox/prototype/index.js
- Template: content-elements/new-form/form-elements/checkbox-group/checkbox-group-checkbox/template.twig
- Beschreibung: Formular Element, das Teil einer Checkbox-Gruppe sein muss.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formCheckboxGroupPartId
  - formCheckboxGroupPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - labelText
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - labelText
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormCheckbox, ID: checkbox-group-checkbox-part-6cee4307, Label: Formularfeld: Checkbox für Checkbox Gruppe

##### Styles
- Keine

##### Dropzones
- Keine

### Ordner: form-elements / form-fields

#### E-mail Input (form-field-bdcd8d55)

- Quelle: content-elements/new-form/form-elements/form-fields/email-field/prototype/index.js
- Template: content-elements/new-form/form-elements/form-fields/email-field/template.twig
- Beschreibung: Formular Element, um eine gültige E-Mail-Adresse zu erfasst.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementId
  - elementLabel
  - errorTextPartId
  - errorTextPartLabel
  - formFieldPartId
  - formFieldPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - Keine erkannt
- Davon per `set` anpassbar:
  - Keine erkannt
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormField, ID: form-field-part-71d76c77, Label: Formularfeld: Text
- Typ: PlainText, ID: form-field-part-email-033f20a1, Label: Helper Text
- Typ: PlainText, ID: form-field-part-error-invalid-b8da3758, Label: Fehlermeldung bei ungültiger Eingabe

##### Styles
- Keine

##### Dropzones
- Keine

#### Text Input (form-field-2217aee4)

- Quelle: content-elements/new-form/form-elements/form-fields/text-field/prototype/index.js
- Template: content-elements/new-form/form-elements/form-fields/text-field/template.twig
- Beschreibung: Formular Element, das Texteingaben ermöglicht.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - Keine erkannt
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementId
  - elementLabel
  - formFieldPartId
  - formFieldPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - Keine erkannt
- Davon per `set` anpassbar:
  - Keine erkannt
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormField, ID: form-field-part-740b4e74, Label: Formularfeld: Text
- Typ: PlainText, ID: form-field-part-text-fb1cdc8d, Label: Helper Text

##### Styles
- Keine

##### Dropzones
- Keine

### Ordner: form-elements / polls

#### Umfrage NPS (form-poll-nps-a026d07b)

- Quelle: content-elements/new-form/form-elements/polls/nps/prototype/index.js
- Template: content-elements/new-form/form-elements/polls/nps/template.twig
- Beschreibung: Formular Element, um einen NPS-Wert zwischen 0 und 10 anzugeben.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formFieldPartId
  - formFieldPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - leftLabel
  - leftLabelId
  - rightLabel
  - rightLabelId
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formHelperTextPartId
  - infoText
  - labelText
  - leftLabelText
  - npsStartWith0
  - pollMin
  - rightLabelText
  - scaleLabelPosition
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formHelperTextPartId
  - infoText
  - labelText
  - leftLabelText
  - npsStartWith0
  - pollMin
  - rightLabelText
  - scaleLabelPosition
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormRadio, ID: form-poll-nps-part-0f3d03c5, Label: Formularfeld: Umfrage NPS
- Typ: PlainText, ID: form-poll-nps-helper-text-part-18d96c98, Label: Helper Text
- Typ: PlainText, ID: left-label-nps-part-210cf3a6, Label: Angabe Skala (links)
- Typ: PlainText, ID: right-label-nps-part-312d8b6e, Label: Angabe Skala (rechts)

##### Styles
- Keine

##### Dropzones
- Keine

#### Umfrage Sterne (form-poll-star-2c7c0910)

- Quelle: content-elements/new-form/form-elements/polls/stars/prototype/index.js
- Template: content-elements/new-form/form-elements/polls/stars/template.twig
- Beschreibung: Formular Element, das Feedback als Sterne-Bewertung erfasst.

##### Parameter (Module Export)
- Über Property per `set` anpassbar:
  - elementId
- Über Property nur referenziert (nicht direkt per `set`):
  - Keine erkannt
- Nicht als Property im Template verwendet:
  - elementDescription
  - elementLabel
  - formFieldPartId
  - formFieldPartLabel
  - helperTextPartId
  - helperTextPartLabel
  - template

##### Properties (Template)
- Alle erkannten Properties:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formHelperTextPartId
  - infoText
  - labelText
  - leftLabelText
  - pollMin
  - rightLabelText
  - value
- Davon per `set` anpassbar:
  - elementId
  - elementPartId
  - errorInvalidPartId
  - formHelperTextPartId
  - infoText
  - labelText
  - leftLabelText
  - pollMin
  - rightLabelText
  - value
- Davon nur referenziert:
  - Keine erkannt

##### Parameter ↔ Style Zuordnung
- Keine erkannt

##### Element Parts
- Typ: FormField, ID: form-poll-star-part-7abccf42, Label: Formularfeld: Umfrage Sterne
- Typ: PlainText, ID: form-poll-star-helper-text-part-3ecf0459, Label: Helper Text

##### Styles
- Keine

##### Dropzones
- Keine
