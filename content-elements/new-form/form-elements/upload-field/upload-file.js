import Alpine from "@alpinejs/csp";

Alpine.data("fileUpload", () => ({

    files: [],
    isDragOver: false,

    init() {
      this.$root.closest('form').addEventListener('reset', this.removeFile.bind(this), true); // last parameter for run in the capturing phase (true) or in the bubbling-phase (false)
    },

    triggerFileUpload() {
      this.$refs.fileInput.click();
    },

    onFileChange(event) {
      console.log("onFileChange")
      this._handleFiles(event.target.files);
      this._formElementValidationOnChange();
      this.$dispatch('after-change', event);
    },

    onDragOver() {
      this.isDragOver = true;
      this.$el.classList.add("dragover");
    },

    onDragLeave() {
      this.isDragOver = false;
      this.$el.classList.remove("dragover");
    },

    onDrop(event) {
      console.log("onDrop");
      if (this.files.length == 0) {
        this._handleFiles(event.dataTransfer.files);
      }

      // const changeEvent = new CustomEvent('change', { bubbles: true });
      // this.$refs.fileInput.dispatchEvent(changeEvent, event);
      
      this.isDragOver = false;
      this.$el.classList.remove("dragover");
    },

    removeFile() {
      console.log("removeFile");
      this.files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
      this.files = [];
      this.$refs.fileInput.value = "";
      this.$refs.fileInput.required ? this.$refs.fileInput.classList.add("custom-invalid") : '';
    },

    _handleFiles(fileList) {
      console.log("handleFile");
      const uploadedFiles = Array.from(fileList);

      if (uploadedFiles.length > 0) {
        const file = uploadedFiles[0]; // multiple upload is not allowed
        this.files[0] = {
          name: file.name,
          size: this._formatSize(file.size),
          preview: this._isImage(file) ? URL.createObjectURL(file) : null
        };
      }
    },

    _formElementValidationOnChange() {
      console.log("Validierung des Files");
      console.log("Es ist nun " + this.files.length + " File hochgeladen worden.")
      this.$refs.fileInput.classList.remove("custom-invalid");
    },

    _formatSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024)
        return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    },

    _isImage(file) {
      return file.type.startsWith('image/');
    },

}));
