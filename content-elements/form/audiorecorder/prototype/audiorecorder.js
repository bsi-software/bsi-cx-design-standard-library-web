import Alpine from '@alpinejs/csp';

Alpine.data('audioRecorder', () => ({
    mediaRecorder: null,
    chunks: [],
    progress: 0,
    interval: null,

    recordBtn: null,
    progressBar: null,
    audioPlayback: null,
    audioInput: null,
    
    init(){
        this.recordBtn = this.$root.querySelector('.record-btn');
        this.progressBar = this.$root.querySelector('.progress-bar');
        this.audioPlayback = this.$root.querySelector('.audio-playback');
        this.audioInput = this.$root.querySelector('.audio-input');

        console.log(this.recordBtn)
    },

    async toggleRecording() {

        if (!this.mediaRecorder || this.mediaRecorder.state === "inactive") {
            // Inizio registrazione
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.chunks = [];
            this.progress = 0;
            this.progressBar.style.width = "0%";

            this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
            this.mediaRecorder.onstop = () => {
                const blob = new Blob(this.chunks, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                this.audioPlayback.src = url;
                this.audioPlayback.style.display = "inline";

                // Inserisci il file nell’input nascosto
                const file = new File([blob], "registrazione.webm", { type: 'audio/webm' });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                this.audioInput.files = dataTransfer.files;

                clearInterval(this.interval);
            };

            this.mediaRecorder.start();
            this.recordBtn.classList.add('recording');

            // Aggiorna barra progresso
            this.interval = setInterval(() => {
                if (this.progress < 100) {
                    this.progress += 0.5;
                    this.progressBar.style.width = this.progress + "%";
                }
            }, 100);

        } else if (this.mediaRecorder.state === "recording") {
            // Ferma registrazione
            this.mediaRecorder.stop();
            this.recordBtn.classList.remove('recording');
        } 
    }

}));