import Alpine from "@alpinejs/csp";

Alpine.data("advancedFileUpload", () => ({
  root: null,
  inputEl: null,
  fp: null,
  requiredValidationMessage: '',
  logicValidationMessage: '',
  sizeValidationMessage: '',
  validationElement: null,
  hiddenInputContainer: null,
  fileSizeMax: null,
  fileArray: null,
  fileIndex: null,
  fileCount: null,

  init() {
    this.validationElement = this.$root.querySelector('.invalid-feedback');
    this.hiddenInputContainer = this.$root.querySelector('.file-input-container');
    this.requiredValidationMessage = this.validationElement.innerText;
    this.logicValidationMessage = this.$root.querySelector('.max-count-validation').innerText;
    this.sizeValidationMessage = this.$root.querySelector('.logic-validation').innerText;
    this.fileSizeMax = this.$root.querySelector('.file-size-max').innerText;
    this.root = this.$root;
    this.fileIndex = 1;
    this.fileCount = 0;
  },
  initFormFieldInput() {
    this.inputEl = this.$el;
  },

  validateFileInput() {
    if(this.requiredErrorElement == null) {
      this.requiredErrorElement = this.$root.querySelector('.invalid-feedback');
    }

    if (!this.inputEl.value && this.inputEl.hasAttribute('required')) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
    this.fileArray = Array.from(this.$el.files);
    
    this.fileArray.forEach((file) => this._moveFilesToInputFields(file));
    this._validateAdvFileInput();
  },
  
  _findNextAvailableIndex() {
    // check for valid IDs
    Array.from(this.hiddenInputContainer.querySelectorAll('input')).forEach((hiddenInput) => {
      if (hiddenInput.value.length == 0) {
        this.fileIndex = hiddenInput.id.split('-')[2];
      }
    })
  },
  
  _moveFilesToInputFields(file) {
    this._findNextAvailableIndex();
    // handle overflowing files
    if (this.fileCount == 9) {
      let filenameCountErrorContainer = document.createElement('div');
      filenameCountErrorContainer.classList.add('adv-fileupload-name');
      filenameCountErrorContainer.classList.add('bi');
      filenameCountErrorContainer.classList.add('bi-x-square');
      filenameCountErrorContainer.classList.add('invalid-file-size');
      filenameCountErrorContainer.innerHTML = file.name + ' ' + this.logicValidationMessage;
      filenameCountErrorContainer.setAttribute('x-on:click', '_removeFailedInputMessage($event.currentTarget)');
      this.inputEl.after(filenameCountErrorContainer);
      return;
    }
    
    // handle too large files
    if(file && file.size > this.fileSizeMax) {
      let filenameSizeErrorContainer = document.createElement('div');
      filenameSizeErrorContainer.classList.add('adv-fileupload-name');
      filenameSizeErrorContainer.classList.add('bi');
      filenameSizeErrorContainer.classList.add('bi-x-square');
      filenameSizeErrorContainer.classList.add('invalid-file-size');
      filenameSizeErrorContainer.innerHTML = file.name  + this.sizeValidationMessage;
      filenameSizeErrorContainer.setAttribute('x-on:click', '_removeFailedInputMessage($event.currentTarget)');
      this.inputEl.after(filenameSizeErrorContainer);
      return;
    }

    // create label for filename and append div
    let filenameContainer = document.createElement('div');
    filenameContainer.classList.add('adv-fileupload-name');
    filenameContainer.classList.add('bi');
    filenameContainer.classList.add('bi-x-square');
    filenameContainer.innerHTML = file.name;
    
    let inputNameId = 'file-input-name-' + this.fileIndex;
    filenameContainer.setAttribute('id', inputNameId);
    filenameContainer.setAttribute('x-on:click', '_validateAfterContentClick($event.currentTarget)');
    
    // fill hidden input
    let hiddenInputID = '#file-input-' + this.fileIndex;
    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    this.$root.querySelector(hiddenInputID).files = dataTransfer.files;
    this.fileCount +=1;
    
    // add file description to file list
    this.inputEl.after(filenameContainer);
  },
  
  _validateAfterContentClick(clickTarget) {
    let id = clickTarget.getAttribute('id');
    // fetch id from control input
    let hiddenInputId = 'file-input-' + id.split('-')[3];
    document.getElementById(hiddenInputId).value = "";
    clickTarget.remove();
    this.fileCount -= 1;
    this._findNextAvailableIndex();
    this._validateAdvFileInput();
  },

  _removeFailedInputMessage(clickTarget) {
    clickTarget.remove();
  },
  
  _validateAdvFileInput() {
    if (this.inputEl.classList.contains('advanced-file-upload-input')) {
      let valid = false;
      let maxFiles = 9;
      let currentNumberOfFiles = this.fileCount;
      currentNumberOfFiles <= maxFiles ? valid = true : valid = false;
      
      let progressText = currentNumberOfFiles + ' / ' + maxFiles;
      this.root.querySelectorAll('.advanced-input-progress')[0].innerText = progressText;

      if (valid) {
        this.inputEl.setCustomValidity('');
        this.root.querySelector('.logic-validation').classList.remove('logic-validation-negative');
        this.root.querySelector('.logic-validation').classList.add('d-none');
      }
      else {
        this.inputEl.setCustomValidity('Invalid');
        this.root.querySelector('.logic-validation').classList.add('logic-validation-negative');
        this.root.querySelector('.logic-validation').classList.remove('d-none');
      }
    }
  },
}));
