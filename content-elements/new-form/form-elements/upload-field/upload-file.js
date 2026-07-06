import Alpine from "@alpinejs/csp";

const { getUploadFileLocalizedTexts } = require("../../../../core/main/localizedTexts");
const BYTES_IN_KILOBYTE = 1024;
const BYTES_IN_MEGABYTE = BYTES_IN_KILOBYTE * BYTES_IN_KILOBYTE;

Alpine.data("fileUpload", () => ({

    files: [],
    isDragOver: false,
    allowedMimes: [],
    allowedExtensions: [],

    // View state — directly toggled, referenced by name in template
    fileUploadDiv: null,
    hasFiles: false,
    noFiles: true,
    hasPreview: false,
    filePreview: '',
    fileName: '',
    fileSuffix: '',
    fileSize: '',

    /**
     * Initialize upload component state and allowed file types from input accept attribute.
     *
     * @returns {void}
     */
    init() {
      this._initLocalizedTexts();

      this.$root.closest('form').addEventListener('reset', this.removeFile.bind(this), true);
      this.fileUploadDiv = this.$el.querySelector('.file-upload');
      const allowedEntries = this.$refs.fileInput.getAttribute("accept")?.split(",")
        .map(atribute => atribute.trim().toLowerCase())
        .filter(attribute => attribute.replace(".", ""));

      this.allowedMimes = allowedEntries?.filter(fileType => fileType.includes("/")) ?? [];
      this.allowedExtensions = allowedEntries?.filter(fileType => fileType.startsWith("."))
        .map(fileType => fileType.replace(".", "")) ?? [];
    },

    /**
     * Initialize localized button labels and helper text based on global language setting.
     *
     * @returns {void}
     */
    _initLocalizedTexts() {
        this.$refs.removeButton.setAttribute('aria-label', getUploadFileLocalizedTexts('removeFile'));
        this.$refs.uploadButton.setAttribute('aria-label', getUploadFileLocalizedTexts('uploadButtonLabel'));
        this.$refs.uploadButton.querySelector('span').innerText = getUploadFileLocalizedTexts('uploadButtonLabel');
        this.$refs.dropText.innerText = getUploadFileLocalizedTexts('uploadDropText');
    },

    /**
     * Open the native file picker dialog.
     *
     * @returns {void}
     */
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },

    /**
     * Handle file input change event and trigger validation.
     *
     * @param {Event} event native change event from file input
     * @returns {void}
     */
    onFileChange(event) {
      this._handleFiles(event.target.files);
      this._formElementValidationOnChange();
      this.$dispatch('after-change', event);
    },

    /**
     * Handle synthetic change event after drag-and-drop update.
     *
     * @param {Event} event custom change-after-drop event
     * @returns {void}
     */
    onFileChangeAfterDrop(event) {
      this._formElementValidationOnChange();
      this.$dispatch('after-change', event);
    },


    /**
     * Set drag-over state and apply dragover styling on the upload area.
     *
     * @returns {void}
     */
    onDragOver() {
      this.isDragOver = true;
      if (this.fileUploadDiv) this.fileUploadDiv.classList.add("dragover");
    },

    /**
     * Reset visual dragover state when dragging leaves the dropzone.
     *
     * @returns {void}
     */
    onDragLeave() {
      this.isDragOver = false;
      if (this.fileUploadDiv) this.fileUploadDiv.classList.remove("dragover");
    },

    /**
     * Handle dropped files, sync native input and trigger follow-up validation event.
     *
     * @param {DragEvent} event native drop event
     * @returns {void}
     */
    onDrop(event) {
      if (this.files.length == 0) {
        this._handleFiles(event.dataTransfer.files);
      }

      this.$refs.fileInput.files = event.dataTransfer.files;

      const changeAfterDropEvent = new CustomEvent('change-after-drop', { 
        bubbles: true,
      });
      this.$refs.fileInput.dispatchEvent(changeAfterDropEvent);
      
      this.isDragOver = false;
      if (this.fileUploadDiv) this.fileUploadDiv.classList.remove("dragover");
    },

    /**
     * Remove selected file(s), revoke created object URLs and reset related state.
     *
     * @returns {void}
     */
    removeFile() {
      this.files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
      this.files = [];
      this._syncViewState();
      this.$refs.fileInput.value = "";

      const changeAfterDropEvent = new CustomEvent('change-after-drop', { 
        bubbles: true,
      });
      this.$refs.fileInput.dispatchEvent(changeAfterDropEvent);
    },

    /**
     * Convert selected file list into internal view model.
     *
     * @param {FileList|File[]} fileList files from input or drag-and-drop
     * @returns {void}
     */
    _handleFiles(fileList) {
      const uploadedFiles = Array.from(fileList);

      if (uploadedFiles.length > 0) {
        const file = uploadedFiles[0]; // multiple upload is not allowed
        this.files = [{
          name: file.name.split('.').slice(0, -1).join('.'),
          size: this._formatSize(file.size),
          suffix: file.name.split('.').pop().toLowerCase(),
          type: file.type,
          preview: this._isImage(file) ? URL.createObjectURL(file) : null
        }];
      }
      this._syncViewState();
    },

    /**
     * Synchronize derived UI state from current selected files.
     *
     * @returns {void}
     */
    _syncViewState() {
      if (this.files.length > 0) {
        const file = this.files[0];
        this.hasFiles = true;
        this.noFiles = false;
        this.hasPreview = !!file.preview;
        this.filePreview = file.preview || '';
        this.fileName = file.name;
        this.fileSuffix = '.' + file.suffix;
        this.fileSize = file.size;
      } else {
        this.hasFiles = false;
        this.noFiles = true;
        this.hasPreview = false;
        this.filePreview = '';
        this.fileName = '';
        this.fileSuffix = '';
        this.fileSize = '';
      }
    },

    /**
     * Validate selected file(s) against required state and allowed types/extensions.
     *
     * @returns {void}
     */
    _formElementValidationOnChange() {
      if (this.files.length > 0) {
        let validType = false;
        if (this.allowedMimes.length > 0 || this.allowedExtensions.length > 0) {
          this.files.forEach(file => {
            if (this.allowedMimes?.includes(file.type.toLowerCase())) {
              validType = true;
            }
            if (this.allowedExtensions?.includes(file.suffix)) {
              validType = true;
            }
          });
        } else {
          validType = true;
        }
        if (validType ) {
          this.$refs.fileInput.classList.remove("custom-invalid");
          this.$refs.fileInput.setCustomValidity("");
        } else {
          this.$refs.fileInput.classList.add("custom-invalid");
          this.$refs.fileInput.setCustomValidity("wrong file type");
        }
      } 
      else {
        if (this.$refs.fileInput.required) {
          this.$refs.fileInput.classList.add("custom-invalid");
          this.$refs.fileInput.setCustomValidity("no file");
        } else {
          this.$refs.fileInput.classList.remove("custom-invalid");
          this.$refs.fileInput.setCustomValidity("");
        }
      }
    },

    /**
     * Format file size in bytes to a human-readable string.
     *
     * @param {number} bytes file size in bytes
     * @returns {string} formatted size string
     */
    _formatSize(bytes) {
      if (bytes < BYTES_IN_KILOBYTE) return bytes + ' B';
      if (bytes < BYTES_IN_MEGABYTE)
        return (bytes / BYTES_IN_KILOBYTE).toFixed(1) + ' KB';
      return (bytes / BYTES_IN_MEGABYTE).toFixed(2) + ' MB';
    },

    /**
     * Check whether a file is an image based on MIME type.
     *
     * @param {File} file file to check
     * @returns {boolean} true if file is an image
     */
    _isImage(file) {
      return file.type.startsWith('image/');
    },

}));
