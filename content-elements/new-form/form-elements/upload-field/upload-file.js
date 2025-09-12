import Alpine from "@alpinejs/csp";

Alpine.data("fileUpload", () => ({

    files: [],
    isDragOver: false,

    init() {
    },

    triggerFileUpload() {
      this.$refs.fileInput.click();
    },

    onFileChange(event) {
      this._handleFiles(event.target.files);
      this._formElementValidationOnChange();
      // event.target.value = "";
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
      this.isDragOver = false;
      this._handleFiles(event.dataTransfer.files);
      this.$el.classList.remove("dragover");
    },

    removeFile() {
      this.files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
      this.files = [];
      this.$refs.fileInput.value = "";
    },

    _handleFiles(fileList) {
      const uploadedFiles = Array.from(fileList);

      const file = uploadedFiles[0]; // multiple upload is not allowed
  
      this.files[0] = {
          name: file.name,
          size: this._formatSize(file.size),
          preview: this._isImage(file) ? URL.createObjectURL(file) : null
      };
    },

    _formElementValidationOnChange() {
      console.log("Validierung des Files");
      console.log("Es ist nun " + this.files.length + "File hochgeladen worden.")
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
