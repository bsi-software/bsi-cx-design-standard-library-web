# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Next
* Add in form-field the file type and the phone number validation
* hover state and layout correction for nps element
* Removed duplicate datepicker icon on mobile.
* Adjusted input padding for better icon alignment.
* Fixed JS function for date/time inputs so it works correctly on mobile.


## [1.4.15] - 09.10.2025
* Make multi-column form dropzone extendable again


## [1.4.14] - 02.10.2025
* Fix possible npm security issues
* Update audio recorder element: change filetype to .ogg


## [1.4.13] - 01.10.2025
* Add the possibility to have a preselected value on a select while the attribute "First option is a placeholder" is set
* Add style for mobile layout to table element
* Add audio recorder element
* Add dark mode property
* Add new if-else-group element
* Add new Input "Regex-Input"
* Add role to button element
* Allow positioning of info-text below form-fields
* Date-Input: enable text-input and fix validation
* Date-Input: enable 24121990 => 24.12.1990 as input
* Fix select field accessability
* Fix radiobuttons accessability
* Fix checkbox accessability
* Fix positioning of info-text of checkbox
* Fix Accordion import
* NPS Score BFSG improvement
* Radio orientation prefill by property


## [1.4.12] - 03.06.2025
* Fix aria-states for header-image
* Fix tabindex for all elements
* Fix errormessages for screenreader
* Add possibility to change telephone number field input type in properties
* Add possibility to change date field input type in properties
* Alt-text warning for video
* Form: remove floating label style
* Pin-element: add restrictions to styling
* Select: submit empty values
* Update telephone number validation to support fix-line numbers

## [1.4.11] - 29.04.2025
* Fix poll submit
* Update form validation

## [1.4.10] - 20.02.2025
* Update nps-survey element: logic and mobile layout
* Add dark mode support for general layout and all elements
* Remove empty `ul`-tag from form summary validation 
* Fix the bootstrap date icon visualization
* Update dark mode and accessibility for poll element
* Add pin element
* Add the possibility to change accordion element header background color


## [1.4.9] - 05.02.2025
* Add new "list/list item" element where it's possible to sort the list with checkbox via drag and drop or keyboard
* Fix radio button survey validation
* Show warning in Editor if "alt" tag ist not set
* Let the radio tooltip (info) focusable in the form
* Fix form-input validation
* Add "aria-invalid" tag after form-validation
* Show a summary of all validation errors above form
* Fix error in the label and tooltip visualization
* Fix telephone number form field validation
* Columns displayed in grid not flex


## [1.4.8] - 11.10.2024
* export text element with .editor() function where htmlEditorConfig can be customized
* use font-size of headlines for all display sizes
* add a new font-size option in headlines for mobile
* large titles are now set depending on the normal font size of headlines
* if the headlines have been extended, changes to the extension may be necessary
* show deactivated social media follow icons in edit mode with less opacity
* change twitter link to x link
* add default max-lenghts to formfields
* add further explanation to recaptcha
* accodion trigger button will not trigger form submission, when used within a form container
* update error-messages for formfields
* add info-text and tooltip above formfields

## [1.4.7] - 11.10.2024
* Prevent spacer from shrinking to 0px if no other element is present (#386885)

## [1.4.6] - 17.05.2024
* Allow multiple slot finder instances on one site (#383421)

[1.4.6]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.6


## [1.4.5] - 08.05.2024

### changes
* Remove link from banner element
* Add form field validation to checkbox element
* Fix form field validation for number and text

[1.4.5]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.5


## [1.4.4] - 25.03.2024

### changes
* Enhanced form field validation (#377590):
  * For 'text' and 'password' the maximum length is now validated
  * For 'number' the minimum and maximum are checked
  * For 'date', 'datetime' and 'time', the minimum, maximum and length are now checked
  * Note: for 'email', a plausibility check (@ and . as well as only certain characters) was already present before
* Make webcam image upload element more configurable with additional properties (#375618)
* Configurable social share colors
* Correct boolean fallback values (#376041)
* Fix table and news snippet element

[1.4.4]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.4


## [1.4.3] - 09.02.2024

### changes
* Update dependencies to resolve an issue where a library used for development only was trying to permanently open a web socket (#344515)

[1.4.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.3


## [1.4.2] - 06.02.2024

### changes
* Inside the HTML content element, ensure that non-decendent iframes are considered with proper height
* Fix checkbox and radio formatting issues
* Replace Twitter with X (@#371665)

[1.4.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.2


## [1.4.1] - 24.01.2024

### changes
* Prevent endless loop in the phone number element, which used to cause landingpages/websites to crash in the previous release (#372595)
* Proper translation of date picker (#371869)
* Make slot finder texts configurable and translatable (#371869)
* Make webcam image element translatable on configuration level (#368259)
* Upgrade dependencies

[1.4.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.1

## [1.4.0] - 15.01.2024

**Known issue with this release**
We do not recommend to use this release as it will cause the page to crash as soon as the phone number content element is included. Please upgrade to the next patch release (1.4.1) to resolve this issue.

### Important Change
We are now using the [CSP Distribution of Alpine.js](https://alpinejs.dev/advanced/csp). Thus, developers my no longer use any inline JavaScript in HTML/TWIG files associated with Alpine. Instead, there must always be a reference pointing to an associated alpine data object. We changed the implementation of a couple of components to comply with this new rule. The advantage of it is that content elements using Alpine.js are now shown properly in the 'Preview' mode of the content editor and in live mode without having to change the CSP settings. By using de CSP distribution of Alpine.js, it is no longer required to add `usafe-eval` to the CSP, which helps to increase security (#355743).

### Additional changes
* New style to display a button as a link (#357481)
* Remove unused caption for logo element (#364438)
* New style to use a fixed width for the header image element (#365087)
* Additonal spacer options (#365087)
* Better description for banner and header image (#365087)
* Replace Twitter with X, fix typo in YouTube (@#371665)
* Prevent from chosing the wrong input type for poll element (#355743)
* Upgrade dependencies

[1.4.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.4.0

## [1.3.0] - 04.12.2023

### Added
* Slot finder element
* Tooltips for info text in forms

### Changed
* Improved accessibility
* Format placeholder for form fields of type date and time

[1.3.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.3.0

## [1.2.3] - 22.09.2023

### Changed
* Fixed bug due to circle dependency
* Updated dependencies

[1.2.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.2.3

## [1.2.2] - 11.08.2023

Improvements:
* #358866 - always use latest flags - prevent import issues

[1.2.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.2.2


## [1.2.1] - 11.08.2023

New feature:
* An **Accordion** content element has been added


Improvements:
* #354376 - Allow manual date/time picker input
* #352221 - fix chart color access
* #358223 - fix form style for floating labels
* fix radio element with sharp style
* Dependencies updated

[1.2.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.2.1


## [1.2.0] - 15.03.2023

New feature:
* New content element to capture an image by accessing the camera. The camera to be accessed (front or back) is configurable. A fallback mode allows to upload in image manually, when camera access is impossible.

Improvements:
* A bug (#342733) has been fixed which prevented from using the telephone number field multiple times

[1.2.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.2.0


## [1.1.5] - 16.02.2023

### Changed

Improvements:
* This package is now available on NPM
* Updated dependencies

[1.1.5]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.5


## [1.1.4] - 03.02.2023

### Changed

Improvements:
* Updated news snippet element in order to solve validation error in CX story.
* Updated dependencies and solved security issues.

[1.1.4]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.4

## [1.1.3] - 09.12.2022

### Changed

Improvements:
* Updated style to swap the order of columns (of the two column element) not only on mobile devices.
* Solved security issues.

[1.1.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.3

## [1.1.2] - 04.11.2022

### Changed

New feature:
* Add style to swap the order of columns on mobile devices:
In a two-column element (e.g. with text in the left column and an image in the right column), a style can be set so that the order of the columns is swapped only on mobile devices. This enables the image to be displayed above the text in mobile view, even if the image remains in the right column in the desktop view.

Improvements:
* Update labels of spacer style

[1.1.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.2


## [1.1.1] - 21.10.2022

### Changed

Quality improvements:
* column elements: fix non-working column ratio style
* banner element: fix opacity issue
* text element: fix font size style
* form elements: empty info text by default (instead of lorem ipsum...)

[1.1.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.1

## [1.1.0] - 23.08.2022

### Changed

Refactoring of content elements:
* Use include instead of element.render(). For detailed information, visit migration guide: https://github.com/bsi-software/bsi-cx-design-master-template-web/blob/main/MIGRATION_GUIDE.md
* Extension of variables to overwrite and the use of properties.

[1.1.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.1.0


## [1.0.5] - 22.07.2022

### Changed

* fix form poll element

[1.0.5]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.5



## [1.0.4] - 19.07.2022

### Changed

* change form poll element to numeric output

[1.0.4]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.4


## [1.0.3] - 15.07.2022

### Changed

* add form type field, update design build dependency

[1.0.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.3


## [1.0.2] - 08.06.2022

### Changed

* add german labels

[1.0.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.2


## [1.0.1] - 27.05.2022

### Changed

* update repository title, add twig blocks in dropzones

[1.0.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.1


## [1.0.0] - 25.05.2022

### Added

* Standard library for CX designs.

[1.0.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-web/releases/tag/1.0.0
