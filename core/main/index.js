// import dependencies
import Alpine from '@alpinejs/csp';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

// add module specific scripts in ALPHABETICAL order
import '../../content-elements/advanced/webcam-image-upload/prototype/webcam-image-upload';
import '../../content-elements/base/accordion/prototype/accordion';
import '../../content-elements/base/button/prototype/button';
import '../../content-elements/base/chart/prototype/chart';
import '../../content-elements/base/news-snippet/prototype/news-snippet';
import '../../content-elements/base/slot-finder/prototype/slot-finder';
import '../../content-elements/base/table/prototype/table';
import '../../content-elements/form/checkbox/prototype/checkbox';
import '../../content-elements/form/audiorecorder/prototype/audiorecorder';
import '../../content-elements/form/form-container/form';
import '../../content-elements/form/form-field-tel/prototype/form-tel-input';
import '../../content-elements/form/form-field/prototype/form-field';
import '../../content-elements/form/form-pin/form-pin';
import '../../content-elements/form/poll/prototype/poll';
import '../../content-elements/form/radio/prototype/radio';
import '../../content-elements/form/regex-input/prototype/regex-input';
import '../../content-elements/form/select/prototype/select';
import '../../content-elements/form/if-then/if-then-group';
import '../../content-elements/form/list/prototype/list';


// start Alpine.js AFTER importing all module scripts
window.Alpine = Alpine;
Alpine.start();