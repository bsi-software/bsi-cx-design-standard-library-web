# Documentation: Structure of New Form Elements (new-form)

This documentation describes the minimal technical structure required so new form elements work with the existing validation, layout rules, and styles in the system.

## 1) Target structure

For a new element (example: `my-element`), use this pattern in the StandardLib:

```text
content-elements/new-form/form-elements/my-element/
  index.js
  styles.scss
  prototype/
    index.js
    template.twig
    _styles.scss (optional)
```

Inside project implementations, the `prototype` folder is not required:

```text
content-elements/new-form/form-elements/my-element/
  index.js
  styles.scss
  template.twig
```

Additionally:

1. Register the element in `content-elements/new-form/form-elements/index.js`.
2. If needed, attach style configs in `prototype/index.js` via `.withStyleConfigs(...)`.

## 1.1) Extend vs. use (important in practice)

First check whether your change can be solved via a property.
Many styles can be controlled this way, so you do not need to extend the element in your project.
Examples include:
- spacing and padding inside form fields
- checkbox and radio icon
- submit button color, etc.
Available properties can be found in [styles/properties.scss]

### If you want to **extend/derive** an element

You primarily work with files in the `prototype` folder (a blueprint):

- `prototype/index.js` (actual element definition with `withFile(...)`, `withParts(...)`, defaults)
- `prototype/template.twig` (markup structure)
- optional `prototype/_styles.scss` (specific styles)

The `index.js` outside `prototype` is usually only a technical entry point (loads `styles.scss` and exports from `prototype/index.js`).

### If you only want to **use** an element

Use the registered content element (via the normal element picker in the system) and do not work in the `prototype` folder.

Technically, the entry point outside `prototype` is used and delegates internally to `prototype`.

## 2) Required classes and required hierarchy

The following classes/containers are relevant for layout + validation and should not be renamed.

### Element root

- Required: `.form-element`
- Optional: `.required` or `.bsi-group-required` (asterisk on label + required logic)
- Optional: `.bsi-show-max-length-counter` (shows counter, useful only with `maxlength`)

Note: Relevant base styling runs via `.form-element` and internal structure classes (`.form-field-layout`, `.form-field-input-wrapper`, `.form-field-feedback-wrapper`).

Recommended root structure:

```html
<div class="bsi-element-... form-element ..." data-bsi-element="..." data-bsi-element-part="...">
  ...
</div>
```

### Internal field structure (important for grid/spacing)

The `.form-field-layout` wrapper should contain the following direct children (recommended order):

1. `.form-field-input-wrapper`
2. `.form-field-feedback-wrapper`
3. `.max-char-counter` (optional, can be empty)
4. `.helper-text-container`

Minimal structure:

```html
<div class="... form-field-layout">
  <div class="... form-field-input-wrapper">
    <!-- input/select/textarea or custom input -->
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

Why: The layout rules target exactly these classes via direct child selectors.

## 3) Validation: what an element must provide

The central logic is in `form-container/form.js` and works with the following conventions.

### For single fields (input, select, textarea)

- The field must be inside `.form-element`.
- The field should have a unique `id`.
- `for` on `label` is not used in the template because it is not reliable with the later system-replaced `id`.
- Semantic mapping happens through the final rendered markup and the ARIA logic in `form.js`.
- Alpine events on the field:
  - `@change="formElementValidationOnChange"`
  - `@blur="formElementValidationOnBlur"`
  - `@input="formElementValidationOnInput"`

### For groups (checkbox/radio groups as examples)

- Root class: `.checkbox-group` or `.radio-group`
- Group inputs use:
  - `@change="formGroupValidationOnChange"`
- For checkboxes in groups, additionally use `.checkbox-in-group`
- For radios, use `.native-radio` (as in existing code)
- Group errors belong in `.form-field-feedback-wrapper > .bsi-invalid-feedback`

Note: For new element types, you do not have to build a checkbox/radio group structure unless you actually need group logic.

### Error visibility

- Error elements use class `.bsi-invalid-feedback`.
- Visibility is controlled via class `.is-visible`.
- The form script sets `.has-visible-feedback` on the element.

Do not keep errors permanently visible manually; this is handled by form logic.

## 4) Custom inputs (checkbox/radio/toggle)

If a visual replacement is used instead of native input rendering:

- Native input: class `.native-input` (visually hidden)
- Visual element: class `.visual-input`
- Structure: `input.native-input + .visual-input` (direct adjacent sibling)

Only this way the existing state styles (checked/focus/invalid) work correctly.

## 5) Helper text, error text, accessibility

- Always place helper text as `.helper-text` inside `.helper-text-container`.
- Always place error text as `.bsi-invalid-feedback` inside `.form-field-feedback-wrapper`.
- Existing label class: `.form-label` (or `.second-form-label` for sub-labels).
- ARIA mappings are set dynamically by the form script (`ariaDescribedByElements`, `aria-invalid`).
- The `id` comes from the configurator and is required so elements can be reused and referenced uniquely.
- In Twig, a placeholder `id` is common practice; the final `id` is replaced by the system.
- `label[for]` is not used in the template.

Note: `form.js` sets `aria-describedby` / `aria-invalid` dynamically based on visible helper/error text.

## 6) Minimal Twig blueprint for new fields

```twig
<div data-bsi-element="{{ elementId }}" class="bsi-element-{{ elementId }} form-element {{ customClasses }}" data-bsi-element-part="{{ elementPartId }}">
  <label class="form-label">{{ labelText }}</label>

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

## 7) Checklist before integration

- Root contains `.form-element`.
- `.form-field-layout` contains the standard wrappers (`input`, `feedback`, `counter`, `helper`).
- Error output via `.bsi-invalid-feedback` is present.
- Input has a placeholder `id` in the template.
- `for` is not set on `label` in the template.
- Verify that the configurator-generated `id` exists in the final rendered markup.
- Alpine validation events are set.
- For custom inputs, `.native-input + .visual-input` is implemented.
- Element is registered in `form-elements/index.js`.

If these points are met, the new element behaves like existing form elements regarding layout, required markers, validation, and feedback display.