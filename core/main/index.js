// import dependencies
import Alpine from 'alpinejs';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

// add module specific scripts in ALPHABETICAL order
import '../../content-elements/advanced/signature-field/prototype/signature-field';
import '../../content-elements/advanced/webcam-image-upload/prototype/webcam-image-upload';
import '../../content-elements/base/button/prototype/button';
import '../../content-elements/base/chart/prototype/chart';
import '../../content-elements/base/news-snippet/prototype/news-snippet';
import '../../content-elements/base/table/prototype/table';
import '../../content-elements/form/form-container/form';
import '../../content-elements/form/form-field/prototype/form-field';
import '../../content-elements/form/form-field-tel/prototype/form-tel-input';
import '../../content-elements/form/poll/prototype/poll';
import '../../content-elements/form/radio/prototype/radio';
import '../../content-elements/form/select/prototype/select';

// start Alpine.js AFTER importing all module scripts
window.Alpine = Alpine;
Alpine.start();