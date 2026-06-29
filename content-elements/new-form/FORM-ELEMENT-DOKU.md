# Doku: Aufbau neuer Formularelemente (new-Form)

Diese Doku beschreibt den minimalen technischen Aufbau, damit neue Formularelemente mit der bestehenden Validierung, den Layout-Regeln und Styles im System funktionieren.

## 1) Zielstruktur im Projekt

Für ein neues Element (Beispiel: `my-element`) nutze dieses Muster:

```text
content-elements/new-form/form-elements/my-element/
  index.js
  styles.scss
  prototype/
    index.js
    template.twig
    _styles.scss (optional)
```

Zusätzlich:

1. Element in `content-elements/new-form/form-elements/index.js` registrieren.
2. Wenn nötig, Style-Config in `prototype/index.js` über `.withStyleConfigs(...)` anbinden.

## 1.1) Erben vs. Nutzen (wichtig für die Praxis)

### Wenn ich ein Element **erben/ableiten** will

Dann arbeitest du primär mit den Dateien im `prototype`-Ordner (eine art Blaupause):

- `prototype/index.js` (eigentliche Element-Definition mit `withFile(...)`, `withParts(...)`, Defaults)
- `prototype/template.twig` (Markup-Struktur)
- optional `prototype/_styles.scss` (spezifische Styles)

Der `index.js` außerhalb von `prototype` ist im Regelfall nur der technische Entry-Point (lädt `styles.scss` und exportiert aus `prototype/index.js`).

### Wenn ich ein Element nur **nutzen** will

Dann nutzt du das registrierte Content-Element (über die normale Element-Auswahl im System) und musst nicht im `prototype`-Ordner arbeiten.

Technisch wird dabei der Entry-Point außerhalb von `prototype` verwendet, der intern an `prototype` delegiert.

## 2) Pflichtklassen und Pflicht-Hierarchie

Die folgenden Klassen/Container sind für Layout + Validierung relevant und sollten nicht umbenannt werden.

### Root des Elements

- Pflicht: `.form-element`
- Für klassische Input-Felder, die im form-fields Ordner liegen zusätzlich: `.form-field`
- Optional: `.required` oder `.bsi-group-required` (Stern am Label + Required-Logik)
- Optional: `.bsi-show-max-length-counter` (zeigt Counter, nur mit `maxlength` sinnvoll)

Empfohlener Root-Aufbau:

```html
<div class="bsi-element-... form-element form-field ..." data-bsi-element="..." data-bsi-element-part="...">
  ...
</div>
```

### Interne Feldstruktur (wichtig für Grid/Abstände)

Der Wrapper `.form-field-layout` muss folgende direkten Kinder enthalten (Reihenfolge wie unten empfohlen):

1. `.form-field-input-wrapper`
2. `.form-field-feedback-wrapper`
3. `.max-char-counter` (optional, kann leer sein)
4. `.helper-text-container`

Minimal:

```html
<div class="... form-field-layout">
  <div class="... form-field-input-wrapper">
    <!-- input/select/textarea oder custom input -->
  </div>
  <div class="form-field-feedback-wrapper">
    <div class="bsi-invalid-feedback"></div>
  </div>
  <div class="max-char-counter"></div>
  <div class="helper-text-container">
    <div class="helper-text">...</div>
  </div>
</div>
```

Warum: Die Layout-Regeln greifen über direkte Child-Selektoren auf genau diese Klassen.

## 3) Validierung: Was ein Element liefern muss

Die zentrale Logik sitzt in `form-container/form.js` und arbeitet über folgende Konventionen.

### Für Einzel-Felder (Input, Select, Textarea)

- Feld muss innerhalb von `.form-element` liegen.
- Feld sollte eine eindeutige `id` haben (wichtig für feldspezifische Fehlermeldungen, z. B. Pattern).
- Label sollte über `for="..."` auf die Feld-`id` zeigen.
- Alpine-Events am Feld:
  - `@change="formElementValidationOnChange"`
  - `@blur="formElementValidationOnBlur"`
  - `@input="formElementValidationOnInput"`

### Für Gruppen (Checkbox-/Radio-Gruppen)

- Root-Klasse: `.checkbox-group` oder `.radio-group`
- Gruppen-Inputs nutzen:
  - `@change="formGroupValidationOnChange"`
- Für Checkboxen in Gruppen zusätzlich Klasse `.checkbox-in-group`
- Für Radios Klasse `.native-radio` (wie im Bestand)
- Gruppen-Error gehört in `.form-field-feedback-wrapper > .bsi-invalid-feedback`

### Sichtbarkeit von Fehlern

- Fehler-Elemente tragen Klasse `.bsi-invalid-feedback`.
- Sichtbarkeit wird per Klasse `.is-visible` gesetzt.
- Das Form-Skript setzt am Element `.has-visible-feedback`.

Nicht manuell dauerhaft einblenden; das übernimmt die Form-Logik.

## 4) Custom Inputs (Checkbox/Radio/Toggle)

Wenn ein visuelles Ersatz-Element statt nativer Darstellung genutzt wird:

- Native Input: Klasse `.native-input` (visuell versteckt)
- Visualisierung: Klasse `.visual-input`
- Struktur: `input.native-input + .visual-input` (direktes Adjacent-Sibling)

Nur so greifen die bestehenden Zustands-Styles (checked/focus/invalid) korrekt.

## 5) Helper-Text, Error-Text, A11y

- Helper-Text immer als `.helper-text` in `.helper-text-container` führen.
- Error-Text immer als `.bsi-invalid-feedback` in `.form-field-feedback-wrapper`.
- Label-Klasse im Bestand: `.form-label` (bzw. `.second-form-label` bei Unterlabels).
- Für A11y: `label[for]` + eindeutige Input-`id` konsequent setzen.

Hinweis: `form.js` setzt `aria-describedby`/`aria-invalid` dynamisch anhand sichtbarer Helper-/Error-Texte.

## 6) Minimaler Twig-Blueprint für neue Felder

```twig
<div data-bsi-element="{{ elementId }}" class="bsi-element-{{ elementId }} form-element form-field {{ customClasses }}" data-bsi-element-part="{{ elementPartId }}">
  <label for="my-input" class="form-label">{{ labelText }}</label>

  <div class="my-element-container form-field-layout">
    <div class="my-element-input-wrapper form-field-input-wrapper">
      <input
        id="my-input"
        type="text"
        @change="formElementValidationOnChange"
        @blur="formElementValidationOnBlur"
        @input="formElementValidationOnInput"
        maxlength="250"
      >
    </div>

    <div class="form-field-feedback-wrapper">
      <div class="bsi-invalid-feedback"></div>
    </div>

    <div class="max-char-counter"></div>

    <div class="helper-text-container">
      <div class="helper-text">{{ infoText }}</div>
    </div>
  </div>
</div>
```

## 7) Checkliste vor dem Einbau

- Root enthält `.form-element` (und bei Feld-Elementen `.form-field`).
- `.form-field-layout` enthält die Standard-Wrapper (`input`, `feedback`, `counter`, `helper`).
- Fehlerausgabe über `.bsi-invalid-feedback` vorhanden.
- Input hat `id`, Label hat passendes `for`.
- Alpine-Validation-Events gesetzt.
- Bei Custom Inputs: `.native-input + .visual-input` umgesetzt.
- Element in `form-elements/index.js` registriert.

Wenn diese Punkte erfüllt sind, verhält sich das neue Element im Regelfall wie die bestehenden Formular-Elemente bezüglich Layout, Required-Markierung, Validierung und Feedback-Anzeige.