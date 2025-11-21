import Alpine from "@alpinejs/csp";

Alpine.data("fileUpload", () => ({

    files: [],
    isDragOver: false,
    // multiple: false,

    init() {
        // this.multiple = this.$root.querySelector(".native-file-upload-input").hasAttribute("muliple");
    },

    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    onFileChange(event) {
        _handleFiles(event.target.files)
        event.target.value = null; // if user updates the same file again, the onChange event is trigger again
    },

    onDragOver() {
      this.isDragOver = true;
    },

    onDragLeave() {
      this.isDragOver = false;
    },

    onDrop(event) {
      this.isDragOver = false;
      _handleFiles(event.dataTransfer.files)
    },

    removeFile() {
      this.files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
      this.files = [];
    },

    _handleFiles(fileList) {
        const files = Array.from(fileList);
    
        // Beispiel: nur erste Datei, wenn multiple nicht gesetzt ist
        // const file = this.multiple ? files : files[0];

        const file = files[0]; // multiple upload is not allowed
    
        this.file = {
            name: file.name,
            size: this.formatFileSize(file.size),
            preview: this.isImage(file) ? URL.createObjectURL(file) : null
        };
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
